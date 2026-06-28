import "server-only";

import crypto from "node:crypto";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const COOKIE_NAME = "winsun_admin_session";
const MAX_AGE = 60 * 60 * 24 * 7;

const username = process.env.ADMIN_USERNAME || "admin";
const password = process.env.ADMIN_PASSWORD || "winsun2026";
const secret = process.env.ADMIN_SESSION_SECRET || "winsun-local-admin-secret";

function sign(value: string) {
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

function createToken() {
  const issuedAt = String(Date.now());
  const value = `${username}.${issuedAt}`;
  return `${value}.${sign(value)}`;
}

function verifyToken(token: string | undefined) {
  if (!token) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [tokenUser, issuedAt, signature] = parts;
  const value = `${tokenUser}.${issuedAt}`;
  const expected = sign(value);
  const age = Date.now() - Number(issuedAt);

  return (
    tokenUser === username &&
    Number.isFinite(age) &&
    age >= 0 &&
    age <= MAX_AGE * 1000 &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  );
}

export function validateAdminCredentials(inputUser: string, inputPassword: string) {
  return inputUser === username && inputPassword === password;
}

export async function hasAdminSession() {
  const store = await cookies();
  return verifyToken(store.get(COOKIE_NAME)?.value);
}

export function setAdminSessionCookie(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, createToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export function clearAdminSessionCookie(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function getAdminCredentialsHint() {
  return {
    username,
    password: process.env.ADMIN_PASSWORD ? "Configured in environment" : password,
  };
}
