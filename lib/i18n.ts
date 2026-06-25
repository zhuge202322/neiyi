export type Locale = "en" | "ru";

export function getLocaleFromValue(value: string | null | undefined): Locale {
  return value === "ru" ? "ru" : "en";
}

export function withLocale(href: string, locale: Locale) {
  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const [pathAndQuery, hash] = href.split("#");
  const [path, query = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(query);

  if (locale === "ru") {
    params.set("lang", "ru");
  } else {
    params.delete("lang");
  }

  const nextQuery = params.toString();
  return `${path}${nextQuery ? `?${nextQuery}` : ""}${hash ? `#${hash}` : ""}`;
}

export function tr(value: string, locale: Locale) {
  return locale === "ru" ? ruText[value] ?? value : value;
}

export const ruText: Record<string, string> = {
  Home: "Главная",
  Factory: "Производство",
  Products: "Продукция",
  "OEM Service": "OEM-услуги",
  Certificates: "Сертификаты",
  Blog: "Блог",
  Contact: "Контакты",
  Inquiry: "Запрос",
  English: "Английский",
  Russian: "Русский",
  Kazakh: "Казахский",
  Belarusian: "Белорусский",
  Japanese: "Японский",
  Korean: "Корейский",
  Arabic: "Арабский",
  "Chat on WhatsApp": "Написать в WhatsApp",

  "Underwear Manufacturer in China": "Производитель нижнего белья в Китае",
  "OEM and ODM bra, panty, shapewear, thermal wear, and private label underwear factory support for global B2B buyers.":
    "OEM и ODM производство бюстгальтеров, трусов, корректирующего белья, термобелья и private label для международных B2B покупателей.",
  "Send Inquiry": "Отправить запрос",
  "View Factory": "Смотреть фабрику",
  "Export Markets": "Экспортные рынки",
  "Russia / Europe / Global Buyers": "Россия / Европа / международные покупатели",
  "One-stop sourcing support from development to export-ready packaging.":
    "Комплексная поддержка от разработки до экспортной упаковки.",
  "About Winsun": "О Winsun",
  "Underwear OEM & ODM partner for global private label buyers.":
    "OEM и ODM партнер по нижнему белью для международных private label брендов.",
  "Established in 2015, Hong Kong Winsun Co., Limited connects overseas buyers with practical underwear development, production coordination, quality follow-up, packaging, and export service.":
    "Основанная в 2015 году, Hong Kong Winsun Co., Limited помогает зарубежным покупателям в разработке белья, координации производства, контроле качества, упаковке и экспорте.",
  "Our team provides project support for bras, panties, shapewear, thermal wear, loungewear, and knitted underwear products across Europe, Russia, Kazakhstan, Belarus, Southeast Asia, and other international markets. We have extensive experience in export and foreign trade services.":
    "Наша команда поддерживает проекты по бюстгальтерам, трусам, корректирующему белью, термобелью, домашней одежде и трикотажному белью для Европы, России, Казахстана, Беларуси, Юго-Восточной Азии и других рынков. У нас большой опыт экспорта и внешнеторгового обслуживания.",
  "Quick Facts": "Краткие факты",
  "Core Categories": "Основные категории",
  "B2B underwear programs for private labels, importers, and retail buyers.":
    "B2B программы нижнего белья для private label брендов, импортеров и розничных покупателей.",
  "Winsun focuses on practical product development, mature production coordination, and market-ready assortments for overseas clients.":
    "Winsun фокусируется на практичной разработке продукта, зрелой координации производства и ассортименте, готовом для зарубежных рынков.",
  "Factory Strength": "Возможности фабрики",
  "Manufacturing resources for repeat underwear supply programs.":
    "Производственные ресурсы для регулярных поставок нижнего белья.",
  "Winsun combines practical factory coordination, experienced workers, flexible lines, and export service for B2B buyers.":
    "Winsun объединяет координацию фабрики, опытных сотрудников, гибкие линии и экспортный сервис для B2B покупателей.",
  "Why Choose Winsun": "Почему выбирают Winsun",
  "Factory-direct support for private label underwear buyers.":
    "Поддержка напрямую от фабрики для покупателей private label белья.",
  "OEM Process": "OEM процесс",
  "How We Work": "Как мы работаем",
  "Buyers can start with a tech pack, reference sample, artwork, or a target product range.":
    "Покупатель может начать с техпакета, образца, макета или целевого ассортимента.",
  FAQ: "Вопросы и ответы",
  "Frequently Asked Questions": "Частые вопросы",
  "Quick answers for buyers preparing OEM, ODM, and private label underwear projects.":
    "Краткие ответы для покупателей, готовящих OEM, ODM и private label проекты нижнего белья.",
  "Office / Workshop / Showroom / Warehouse / Knitting Room":
    "Офис / цех / шоурум / склад / вязальный участок",
  "Start A Program": "Начать проект",
  "Send your design, sample, or target range. We will help turn it into a production plan.":
    "Отправьте дизайн, образец или целевой ассортимент. Мы поможем превратить это в производственный план.",
  "Request Quote": "Запросить цену",

  "Knitted Underwear": "Трикотажное белье",
  Bras: "Бюстгальтеры",
  Panties: "Трусы",
  Shapewear: "Корректирующее белье",
  "Thermal Wear": "Термобелье",
  Loungewear: "Домашняя одежда",
  "Comfort-led everyday collections made for repeat programs, private labels, and retail-ready assortments.":
    "Повседневные комфортные коллекции для регулярных программ, private label и розничного ассортимента.",
  "Modern silhouettes with flexible material sourcing, sample refinement, and market-oriented fit direction.":
    "Современные силуэты с гибким подбором материалов, доработкой образцов и посадкой под рынок.",
  "Core and seasonal ranges across cotton, modal, lace, seamless-inspired, and knitted fabric options.":
    "Базовые и сезонные линейки из хлопка, модала, кружева, seamless-направления и трикотажных материалов.",
  "Supportive bodywear developed around structure, elasticity, comfort, and packaging requirements.":
    "Поддерживающее белье, разработанное с учетом структуры, эластичности, комфорта и требований к упаковке.",
  "Warm, practical base-layer programs for cooler markets with stable production and delivery planning.":
    "Теплые практичные базовые слои для холодных рынков со стабильным производством и планированием поставок.",
  "Relaxed knitted apparel and related products designed for lifestyle, value, and replenishment demand.":
    "Комфортная трикотажная одежда и сопутствующие товары для lifestyle, ценового сегмента и повторных поставок.",
  "Everyday and market-ready bra styles for OEM and ODM development.":
    "Повседневные и рыночные модели бюстгальтеров для OEM и ODM разработки.",
  "Core panty programs for private labels, retail buyers, and repeat orders.":
    "Базовые программы трусов для private label, розничных покупателей и повторных заказов.",
  "Warm base-layer sets for seasonal and cooler-market programs.":
    "Теплые комплекты базового слоя для сезонных и холодных рынков.",
  "Supportive shapewear ranges built around comfort, structure, and fit.":
    "Линейки корректирующего белья с фокусом на комфорт, структуру и посадку.",
  "Seamless Bra": "Бесшовный бюстгальтер",
  "Sports Bra": "Спортивный бюстгальтер",
  "Wireless Bra": "Бюстгальтер без косточек",
  "Lace Bra": "Кружевной бюстгальтер",
  "Cotton Panties": "Хлопковые трусы",
  "Seamless Panties": "Бесшовные трусы",
  "Panty Color Set": "Цветной набор трусов",
  "High Waist Panties": "Трусы с высокой талией",
  "Men's Thermal Set": "Мужской комплект термобелья",
  "Men's Thermal Black Set": "Черный мужской комплект термобелья",
  "Women's Thermal Set": "Женский комплект термобелья",
  Bodysuit: "Боди",
  "Waist Trainer": "Корсет для талии",
  "Shapewear Set": "Комплект корректирующего белья",
  "Shaping Shorts": "Корректирующие шорты",
  "Smooth daily bra programs for private labels seeking clean lines and comfort.":
    "Гладкие повседневные бюстгальтеры для private label брендов, которым нужны чистые линии и комфорт.",
  "Supportive active bra development for fitness, lounge, and athleisure buyers.":
    "Разработка поддерживающих спортивных бюстгальтеров для фитнеса, lounge и athleisure покупателей.",
  "Wire-free comfort bra styles for everyday retail and replenishment programs.":
    "Комфортные бюстгальтеры без косточек для повседневной розницы и повторных программ.",
  "Feminine lace bra options for seasonal assortments and private label ranges.":
    "Женственные кружевные бюстгальтеры для сезонного ассортимента и private label линеек.",
  "Core cotton panty programs for everyday underwear collections.":
    "Базовые хлопковые трусы для повседневных коллекций белья.",
  "Smooth panty styles for invisible-feel retail ranges and value packs.":
    "Гладкие трусы с эффектом незаметности для розницы и value pack наборов.",
  "Assorted color panty sets for retail packs, online bundles, and promotions.":
    "Наборы трусов разных цветов для розничных упаковок, онлайн-комплектов и промо.",
  "High waist silhouettes for comfort, coverage, and shaping-inspired programs.":
    "Силуэты с высокой талией для комфорта, покрытия и shaping-направления.",
  "Men's warm base-layer sets for winter retail and export programs.":
    "Мужские теплые комплекты базового слоя для зимней розницы и экспорта.",
  "Black men's thermal set option for practical winter underwear ranges.":
    "Черный мужской комплект термобелья для практичных зимних линеек.",
  "Women's fitted thermal sets for cooler-market daily wear programs.":
    "Женские облегающие комплекты термобелья для повседневной носки в холодных рынках.",
  "One-piece shapewear bodysuit development for smooth support collections.":
    "Разработка цельного боди-корректора для коллекций с гладкой поддержкой.",
  "Waist support styles for structured shapewear and body shaping programs.":
    "Модели с поддержкой талии для структурированного корректирующего белья.",
  "Coordinated shapewear set options for waist and thigh support programs.":
    "Комплекты корректирующего белья для поддержки талии и бедер.",
  "Shaping shorts for smoothing, support, and comfort-led bodywear ranges.":
    "Корректирующие шорты для сглаживания, поддержки и комфортных bodywear линеек.",
  "Seamless look": "Бесшовный вид",
  "Soft stretch hand feel": "Мягкое эластичное ощущение",
  "Private label colorways": "Цвета для private label",
  "Active support": "Поддержка для активности",
  "Moisture-friendly fabrics": "Ткани с комфортом по влаге",
  "Elastic and logo options": "Варианты резинки и логотипа",
  "Wire-free comfort": "Комфорт без косточек",
  "Smooth cup direction": "Гладкая чашка",
  "Daily wear positioning": "Позиционирование для ежедневной носки",
  "Lace styling": "Кружевной стиль",
  "Multiple color options": "Несколько вариантов цвета",
  "Retail packaging support": "Поддержка розничной упаковки",
  "Cotton-rich direction": "Хлопковое направление",
  "Daily comfort": "Ежедневный комфорт",
  "Size set planning": "Планирование размерного ряда",
  "Smooth edge direction": "Гладкий край",
  "Multi-pack colors": "Цвета для мультиупаковок",
  "Soft stretch fabrics": "Мягкие эластичные ткани",
  "Color assortment": "Цветовой ассортимент",
  "Pack development": "Разработка упаковки",
  "Label and polybag support": "Поддержка этикеток и пакетов",
  "High waist fit": "Посадка с высокой талией",
  "Coverage-focused": "Фокус на покрытии",
  "Comfort waistband options": "Варианты комфортного пояса",
  "Warm base layer": "Теплый базовый слой",
  "Set packaging": "Упаковка комплекта",
  "Seasonal order planning": "Планирование сезонных заказов",
  "Dark colorway": "Темная расцветка",
  "Long sleeve and pant set": "Комплект с длинным рукавом и брюками",
  "Bulk order support": "Поддержка оптовых заказов",
  "Women's fit direction": "Женская посадка",
  "Warm hand feel": "Теплое ощущение ткани",
  "Color and size planning": "Планирование цвета и размеров",
  "One-piece support": "Цельная поддержка",
  "Smooth body line": "Гладкая линия тела",
  "Private label trim options": "Варианты отделки private label",
  "Waist support": "Поддержка талии",
  "Hook and closure options": "Варианты крючков и застежек",
  "Elastic strength planning": "Планирование силы эластика",
  "Coordinated set": "Согласованный комплект",
  "Support zones": "Зоны поддержки",
  "Retail-ready presentation": "Презентация для розницы",
  "Thigh coverage": "Покрытие бедер",
  "Smooth support": "Гладкая поддержка",
  "Comfort waistband direction": "Комфортный пояс",

  "Established": "Основана",
  "Private Label Ready": "Готово для private label",
  "Export Service": "Экспортный сервис",
  "Sample Time": "Срок образца",
  "Lead Time": "Срок производства",
  "Private Label": "Private label",
  Yes: "Да",
  "2,000 pcs / colour": "2 000 шт. / цвет",
  "7-10 days": "7-10 дней",
  "25-40 days": "25-40 дней",
  "Factory Direct Pricing": "Цены напрямую от фабрики",
  "Competitive pricing without middlemen.": "Конкурентные цены без посредников.",
  "OEM & ODM Service": "OEM и ODM сервис",
  "Custom logo, packaging and design support.": "Поддержка логотипа, упаковки и дизайна.",
  "Low MOQ": "Низкий MOQ",
  "Suitable for startups and growing brands.": "Подходит для стартапов и растущих брендов.",
  "Strict Quality Control": "Строгий контроль качества",
  "100% inspection before shipment.": "100% проверка перед отгрузкой.",
  "Fast Sampling": "Быстрые образцы",
  "Sample delivery within 7-10 days.": "Образцы за 7-10 дней.",
  "On-time Delivery": "Своевременная доставка",
  "Reliable production schedule.": "Надежный производственный график.",
  "Confirm Design": "Подтверждение дизайна",
  "Sample Development": "Разработка образца",
  "Sample Approval": "Утверждение образца",
  "Mass Production": "Массовое производство",
  "Quality Inspection": "Контроль качества",
  Shipment: "Отгрузка",
  "What is your MOQ?": "Какой у вас MOQ?",
  "MOQ depends on product type and customization requirements.":
    "MOQ зависит от типа продукта и требований к кастомизации.",
  "Can you do custom logo?": "Можете сделать логотип клиента?",
  "Yes, OEM and private label services are available.":
    "Да, доступны OEM и private label услуги.",
  "How long is sample time?": "Сколько занимает изготовление образца?",
  "Usually 7-10 days.": "Обычно 7-10 дней.",
  "How long is production time?": "Сколько занимает производство?",
  "Approximately 25-40 days.": "Примерно 25-40 дней.",
  "Which countries do you export to?": "В какие страны вы экспортируете?",
  "Europe, Russia, North America, Southeast Asia and more.":
    "Европа, Россия, Северная Америка, Юго-Восточная Азия и другие рынки.",

  "Product Range": "Ассортимент продукции",
  "OEM & ODM bra, panty, shapewear, and thermal wear manufacturing.":
    "OEM и ODM производство бюстгальтеров, трусов, корректирующего белья и термобелья.",
  "From essential underwear to structured shapewear and seasonal thermal sets, Winsun supports private label buyers with practical sampling and production execution.":
    "От базового белья до структурированного корректирующего белья и сезонного термобелья Winsun поддерживает private label покупателей в образцах и производстве.",
  "Back to Blog": "Назад в блог",
  "Private Label Underwear Guide": "Гайд по private label белью",
  "How to Start a Private Label Underwear Brand: A Complete Guide for Beginners":
    "Как запустить бренд нижнего белья private label: полное руководство для начинающих",
  "Learn how to start a private label underwear brand from product development to manufacturing, branding, and sales. A complete guide for beginners.":
    "Узнайте, как запустить бренд нижнего белья private label: от разработки продукта до производства, брендинга и продаж.",
  "Brand Planning": "Планирование бренда",
  "OEM / ODM Factory": "OEM / ODM фабрика",
  "2026 Guide": "Гайд 2026",
  "Private Label Underwear": "Private label белье",
  "Underwear Manufacturer": "Производитель белья",
  "OEM Underwear": "OEM белье",
  "ODM Underwear": "ODM белье",
  "Underwear Brand": "Бренд белья",
  "Custom Underwear Manufacturing": "Индивидуальное производство белья",
  "8-Step Launch Route": "Маршрут запуска в 8 шагов",
  "From market definition to production order": "От определения рынка до производственного заказа",
  "OEM / ODM Support": "OEM / ODM поддержка",
  "Samples, fabrics, labels, packaging, and QC": "Образцы, ткани, этикетки, упаковка и контроль качества",
  "Buyer Focus": "Фокус на покупателе",
  "Made for new brands, retailers, and importers": "Для новых брендов, ритейлеров и импортеров",
  "Product positioning, sampling, branding, bulk production, and export support.":
    "Позиционирование продукта, образцы, брендинг, массовое производство и экспортная поддержка.",
  Contents: "Содержание",
  Introduction: "Введение",
  "Looking for a Reliable Underwear Manufacturer?": "Ищете надежного производителя нижнего белья?",
  "Winsun specializes in OEM and ODM underwear manufacturing.":
    "Winsun специализируется на OEM и ODM производстве нижнего белья.",
  "We support bras, panties, shapewear, thermal wear, and private label solutions for buyers preparing their first or next underwear program.":
    "Мы поддерживаем бюстгальтеры, трусы, корректирующее белье, термобелье и private label решения для новых и повторных программ.",

  "What Is a Private Label Underwear Brand?": "Что такое бренд нижнего белья private label?",
  "A private label underwear brand is a product line manufactured by a factory but sold under your own brand name, logo, and packaging.":
    "Private label бренд белья - это линейка, производимая фабрикой, но продаваемая под вашим брендом, логотипом и упаковкой.",
  "Instead of investing in your own production facility, you work with an experienced underwear manufacturer who produces products according to your specifications.":
    "Вместо инвестиций в собственную фабрику вы работаете с опытным производителем, который выпускает продукцию по вашим требованиям.",
  "This model allows businesses to focus on branding, marketing, and sales while the manufacturer handles production.":
    "Эта модель позволяет бизнесу сосредоточиться на брендинге, маркетинге и продажах, пока производитель отвечает за производство.",
  "Women's bras": "Женские бюстгальтеры",
  "Men's underwear": "Мужское белье",
  "Seamless underwear": "Бесшовное белье",
  "Private label bra and panty product display": "Демонстрация private label бюстгальтеров и трусов",
  "Step 1: Identify Your Target Market": "Шаг 1: Определите целевой рынок",
  "Identify Your Target Market": "Определите целевой рынок",
  "Before developing products, you should clearly define your target customers.":
    "Перед разработкой продукта нужно четко определить целевого покупателя.",
  "A clear market position helps you create products that stand out from competitors.":
    "Четкое позиционирование помогает создавать продукты, отличающиеся от конкурентов.",
  "Are you targeting women, men, or both?": "Вы ориентируетесь на женщин, мужчин или обе группы?",
  "Will you focus on comfort, fashion, sports, or shapewear?":
    "Вы фокусируетесь на комфорте, моде, спорте или корректирующем белье?",
  "What age group are you targeting?": "На какую возрастную группу вы ориентируетесь?",
  "Which countries or regions will you sell to?": "В каких странах или регионах вы будете продавать?",
  "Seamless Underwear": "Бесшовное белье",
  "Comfort-focused products suitable for everyday wear.": "Комфортные продукты для ежедневной носки.",
  "Sports Bras": "Спортивные бюстгальтеры",
  "Designed for active lifestyles and fitness enthusiasts.": "Для активного образа жизни и фитнеса.",
  "Products that provide body shaping and support.": "Продукты для моделирования и поддержки фигуры.",
  "Sustainable Underwear": "Экологичное белье",
  "Made from eco-friendly fabrics and materials.": "Из экологичных тканей и материалов.",
  "Private label underwear brand planning": "Планирование private label бренда белья",
  "Step 2: Develop Your Brand Identity": "Шаг 2: Разработайте идентичность бренда",
  "Develop Your Brand Identity": "Разработайте идентичность бренда",
  "Your brand is more than just a logo.": "Бренд - это больше, чем логотип.",
  "Strong branding helps customers remember and trust your products.":
    "Сильный брендинг помогает клиентам запомнить продукт и доверять ему.",
  "Brand name": "Название бренда",
  "Logo design": "Дизайн логотипа",
  "Brand story": "История бренда",
  "Packaging design": "Дизайн упаковки",
  "Product positioning": "Позиционирование продукта",
  "Affordable Everyday Comfort": "Доступный ежедневный комфорт",
  "A value-led position for repeat basics.": "Позиционирование базовых повторных товаров.",
  "Premium Lingerie": "Премиальное белье",
  "A refined direction for elevated materials and presentation.":
    "Более высокий уровень материалов и презентации.",
  "Eco-friendly Underwear": "Экологичное белье",
  "A sustainability-led story with responsible materials.":
    "История устойчивости и ответственных материалов.",
  "Plus-size Collections": "Коллекции plus-size",
  "A fit-focused offer for underserved customers.": "Предложение с фокусом на посадку для недооцененной аудитории.",
  "Step 3: Choose the Right Underwear Manufacturer": "Шаг 3: Выберите правильного производителя белья",
  "Choose the Right Underwear Manufacturer": "Выберите правильного производителя белья",
  "Selecting the right manufacturing partner is one of the most important decisions.":
    "Выбор производственного партнера - одно из самых важных решений.",
  "A professional manufacturing partner can significantly reduce risks and improve product quality.":
    "Профессиональный производитель снижает риски и улучшает качество продукта.",
  "Stable Production Capacity": "Стабильные производственные мощности",
  "Ensure the factory can support your future growth.": "Убедитесь, что фабрика поддержит ваш рост.",
  "Ask about inspection procedures and quality standards.": "Спросите о процедурах инспекции и стандартах качества.",
  "Sampling Service": "Сервис образцов",
  "Reliable manufacturers should provide samples before mass production.":
    "Надежные производители предоставляют образцы до массового производства.",
  "Export Experience": "Экспортный опыт",
  "Factories with international experience understand global quality requirements and shipping processes.":
    "Фабрики с международным опытом понимают мировые требования к качеству и логистике.",
  "Underwear factory production workshop": "Производственный цех нижнего белья",
  "Step 4: Select Fabrics and Product Styles": "Шаг 4: Выберите ткани и модели",
  "Select Fabrics and Product Styles": "Выберите ткани и модели",
  "Fabric selection directly affects comfort, durability, and customer satisfaction.":
    "Выбор ткани напрямую влияет на комфорт, долговечность и удовлетворенность клиента.",
  "Work closely with your manufacturer to select fabrics that match your brand positioning.":
    "Работайте с производителем, чтобы выбрать ткани под позиционирование бренда.",
  Cotton: "Хлопок",
  "Soft, breathable, and suitable for everyday wear.": "Мягкий, дышащий и подходит для ежедневной носки.",
  Modal: "Модал",
  "Smooth, lightweight, and moisture-absorbing.": "Гладкий, легкий и впитывающий влагу.",
  "Nylon-Spandex": "Нейлон-спандекс",
  "Commonly used in seamless underwear and shapewear.":
    "Часто используется в бесшовном и корректирующем белье.",
  "Bamboo Fiber": "Бамбуковое волокно",
  "Eco-friendly and naturally antibacterial.": "Экологичное и природно антибактериальное.",
  Lace: "Кружево",
  "Often used in premium lingerie collections.": "Часто используется в премиальных коллекциях белья.",
  "Underwear fabric swatches": "Образцы тканей для белья",
  "Step 5: Create Custom Branding": "Шаг 5: Создайте индивидуальный брендинг",
  "Create Custom Branding": "Создайте индивидуальный брендинг",
  "Private label products should include customized branding elements.":
    "Private label продукция должна включать индивидуальные элементы брендинга.",
  "Consistent branding creates a professional appearance and improves customer recognition.":
    "Единый брендинг создает профессиональный вид и узнаваемость.",
  "Woven labels": "Жаккардовые этикетки",
  "Printed labels": "Печатные этикетки",
  "Heat transfer logos": "Термотрансферные логотипы",
  "Hang tags": "Бирки",
  "Packaging bags": "Упаковочные пакеты",
  "Gift boxes": "Подарочные коробки",
  "Underwear care label example": "Пример этикетки ухода за бельем",
  "Step 6: Approve Samples": "Шаг 6: Утвердите образцы",
  "Approve Samples": "Утвердите образцы",
  "Before mass production begins, always review product samples carefully.":
    "Перед массовым производством всегда внимательно проверяйте образцы.",
  "Sample approval helps prevent costly production mistakes. Most manufacturers can provide samples within 7-10 days.":
    "Утверждение образцов помогает избежать дорогих ошибок. Обычно образцы готовы за 7-10 дней.",
  "Fabric quality": "Качество ткани",
  "Sizing accuracy": "Точность размеров",
  "Logo placement": "Размещение логотипа",
  "Stitching quality": "Качество шва",
  "Packaging details": "Детали упаковки",
  "Underwear sample quality approval": "Утверждение качества образца белья",
  "Step 7: Place Your First Production Order": "Шаг 7: Разместите первый производственный заказ",
  "Place Your First Production Order": "Разместите первый производственный заказ",
  "After approving samples, you can proceed with mass production.":
    "После утверждения образцов можно переходить к массовому производству.",
  "For new brands, starting with a smaller order can help reduce inventory risks while testing market demand.":
    "Новым брендам лучше начать с меньшего заказа, чтобы снизить складские риски и проверить спрос.",
  "MOQ (Minimum Order Quantity)": "MOQ (минимальный объем заказа)",
  "Production lead time": "Срок производства",
  "Payment terms": "Условия оплаты",
  "Shipping methods": "Способы доставки",
  "Finished underwear packing inspection": "Проверка упаковки готового белья",
  "Underwear warehouse and export cartons": "Склад белья и экспортные короба",
  "Step 8: Build Your Sales Channels": "Шаг 8: Постройте каналы продаж",
  "Build Your Sales Channels": "Постройте каналы продаж",
  "Once production is completed, focus on sales and marketing.":
    "После завершения производства сосредоточьтесь на продажах и маркетинге.",
  "Using multiple sales channels can accelerate brand growth.":
    "Несколько каналов продаж ускоряют рост бренда.",
  "Shopify Store": "Магазин Shopify",
  "Build your own branded online store.": "Создайте собственный брендированный онлайн-магазин.",
  Amazon: "Amazon",
  "Reach a large customer base quickly.": "Быстро получите доступ к большой аудитории.",
  Instagram: "Instagram",
  "Showcase products through photos, videos, and influencer collaborations.":
    "Показывайте продукты через фото, видео и сотрудничество с инфлюенсерами.",
  "TikTok Shop": "TikTok Shop",
  "Leverage short-form video marketing.": "Используйте маркетинг коротких видео.",
  "Wholesale Distribution": "Оптовая дистрибуция",
  "Supply boutiques and retail stores.": "Поставляйте бутикам и розничным магазинам.",
  "Common Mistakes to Avoid": "Типичные ошибки, которых стоит избегать",
  "Many new underwear brands encounter avoidable problems.":
    "Многие новые бренды белья сталкиваются с проблемами, которых можно избежать.",
  "Avoiding these mistakes can save significant time and money.":
    "Избежание этих ошибок экономит время и деньги.",
  "Choosing suppliers based only on price": "Выбор поставщика только по цене",
  "Skipping sample approval": "Пропуск утверждения образцов",
  "Ordering excessive inventory initially": "Слишком большой первый заказ",
  "Ignoring product quality": "Игнорирование качества продукта",
  "Weak branding and packaging": "Слабый брендинг и упаковка",
  Conclusion: "Заключение",
  "Starting a private label underwear brand does not require owning a factory. By partnering with an experienced underwear manufacturer, you can focus on building your brand while ensuring consistent product quality.":
    "Для запуска private label бренда белья не нужна собственная фабрика. С опытным производителем вы можете строить бренд и сохранять стабильное качество.",
  "Success comes from understanding your target market, selecting the right products, creating strong branding, and working with a reliable manufacturing partner.":
    "Успех зависит от понимания рынка, правильного продукта, сильного брендинга и надежного производственного партнера.",
  "With proper planning and execution, a private label underwear business can become a scalable and profitable venture.":
    "При правильном планировании и исполнении private label бизнес белья может стать масштабируемым и прибыльным.",
  "Winsun factory building panorama": "Панорама здания фабрики Winsun",

  "Name": "Имя",
  "Your name": "Ваше имя",
  "Company": "Компания",
  "Company name": "Название компании",
  "Country": "Страна",
  "Country / market": "Страна / рынок",
  "Email": "Email",
  WhatsApp: "WhatsApp",
  Quantity: "Количество",
  "e.g. 2,000 pcs / colour": "например, 2 000 шт. / цвет",
  "Product Category": "Категория продукта",
  "Select a category": "Выберите категорию",
  "Select category": "Выберите категорию",
  "Target Price": "Целевая цена",
  "Target price or price range": "Целевая цена или диапазон",
  "Target price": "Целевая цена",
  "Project Details": "Детали проекта",
  "Tell us about style, fabric, quantity, target market, packaging, and expected delivery.":
    "Расскажите о модели, ткани, количестве, целевом рынке, упаковке и сроке поставки.",
  "Submit Inquiry": "Отправить запрос",
  Submit: "Отправить",
  "Thank you. This front-end demo captured the inquiry locally. Connect this form to email, CRM, or a backend endpoint before launch.":
    "Спасибо. В этой демо-версии запрос сохраняется локально. Перед запуском подключите форму к email, CRM или backend.",
  "Thank you. Your inquiry has been captured in this front-end demo.":
    "Спасибо. Ваш запрос сохранен в этой демо-версии.",
  "Quick Inquiry": "Быстрый запрос",
  "Inquiry Form": "Форма запроса",
  "Share a few basics and Winsun will prepare the next sourcing step.":
    "Оставьте основные данные, и Winsun подготовит следующий шаг по закупке.",
  "Close inquiry form": "Закрыть форму запроса",

  "Global Reach": "Глобальное покрытие",
  "// Global Reach": "// Глобальное покрытие",
  "Marketing network across priority underwear sourcing markets.":
    "Маркетинговая сеть на приоритетных рынках закупки нижнего белья.",
  "Click a country, city, or glowing point on the globe. The globe rotates to the selected market and shows the export role from our Hong Kong trade hub.":
    "Нажмите страну, город или точку на глобусе. Глобус повернется к выбранному рынку и покажет экспортную роль нашего хаба в Гонконге.",
  China: "Китай",
  "Hong Kong": "Гонконг",
  Russia: "Россия",
  Moscow: "Москва",
  Germany: "Германия",
  Berlin: "Берлин",
  France: "Франция",
  Paris: "Париж",
  Poland: "Польша",
  Warsaw: "Варшава",
  "United Kingdom": "Великобритания",
  London: "Лондон",
  "United States": "США",
  "Los Angeles": "Лос-Анджелес",
  "United Arab Emirates": "ОАЭ",
  Dubai: "Дубай",
  Asia: "Азия",
  "Eastern Europe": "Восточная Европа",
  Europe: "Европа",
  "Western Europe": "Западная Европа",
  "Central Europe": "Центральная Европа",
  "Northern Europe": "Северная Европа",
  "North America": "Северная Америка",
  "Middle East": "Ближний Восток",
  "Market Focus": "Фокус рынка",
  Route: "Маршрут",
  "Foreign trade hub": "Внешнеторговый хаб",
  "Underwear and thermal wear": "Нижнее белье и термобелье",
  "Private label programs": "Private label программы",
  "Design-led assortments": "Ассортимент с фокусом на дизайн",
  "Distribution-ready supply": "Поставки для дистрибуции",
  "Retail sourcing": "Закупки для розницы",
  "Importer programs": "Программы для импортеров",
  "Regional trading": "Региональная торговля",
  "Discuss this market": "Обсудить этот рынок",
  "Live marketing network": "Активная маркетинговая сеть",
  "Hong Kong export hub": "Экспортный хаб Гонконга",
  "Hong Kong office coordination for buyer communication, sourcing support, sampling follow-up, and export service.":
    "Офис в Гонконге координирует коммуникацию с покупателями, закупки, образцы и экспорт.",
  "A priority market for value-focused underwear, cold-weather base layers, and replenishment programs.":
    "Приоритетный рынок для доступного белья, теплых базовых слоев и повторных поставок.",
  "Support for EU buyers sourcing practical knitted underwear, bras, panties, and loungewear ranges.":
    "Поддержка покупателей ЕС в закупке трикотажного белья, бюстгальтеров, трусов и домашней одежды.",
  "Sample-based and ODM development for buyers who need comfort, fit, color planning, and retail packaging.":
    "Разработка по образцам и ODM для покупателей, которым важны комфорт, посадка, цвета и розничная упаковка.",
  "Production planning and export support for regional importers and wholesale distribution programs.":
    "Планирование производства и экспортная поддержка региональных импортеров и оптовых программ.",
  "Buyer-friendly development for core underwear, shapewear, and loungewear programs with packaging needs.":
    "Удобная для покупателя разработка базового белья, корректирующего белья и домашней одежды с упаковкой.",
  "Long-distance sourcing support for underwear, shapewear, and loungewear importers seeking private label supply.":
    "Удаленная поддержка закупок для импортеров белья, корректирующего белья и домашней одежды private label.",
  "Export-ready product coordination for trading companies and regional buyers serving multi-market channels.":
    "Координация экспортной продукции для торговых компаний и региональных покупателей.",

  "Underwear and knitted apparel OEM/ODM partner for global buyers seeking reliable development, production, and export service.":
    "OEM/ODM партнер по нижнему белью и трикотажу для международных покупателей, которым нужны надежная разработка, производство и экспорт.",
  Categories: "Категории",
  "Private label underwear manufacturing since": "Производство private label белья с",

  "Product Contents": "Содержание продукции",
  "Detailed product categories for underwear sourcing programs.":
    "Подробные категории продукции для программ закупки нижнего белья.",
  "The following styles match the requested catalog direction and can be adapted by fabric, color, label, packing, and target market.":
    "Следующие модели соответствуют направлению каталога и могут быть адаптированы по ткани, цвету, этикетке, упаковке и целевому рынку.",
  "Core Programs": "Основные программы",
  "Flexible category support for buyer-led product planning.":
    "Гибкая поддержка категорий для планирования продукта под требования покупателя.",
  "Discuss This Category": "Обсудить эту категорию",
  "Buyer Support": "Поддержка покупателя",
  "Built around the details that matter in sourcing.": "Построено вокруг деталей, важных для закупки.",
  "We help buyers translate market needs into product programs that are realistic to sample, quote, produce, package, and replenish.":
    "Мы помогаем покупателям переводить потребности рынка в продуктовые программы, которые реально отобразить в образцах, рассчитать, произвести, упаковать и пополнять.",
  "Private label development": "Разработка private label",
  "Fabric and trimming coordination": "Координация тканей и фурнитуры",
  "Size set and color range planning": "Планирование размерного ряда и цветовой гаммы",
  "Sample-based production": "Производство по образцу",
  "Export-ready carton arrangement": "Подготовка экспортных коробов",
  "View Details": "Подробнее",

  "Back to Products": "Назад к продукции",
  "Factory direct": "Напрямую от фабрики",
  "Private label ready": "Готово для private label",
  "OEM Product": "OEM продукт",
  "Bras OEM Product": "Бюстгальтеры OEM продукт",
  "Panties OEM Product": "Трусы OEM продукт",
  "Thermal Wear OEM Product": "Термобелье OEM продукт",
  "Shapewear OEM Product": "Корректирующее белье OEM продукт",
  "Order quick facts": "Краткие данные заказа",
  "Product Development": "Разработка продукта",
  "Designed around sourcing details, not just a catalog photo.":
    "Разработано вокруг деталей закупки, а не только фотографии из каталога.",
  "Product specifications can be adjusted around your market requirements, target price, fabric preference, color range, sizing, logo placement, packaging, and delivery plan. Winsun supports the full route from inquiry and sample review to bulk production follow-up and export coordination.":
    "Спецификации продукта можно адаптировать под требования рынка, целевую цену, предпочтения по ткани, цветовую гамму, размеры, размещение логотипа, упаковку и план доставки. Winsun поддерживает весь путь от запроса и проверки образцов до сопровождения массового производства и экспорта.",
  "Fabric Direction": "Направление ткани",
  "Cotton, modal, nylon, spandex, lace, thermal knit, and buyer-specified materials.":
    "Хлопок, модал, нейлон, спандекс, кружево, термотрикотаж и материалы по спецификации покупателя.",
  "Color Planning": "Планирование цветов",
  "Seasonal palettes, core replenishment colors, Pantone references, and mixed sets.":
    "Сезонные палитры, базовые цвета для повторных поставок, Pantone-референсы и смешанные наборы.",
  Branding: "Брендинг",
  "Private labels, printed logos, size marks, hangtags, stickers, and barcode labels.":
    "Private label, печатные логотипы, размерные отметки, бирки, стикеры и штрихкод-этикетки.",
  Packing: "Упаковка",
  "Single polybags, retail boxes, multi-packs, inserts, cartons, and export packing.":
    "Индивидуальные пакеты, розничные коробки, мультиупаковки, вкладыши, короба и экспортная упаковка.",
  "Factory Support": "Поддержка фабрики",
  "From first reference to repeat order planning.": "От первого референса до планирования повторного заказа.",
  "Compare feasibility, customization options, and production support before moving a style into sampling or quotation.":
    "Оцените реализуемость, варианты кастомизации и производственную поддержку перед запуском модели в образцы или расчет.",
  "Brief Review": "Проверка брифа",
  "Share reference photos, samples, tech packs, target price, or market direction.":
    "Отправьте референсные фото, образцы, техпакеты, целевую цену или рыночное направление.",
  "Sample Direction": "Направление образца",
  "Confirm fabric, color, construction, logo placement, size set, and packaging details.":
    "Подтвердите ткань, цвет, конструкцию, размещение логотипа, размерный ряд и детали упаковки.",
  "Bulk Follow-Up": "Сопровождение партии",
  "Coordinate production, inspection, packing, delivery schedule, and export documents.":
    "Координация производства, инспекции, упаковки, графика доставки и экспортных документов.",
  "OEM / ODM": "OEM / ODM",
  "Develop from reference samples, photos, tech packs, or target market briefs.":
    "Разработка по образцам, фото, техпакетам или брифам целевого рынка.",
  "Fit & Size Range": "Посадка и размерный ряд",
  "Coordinate size sets, grading direction, and comfort adjustments before bulk.":
    "Координация размерных сеток, градации и корректировок комфорта перед партией.",
  "Label & Packaging": "Этикетки и упаковка",
  "Support private labels, hangtags, polybags, inserts, cartons, and retail packs.":
    "Поддержка private label, бирок, пакетов, вкладышей, коробов и розничных упаковок.",
  "Style Development": "Разработка модели",
  "Adjust fabrics, colors, trims, elasticity, and construction for your price target.":
    "Адаптация тканей, цветов, отделки, эластичности и конструкции под целевую цену.",
  "Start This Product": "Запустить этот продукт",
  "Send your quantity, target price, and reference details for quotation.":
    "Отправьте количество, целевую цену и референсы для расчета.",
  "Related Products": "Похожие продукты",
  "More Bras options for your assortment.": "Больше вариантов бюстгальтеров для вашего ассортимента.",
  "More Panties options for your assortment.": "Больше вариантов трусов для вашего ассортимента.",
  "More Thermal Wear options for your assortment.": "Больше вариантов термобелья для вашего ассортимента.",
  "More Shapewear options for your assortment.": "Больше вариантов корректирующего белья для вашего ассортимента.",
  "More Bras styles": "Больше моделей бюстгальтеров",
  "More Panties styles": "Больше моделей трусов",
  "More Thermal Wear styles": "Больше моделей термобелья",
  "More Shapewear styles": "Больше моделей корректирующего белья",

  Manufacturing: "Производство",
  "Visible production resources for dependable underwear supply.":
    "Наглядные производственные ресурсы для надежных поставок нижнего белья.",
  "Winsun connects overseas buyers with practical factory coordination, sampling support, production follow-up, packaging, and export service.":
    "Winsun связывает зарубежных покупателей с практичной координацией фабрики, поддержкой образцов, сопровождением производства, упаковкой и экспортом.",
  "Factory video preview": "Видеообзор фабрики",
  "Review the production environment and workflow feel before starting your inquiry.":
    "Посмотрите производственную среду и рабочий процесс перед отправкой запроса.",
  "Factory resources built for stable underwear manufacturing.":
    "Фабричные ресурсы для стабильного производства нижнего белья.",
  "The production side is organized around capacity, experienced workers, line coordination, and export service.":
    "Производственная часть построена вокруг мощности, опытных сотрудников, координации линий и экспортного сервиса.",
  "Factory Scenes": "Сцены фабрики",
  "A complete support environment from office to production floor.":
    "Полная среда поддержки от офиса до производственного цеха.",
  "Office Coordination": "Офисная координация",
  "Dedicated business communication and project follow-up for overseas clients.":
    "Выделенная деловая коммуникация и сопровождение проектов для зарубежных клиентов.",
  "Sewing Workshop": "Швейный цех",
  "Production resources for underwear and knitted apparel programs.":
    "Производственные ресурсы для программ нижнего белья и трикотажной одежды.",
  Showroom: "Шоурум",
  "Category presentation and style reference support for product discussions.":
    "Презентация категорий и референсы моделей для обсуждения продукта.",
  Warehouse: "Склад",
  "Organized materials and finished goods support for production planning.":
    "Организованные материалы и готовая продукция для планирования производства.",
  "Material Storage": "Хранение материалов",
  "Organized fabric and material storage for order preparation.":
    "Организованное хранение тканей и материалов для подготовки заказа.",
  "Reliable Execution": "Надежное исполнение",
  "Built for buyers who need clear communication and stable delivery.":
    "Для покупателей, которым нужны понятная коммуникация и стабильная поставка.",
  "The manufacturing side of each project is supported by mature production coordination and supply chain resources, helping buyers manage quality, packaging, and timing.":
    "Производственная часть каждого проекта поддерживается зрелой координацией и ресурсами цепочки поставок, помогая покупателям управлять качеством, упаковкой и сроками.",
  "View OEM Service": "Смотреть OEM сервис",
  "Sample follow-up": "Сопровождение образцов",
  "Production coordination": "Координация производства",
  "Packaging preparation": "Подготовка упаковки",
  "Export service": "Экспортный сервис",

  "OEM / ODM Service": "OEM / ODM сервис",
  "Flexible development support for private label underwear buyers.":
    "Гибкая поддержка разработки для покупателей private label нижнего белья.",
  "Whether you already have a detailed tech pack or only a market brief, Winsun can support sample development, customization, packaging, and production coordination.":
    "Если у вас есть подробный техпакет или только рыночный бриф, Winsun поддержит разработку образца, кастомизацию, упаковку и координацию производства.",
  "You provide designs, samples, target specs, or brand requirements. We coordinate sampling and bulk production around your confirmed direction.":
    "Вы предоставляете дизайны, образцы, целевые спецификации или требования бренда. Мы координируем образцы и массовое производство по подтвержденному направлению.",
  "You share a product idea, target buyer, market positioning, or reference range. We help shape it into a practical style plan.":
    "Вы делитесь идеей продукта, целевым покупателем, позиционированием или референсной линейкой. Мы превращаем это в практичный план модели.",
  "Sample-Based": "По образцу",
  "You send a reference sample or photo direction. We review construction, material options, cost feasibility, and production needs.":
    "Вы отправляете образец или фото-направление. Мы анализируем конструкцию, материалы, стоимость и производственные потребности.",
  "Development Workflow": "Процесс разработки",
  "From first idea to confirmed production file.": "От первой идеи до подтвержденного производственного файла.",
  "We keep the process direct and buyer-friendly, helping each project move from requirements to sample review, quotation, production, packaging, and delivery.":
    "Мы делаем процесс прямым и удобным для покупателя, помогая проекту пройти от требований к проверке образцов, расчету, производству, упаковке и доставке.",
  "Start Project": "Начать проект",
  Capabilities: "Возможности",
  "Services designed for repeat export programs.": "Услуги для повторных экспортных программ.",
  "OEM Manufacturing": "OEM производство",
  "Production based on buyer tech packs, reference samples, target prices, and delivery requirements.":
    "Производство на основе техпакетов, референсных образцов, целевых цен и требований к доставке.",
  "ODM Customization": "ODM кастомизация",
  "Style development support for seasonal programs, private label ranges, and market-specific assortments.":
    "Поддержка разработки моделей для сезонных программ, private label линеек и ассортимента под рынок.",
  "Sample-Based Production": "Производство по образцу",
  "Fast interpretation of existing samples with material, trimming, fit, and construction guidance.":
    "Быстрая интерпретация существующих образцов с рекомендациями по материалам, отделке, посадке и конструкции.",
  "Customized Packaging": "Индивидуальная упаковка",
  "Packaging coordination for export-ready programs, including size sets, labels, polybags, and cartons.":
    "Координация упаковки для экспортных программ, включая размерные ряды, этикетки, пакеты и короба.",
  "Efficient sampling workflows to help buyers confirm quality, appearance, and commercial feasibility.":
    "Эффективный процесс образцов помогает покупателям подтвердить качество, внешний вид и коммерческую реализуемость.",
  "Stable Delivery": "Стабильная доставка",
  "Mature production coordination and supply chain resources for consistent long-term cooperation.":
    "Зрелая координация производства и ресурсы цепочки поставок для стабильного долгосрочного сотрудничества.",
  "Quotation Checklist": "Чек-лист для расчета",
  "Useful details to include in your first inquiry.": "Полезные данные для первого запроса.",
  "Product category and style references": "Категория продукта и референсы модели",
  "Fabric composition or hand-feel target": "Состав ткани или целевое ощущение",
  "Size range and estimated order quantity": "Размерный ряд и ориентировочное количество",
  "Branding, label, and packaging requirements": "Требования к брендингу, этикеткам и упаковке",
  "Target market and quality expectation": "Целевой рынок и ожидания по качеству",
  "Requested sample and delivery timeline": "Желаемый образец и сроки доставки",

  "Document Support": "Поддержка документов",
  "Certificate and quality files prepared around each order.":
    "Сертификаты и файлы качества подготавливаются под каждый заказ.",
  "Available files depend on product type, fabric choice, customization request, destination market, and buyer standards.":
    "Доступные документы зависят от типа продукта, выбора ткани, запроса на кастомизацию, рынка назначения и стандартов покупателя.",
  "Quality documents and inspection support for underwear export orders.":
    "Документы качества и инспекционная поддержка для экспортных заказов нижнего белья.",
  "Winsun can coordinate fabric reports, inspection records, packaging details, and buyer compliance documents according to order and market requirements.":
    "Winsun может координировать отчеты по ткани, записи инспекции, детали упаковки и документы соответствия по требованиям заказа и рынка.",
  "Fabric Test Reports": "Отчеты испытаний ткани",
  "Material reports can be prepared according to buyer, market, and order requirements.":
    "Отчеты по материалам могут быть подготовлены по требованиям покупателя, рынка и заказа.",
  "Quality Inspection Reports": "Отчеты инспекции качества",
  "Pre-shipment inspection records support clearer quality control and buyer review.":
    "Записи предпродажной инспекции помогают яснее контролировать качество и проводить проверку покупателем.",
  "Packaging & Label Records": "Записи упаковки и этикеток",
  "Private label, barcode, polybag, carton mark, and export packing details can be coordinated before shipment.":
    "Private label, штрихкоды, пакеты, маркировка коробов и экспортная упаковка могут быть согласованы до отгрузки.",
  "Buyer Compliance Support": "Поддержка соответствия покупателя",
  "Documentation can be prepared according to buyer, order, fabric, and destination market requirements.":
    "Документация может быть подготовлена по требованиям покупателя, заказа, ткани и рынка назначения.",
  "Practical support for buyers who need stable private label production.":
    "Практичная поддержка для покупателей, которым нужно стабильное private label производство.",

  "Get In Touch": "Связаться с нами",
  "Tell us what you want to source, customize, or manufacture.":
    "Расскажите, что вы хотите закупить, кастомизировать или произвести.",
  "Share your product category, reference styles, quantity, market, and packaging needs. We will prepare the next step for quotation and sampling.":
    "Отправьте категорию продукта, референсы, количество, рынок и требования к упаковке. Мы подготовим следующий шаг для расчета и образцов.",
  "Recommended inquiry details": "Рекомендуемые данные запроса",
  "Product type, fabric preference, sample photo or tech pack, quantity, size range, target market, packaging request, and expected delivery date.":
    "Тип продукта, предпочтения по ткани, фото образца или техпакет, количество, размерный ряд, целевой рынок, запрос по упаковке и ожидаемая дата доставки.",
  "Clear reasons for buyers who need a reliable underwear factory partner.":
    "Понятные причины для покупателей, которым нужен надежный фабричный партнер по белью.",

  "Buyer Resources": "Ресурсы для покупателей",
  "Underwear OEM buying guides for private label and export buyers.":
    "Руководства по OEM закупкам нижнего белья для private label и экспортных покупателей.",
  "Practical notes on quotation preparation, fabric selection, packaging, sampling, quality control, and repeat production planning.":
    "Практические заметки о подготовке расчета, выборе тканей, упаковке, образцах, контроле качества и планировании повторного производства.",
  "Useful reading before starting an underwear OEM project.":
    "Полезные материалы перед запуском OEM проекта нижнего белья.",
  "These topics help buyers prepare clearer inquiries and move from sample development to bulk production with fewer delays.":
    "Эти темы помогают покупателям подготовить более ясные запросы и перейти от образцов к массовому производству с меньшими задержками.",
  "Private Label Guide": "Руководство private label",
  "How to Start a Private Label Underwear Brand": "Как запустить private label бренд нижнего белья",
  "A complete beginner guide covering product development, branding, manufacturing, sampling, production, and sales channels.":
    "Полное руководство для начинающих: разработка продукта, брендинг, производство, образцы, партия и каналы продаж.",
  "OEM Guide": "OEM руководство",
  "How to Prepare an OEM Underwear Inquiry": "Как подготовить OEM запрос по нижнему белью",
  "The fastest quotations usually include style references, fabric direction, size range, logo needs, packaging requests, and target quantity.":
    "Самые быстрые расчеты обычно включают референсы модели, направление ткани, размерный ряд, логотип, упаковку и целевое количество.",
  "Choosing Fabrics for Bras, Panties, and Shapewear": "Выбор тканей для бюстгальтеров, трусов и корректирующего белья",
  "Comfort, elasticity, opacity, hand feel, and recovery performance should be reviewed early before sampling and bulk production.":
    "Комфорт, эластичность, плотность, ощущение ткани и восстановление формы нужно оценить до образцов и партии.",
  Packaging: "Упаковка",
  "Private Label Packaging for Export Orders": "Private label упаковка для экспортных заказов",
  "Labels, hang tags, polybags, cartons, barcode stickers, and size assortments should be confirmed before production planning.":
    "Этикетки, бирки, пакеты, короба, штрихкод-стикеры и размерные ассортименты нужно подтвердить до планирования производства.",
  "Quality Control": "Контроль качества",
  "What Buyers Should Check Before Bulk Production": "Что покупателям проверить перед массовым производством",
  "Approved samples, color standards, measurements, trims, packing method, and inspection points help reduce production risk.":
    "Утвержденные образцы, цветовые стандарты, замеры, отделка, способ упаковки и точки инспекции снижают производственный риск.",
  "Need A Quote": "Нужна цена",
  "Send product references and order details for OEM support.":
    "Отправьте референсы продукта и детали заказа для OEM поддержки.",
  "Contact Winsun": "Связаться с Winsun",

  "A Hong Kong foreign trade partner for knitted underwear manufacturing.":
    "Гонконгский внешнеторговый партнер по производству трикотажного белья.",
  "specializes in development, manufacturing, and export of knitted apparel and underwear products.":
    "специализируется на разработке, производстве и экспорте трикотажной одежды и нижнего белья.",
  "Company Profile": "Профиль компании",
  "One-stop sourcing support for global clients.": "Комплексная поддержка закупок для международных клиентов.",
  "With the continuous expansion of international business, Winsun has established its foreign trade department in Hong Kong to provide more professional and efficient sourcing services for clients worldwide.":
    "С постоянным расширением международного бизнеса Winsun создала внешнеторговый отдел в Гонконге, чтобы предоставлять клиентам по всему миру более профессиональные и эффективные услуги закупки.",
  "Our products are exported to Russia, Europe, and many overseas markets, earning trust and long-term cooperation through quality, comfort, modern design, and stable execution.":
    "Наша продукция экспортируется в Россию, Европу и многие зарубежные рынки, завоевывая доверие и долгосрочное сотрудничество благодаря качеству, комфорту, современному дизайну и стабильному исполнению.",
  "Production resources for long-term underwear buyers.":
    "Производственные ресурсы для долгосрочных покупателей нижнего белья.",
  "What We Believe": "Во что мы верим",
  "Cost-effective and competitive product solutions tailored to market needs.":
    "Экономичные и конкурентные продуктовые решения под потребности рынка.",
  "Quality First": "Качество прежде всего",
  "Every program is managed around comfort, materials, construction, and buyer expectations.":
    "Каждая программа управляется вокруг комфорта, материалов, конструкции и ожиданий покупателя.",
  "Market Awareness": "Понимание рынка",
  "Our team follows product trends and practical selling needs across overseas markets.":
    "Наша команда отслеживает продуктовые тренды и практические потребности продаж на зарубежных рынках.",
  "Long-Term Cooperation": "Долгосрочное сотрудничество",
  "We build steady buyer relationships through clear communication and reliable execution.":
    "Мы строим устойчивые отношения с покупателями через понятную коммуникацию и надежное исполнение.",
  "Hong Kong Office": "Офис в Гонконге",
};
