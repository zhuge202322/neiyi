"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Globe2, MapPin, MoveRight, RadioTower } from "lucide-react";
import { gsap } from "gsap";
import * as THREE from "three";

type Market = {
  id: string;
  city: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  focus: string;
  description: string;
};

const markets: Market[] = [
  {
    id: "hong-kong",
    city: "Hong Kong",
    country: "China",
    region: "Asia",
    lat: 22.3193,
    lng: 114.1694,
    focus: "Foreign trade hub",
    description:
      "Hong Kong office coordination for buyer communication, sourcing support, sampling follow-up, and export service.",
  },
  {
    id: "russia",
    city: "Moscow",
    country: "Russia",
    region: "Eastern Europe",
    lat: 55.7558,
    lng: 37.6173,
    focus: "Underwear and thermal wear",
    description:
      "A priority market for value-focused underwear, cold-weather base layers, and replenishment programs.",
  },
  {
    id: "kazakhstan",
    city: "Almaty",
    country: "Kazakhstan",
    region: "Central Asia",
    lat: 43.2389,
    lng: 76.8897,
    focus: "Importer and wholesale programs",
    description:
      "Support for underwear and thermal wear importers serving Central Asian retail and wholesale channels.",
  },
  {
    id: "belarus",
    city: "Minsk",
    country: "Belarus",
    region: "Europe",
    lat: 53.9006,
    lng: 27.559,
    focus: "Private label and replenishment",
    description:
      "Buyer support for practical underwear ranges, repeat orders, and export-ready packing requirements.",
  },
  {
    id: "europe",
    city: "Europe",
    country: "Europe",
    region: "European Market",
    lat: 50.1109,
    lng: 8.6821,
    focus: "Design-led assortments",
    description:
      "OEM and ODM development for European buyers needing bras, panties, shapewear, loungewear, and retail packaging.",
  },
  {
    id: "united-states",
    city: "USA",
    country: "USA",
    region: "North America",
    lat: 34.0522,
    lng: -118.2437,
    focus: "Importer programs",
    description:
      "Long-distance sourcing support for underwear, shapewear, and loungewear importers seeking private label supply.",
  },
  {
    id: "southeast-asia",
    city: "Singapore",
    country: "Southeast Asia",
    region: "Asia Pacific",
    lat: 1.3521,
    lng: 103.8198,
    focus: "Regional retail and trading",
    description:
      "Flexible OEM and ODM support for Southeast Asian buyers, trading companies, and private labels.",
  },
];

const hub = markets[0];
const exportMarkets = markets.filter((market) => market.id !== "hong-kong");

function latLngToVector3(lat: number, lng: number, radius = 2) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function markerMaterial(color: string) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.95,
    depthTest: false,
  });
}

function createArc(start: THREE.Vector3, end: THREE.Vector3) {
  const distance = start.distanceTo(end);
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.35 + distance * 0.18);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const points = curve.getPoints(72);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return new THREE.Line(
    geometry,
    new THREE.LineBasicMaterial({
      color: 0xd9b06b,
      transparent: true,
      opacity: 0.88,
    }),
  );
}

export function GlobalSalesNetwork() {
  const [activeId, setActiveId] = useState("russia");
  const activeIdRef = useRef(activeId);
  const globeRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    group: THREE.Group;
    markers: Map<string, THREE.Mesh>;
    routeGroup: THREE.Group;
    renderer: THREE.WebGLRenderer;
  } | null>(null);

  const activeMarket = useMemo(
    () => markets.find((market) => market.id === activeId) ?? markets[1],
    [activeId],
  );

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const mount = globeRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/assets/earth-atmos-2048.jpg");
    const specularTexture = textureLoader.load("/assets/earth-specular-2048.jpg");
    const cloudTexture = textureLoader.load("/assets/earth-clouds-1024.png");
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(2, 96, 96),
      new THREE.MeshPhongMaterial({
        map: earthTexture,
        specularMap: specularTexture,
        specular: new THREE.Color(0x315f66),
        shininess: 18,
      }),
    );
    group.add(earth);

    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(2.018, 96, 96),
      new THREE.MeshLambertMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.34,
        depthWrite: false,
      }),
    );
    group.add(clouds);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.08, 96, 96),
      new THREE.MeshBasicMaterial({
        color: 0x5ba7b2,
        transparent: true,
        opacity: 0.13,
        side: THREE.BackSide,
      }),
    );
    group.add(atmosphere);

    const starGeometry = new THREE.BufferGeometry();
    const starPositions: number[] = [];

    for (let index = 0; index < 520; index += 1) {
      starPositions.push(
        THREE.MathUtils.randFloatSpread(18),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloat(-9, -3),
      );
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
    scene.add(
      new THREE.Points(
        starGeometry,
        new THREE.PointsMaterial({
          color: 0xffffff,
          size: 0.018,
          transparent: true,
          opacity: 0.58,
        }),
      ),
    );

    scene.add(new THREE.AmbientLight(0x9fb6bb, 1.45));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 3, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xd8a36b, 1.1);
    rimLight.position.set(-4, -1.5, 2);
    scene.add(rimLight);

    const markers = new Map<string, THREE.Mesh>();
    const pinGeometry = new THREE.SphereGeometry(0.045, 18, 18);

    markets.forEach((market) => {
      const position = latLngToVector3(market.lat, market.lng, 2.055);
      const pin = new THREE.Mesh(
        pinGeometry,
        markerMaterial(market.id === "hong-kong" ? "#f2d188" : "#ffffff"),
      );
      pin.position.copy(position);
      pin.userData.marketId = market.id;
      pin.renderOrder = 10;
      group.add(pin);

      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 18, 18),
        markerMaterial(market.id === "hong-kong" ? "#f2d188" : "#ad6f88"),
      );
      halo.position.copy(position.clone().multiplyScalar(1.003));
      halo.scale.setScalar(0.85);
      halo.userData.marketId = market.id;
      halo.renderOrder = 9;
      group.add(halo);
      markers.set(market.id, halo);
    });

    const routeGroup = new THREE.Group();
    group.add(routeGroup);
    sceneRef.current = { group, markers, routeGroup, renderer };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const onClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const hits = raycaster.intersectObjects(group.children, true);
      const hit = hits.find((item) => item.object.userData.marketId);

      if (hit?.object.userData.marketId) {
        setActiveId(hit.object.userData.marketId as string);
      }
    };

    renderer.domElement.addEventListener("click", onClick);

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      clouds.rotation.y += 0.00045;

      markers.forEach((marker, id) => {
        const isActive = id === activeIdRef.current;
        const pulse = isActive ? 1 + Math.sin(elapsed * 4) * 0.22 : 1;
        marker.scale.setScalar(isActive ? 1.45 * pulse : 0.92);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("click", onClick);
      sceneRef.current = null;
      renderer.dispose();
      earth.geometry.dispose();
      clouds.geometry.dispose();
      atmosphere.geometry.dispose();
      pinGeometry.dispose();
      starGeometry.dispose();
      mount.replaceChildren();
    };
  }, []);

  useEffect(() => {
    const sceneState = sceneRef.current;

    if (!sceneState) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetRotationY = THREE.MathUtils.degToRad(activeMarket.lng);
    const targetRotationX = THREE.MathUtils.degToRad(activeMarket.lat * 0.7);

    gsap.to(sceneState.group.rotation, {
      x: targetRotationX,
      y: targetRotationY,
      z: 0,
      duration: reduceMotion ? 0 : 1.25,
      ease: "power3.inOut",
    });

    sceneState.routeGroup.clear();

    if (activeMarket.id !== hub.id) {
      const route = createArc(
        latLngToVector3(hub.lat, hub.lng, 2.07),
        latLngToVector3(activeMarket.lat, activeMarket.lng, 2.07),
      );
      sceneState.routeGroup.add(route);

      gsap.fromTo(
        route.material,
        { opacity: 0 },
        { opacity: 0.9, duration: reduceMotion ? 0 : 0.55, ease: "power2.out" },
      );
    }

    sceneState.markers.forEach((marker, id) => {
      const material = marker.material as THREE.MeshBasicMaterial;
      material.color.set(id === activeMarket.id ? "#d9b06b" : "#ad6f88");
      material.opacity = id === activeMarket.id ? 1 : 0.78;
    });

    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { autoAlpha: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
        { autoAlpha: 1, y: 0, duration: reduceMotion ? 0 : 0.45, ease: "power2.out" },
      );
    }
  }, [activeMarket]);

  return (
    <section className="global-network">
      <div className="network-copy" data-animate="fade-up">
        <span className="eyebrow">Global Export</span>
        <h2>Serving 80+ Private Labels Worldwide</h2>
        <p>
          Trusted by global brands and importers with reliable OEM & ODM manufacturing services.
        </p>

        <div className="network-list" aria-label="Sales network locations">
          {exportMarkets.map((market) => (
            <button
              key={market.id}
              type="button"
              className={market.id === activeMarket.id ? "network-place is-active" : "network-place"}
              aria-pressed={market.id === activeMarket.id}
              onClick={() => setActiveId(market.id)}
            >
              <span>
                <strong>{market.country}</strong>
                <small>{market.city}</small>
              </span>
              <MoveRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div className="network-stage" data-animate="fade-up">
        <div className="network-globe" ref={globeRef} aria-label="Interactive 3D globe" />

        <div className="network-detail" ref={detailRef}>
          <span className="network-detail__tag">
            <Globe2 size={16} />
            {activeMarket.region}
          </span>
          <h3>
            {activeMarket.city}, {activeMarket.country}
          </h3>
          <p>{activeMarket.description}</p>
          <div className="network-detail__meta">
            <div>
              <small>Market Focus</small>
              <strong>{activeMarket.focus}</strong>
            </div>
            <div>
              <small>Route</small>
              <strong>Hong Kong / {activeMarket.city}</strong>
            </div>
          </div>
          <a href="/contact" className="network-detail__link">
            Discuss this market
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="network-signal" aria-hidden="true">
          <RadioTower size={20} />
          Live marketing network
        </div>
        <div className="network-orbit-label" aria-hidden="true">
          <MapPin size={16} />
          Hong Kong export hub
        </div>
      </div>
    </section>
  );
}
