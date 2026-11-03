export type Lang = "en" | "ar";

export const EMAIL = "a.rahmanmohamed2002@gmail.com";
export const GITHUB = "https://github.com/a-rahman-25";
export const LINKEDIN = "https://linkedin.com/in/abdelrahman-mohamed";

export type Project = {
  id: string;
  url?: string;
  host: string;
  hue: number;
  tags: string[];
  title: Record<Lang, string>;
  kind: Record<Lang, string>;
  desc: Record<Lang, string>;
};

export const projects: Project[] = [
  {
    id: "hafco",
    url: "https://www.hafcobigmovers.com/",
    host: "hafcobigmovers.com",
    hue: 75,
    tags: ["ERP", "ZATCA", "Android", "Qiwa · Muqeem · Bayan"],
    title: { en: "HAFCO Big Movers · Hafco Base ERP", ar: "هافكو للنقل الثقيل · Hafco Base ERP" },
    kind: { en: "Flagship enterprise system", ar: "النظام المؤسسي الرئيسي" },
    desc: {
      en: "A bilingual 13-module ERP for a heavy-transport company: fleet, HR & payroll, accounting, procurement and trip invoicing, with ZATCA e-invoicing, an Android driver app on Google Play and Saudi government integrations.",
      ar: "نظام ERP ثنائي اللغة من 13 وحدة لشركة نقل ثقيل: الأسطول، الموارد البشرية والرواتب، المحاسبة، المشتريات وفواتير الرحلات، مع فوترة ZATCA الإلكترونية وتطبيق سائقين على Google Play وتكامل مع المنصات الحكومية.",
    },
  },
  {
    id: "elite-ticaret",
    url: "https://elite-ticaret.pages.dev/",
    host: "elite-ticaret.pages.dev",
    hue: 30,
    tags: ["Redesign", "Bilingual"],
    title: { en: "Elite Ticaret", ar: "إيليت تيجارت" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "A modern trading-company site rebuilt with cinematic scroll frames and a clear product story.",
      ar: "موقع شركة تجارية أعيد بناؤه بإطارات تمرير سينمائية وقصة منتجات واضحة.",
    },
  },
  {
    id: "elite-saudi",
    url: "https://elite-saudi-redefined.pages.dev/",
    host: "elite-saudi-redefined.pages.dev",
    hue: 150,
    tags: ["Redesign", "Arabic-first"],
    title: { en: "Elite Saudi Redefined", ar: "إيليت السعودية بحلة جديدة" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "An Arabic-first corporate presence designed right-to-left from the first pixel.",
      ar: "حضور مؤسسي عربي أولاً، مصمم من اليمين لليسار من أول بكسل.",
    },
  },
  {
    id: "shajarah",
    url: "https://al-shajarah-reimagined.pages.dev/",
    host: "al-shajarah-reimagined.pages.dev",
    hue: 130,
    tags: ["Redesign", "Heritage"],
    title: { en: "Al-Shajarah Reimagined", ar: "الشجرة برؤية جديدة" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "A warm, story-driven redesign with layered frames and rich imagery.",
      ar: "إعادة تصميم دافئة تروي القصة بإطارات متراكبة وصور غنية.",
    },
  },
  {
    id: "prime-elite",
    url: "https://prime-elite-web.pages.dev/",
    host: "prime-elite-web.pages.dev",
    hue: 250,
    tags: ["Redesign", "Corporate"],
    title: { en: "Prime Elite Web", ar: "برايم إيليت" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "A sharp corporate site with an expanding menu and services reel.",
      ar: "موقع مؤسسي حاد بقائمة متوسعة وعرض خدمات متحرك.",
    },
  },
  {
    id: "khaldi",
    url: "https://al-khaldi-legacy.pages.dev/",
    host: "al-khaldi-legacy.pages.dev",
    hue: 55,
    tags: ["Redesign", "Legacy brand"],
    title: { en: "Al-Khaldi Legacy", ar: "إرث الخالدي" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "A family business legacy retold with vintage tones and modern motion.",
      ar: "إرث شركة عائلية بألوان كلاسيكية وحركة عصرية.",
    },
  },
  {
    id: "keo",
    url: "https://keo-heritage-reimagined.pages.dev/",
    host: "keo-heritage-reimagined.pages.dev",
    hue: 15,
    tags: ["Redesign", "Heritage"],
    title: { en: "KEO Heritage Reimagined", ar: "تراث KEO بحلة جديدة" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "Heritage brand redesign with a crossfading hero and bilingual content.",
      ar: "إعادة تصميم علامة تراثية بواجهة متلاشية ومحتوى ثنائي اللغة.",
    },
  },
  {
    id: "sahara",
    url: "https://semi-sahara-studio.pages.dev/",
    host: "semi-sahara-studio.pages.dev",
    hue: 45,
    tags: ["Redesign", "Studio"],
    title: { en: "Semi Sahara Studio", ar: "استوديو سيمي صحارى" },
    kind: { en: "Client redesign", ar: "إعادة تصميم لعميل" },
    desc: {
      en: "A creative studio portfolio with sand-toned palette and tilt-card gallery.",
      ar: "معرض أعمال لاستوديو إبداعي بألوان رملية وبطاقات تفاعلية.",
    },
  },
  {
    id: "amlaunch",
    host: "AM Launch Web",
    hue: 95,
    tags: ["MergesPDF", "Kashef", "AI OCR"],
    title: { en: "MergesPDF & Kashef", ar: "MergesPDF و Kashef" },
    kind: { en: "AM Launch Web products", ar: "منتجات AM Launch Web" },
    desc: {
      en: "MergesPDF, a privacy-first PDF toolkit, and Kashef, an AI document-extraction engine, built under my own brand.",
      ar: "MergesPDF أداة PDF تحافظ على الخصوصية، وKashef محرك لاستخراج بيانات المستندات بالذكاء الاصطناعي، تحت علامتي الخاصة.",
    },
  },
];

export const t = {
  en: {
    nav: { about: "About", work: "Work", services: "Services", contact: "Contact" },
    menu: "Menu",
    langSwitch: "عربي",
    role: "Full stack engineer · Dammam, KSA",
    hero: "Full stack engineer who built a 13-module ERP solo, from the database to Google Play.",
    bio: "I’m Abdelrahman, a full stack software engineer based in Dammam, Saudi Arabia. I build business software that replaces spreadsheets and paperwork: ERP systems, mobile apps and AI-powered document automation, with a focus on Arabic-first, bilingual products and Saudi government integrations.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    stats: [
      { value: 13, suffix: "", label: "ERP modules" },
      { value: 190, suffix: "", label: "Employees on automated payroll" },
      { value: 100, suffix: "%", label: "Solo delivery" },
      { value: 0, display: "ZATCA", suffix: "", label: "+ Qiwa, Muqeem, Bayan integrations" },
    ],
    aboutKicker: "About",
    aboutTitle: "Software that holds up in real use.",
    about: [
      "I’m Abdelrahman Mohamed, a full stack software engineer working with TypeScript, React and PostgreSQL.",
      "At HAFCO Big Movers, a heavy-transport company in Dammam, I’m the sole developer behind Hafco Base, a bilingual 13-module ERP covering fleet, HR and payroll, accounting, procurement and trip invoicing. I took it from gathering requirements with each department, to designing the database, to shipping an Android driver app on Google Play. Along the way I integrated ZATCA e-invoicing and Saudi government platforms like Qiwa, Muqeem and Bayan. I automated payroll for 190 employees from days to seconds, and cut document entry from minutes to seconds with AI-powered OCR.",
      "I care about software that holds up in real use: secure access rules, apps that work on weak mobile networks, and Arabic interfaces that are designed for right-to-left from the start, not added later.",
      "Outside work I build MergesPDF, a privacy-first PDF toolkit, and Kashef, a document-extraction engine, under my own brand, AM Launch Web.",
      "I hold a B.Sc. in Computing & Information Systems from the Arab Academy for Science and Technology, and I speak Arabic and English.",
    ],
    servicesKicker: "What I build",
    servicesTitle: "From spreadsheets to systems.",
    servicesCue: "Scroll to move the reel",
    services: [
      { title: "ERP systems", desc: "Multi-module business platforms: fleet, HR, payroll, accounting and procurement in one place." },
      { title: "Mobile apps", desc: "Android apps that keep working on weak mobile networks, shipped to Google Play." },
      { title: "AI document automation", desc: "OCR and extraction pipelines that turn minutes of typing into seconds." },
      { title: "Saudi integrations", desc: "ZATCA e-invoicing plus Qiwa, Muqeem and Bayan government platforms." },
      { title: "Bilingual web", desc: "Arabic-first, right-to-left interfaces and cinematic client redesigns." },
    ],
    workKicker: "Selected work",
    workTitle: "Flagship system & client redesigns.",
    visit: "Visit live site",
    preview: "Live preview",
    close: "Close",
    previewNote: "If the preview stays blank, the site blocks embedding. Open it in a new tab instead.",
    contactKicker: "Contact",
    contactTitle: "Let’s build the next system.",
    openTo: "Open to: Full stack, frontend and ERP roles (KSA, UAE, remote)",
    location: "Location",
    locationValue: "Dammam, Saudi Arabia",
    copy: "Copy",
    copied: "Copied",
    form: { name: "Your name", email: "Your email", message: "Message", send: "Send message", sent: "Your email app is opening with the message ready to send." },
    errors: { name: "Please enter your name", email: "Please enter a valid email", message: "Please write a short message" },
    footer: "Powered by AM Launch Web",
  },
  ar: {
    nav: { about: "نبذة", work: "الأعمال", services: "الخدمات", contact: "تواصل" },
    menu: "القائمة",
    langSwitch: "EN",
    role: "مهندس Full Stack · الدمام، السعودية",
    hero: "مهندس برمجيات Full Stack، بنيت نظام ERP متكامل من 13 وحدة بمفردي، من قاعدة البيانات حتى Google Play.",
    bio: "أنا عبدالرحمن، مهندس برمجيات Full Stack مقيم في الدمام، المملكة العربية السعودية. أبني أنظمة أعمال تحل محل ملفات Excel والورق: أنظمة ERP، تطبيقات جوال، وأتمتة المستندات بالذكاء الاصطناعي، مع تركيز على المنتجات ثنائية اللغة والتكامل مع المنصات الحكومية السعودية.",
    ctaWork: "شاهد الأعمال",
    ctaContact: "تواصل معي",
    stats: [
      { value: 13, suffix: "", label: "وحدة في نظام ERP" },
      { value: 190, suffix: "", label: "موظفاً برواتب مؤتمتة" },
      { value: 100, suffix: "%", label: "تنفيذ فردي" },
      { value: 0, display: "ZATCA", suffix: "", label: "+ تكامل مع قوى ومقيم وبيان" },
    ],
    aboutKicker: "نبذة",
    aboutTitle: "برمجيات تصمد في الاستخدام الفعلي.",
    about: [
      "أنا عبدالرحمن محمد، مهندس برمجيات Full Stack أعمل بـ TypeScript وReact وPostgreSQL.",
      "في شركة هافكو للنقل الثقيل بالدمام، أنا المطور الوحيد لنظام Hafco Base، نظام ERP ثنائي اللغة من 13 وحدة يشمل الأسطول، الموارد البشرية والرواتب، المحاسبة، المشتريات، وفواتير الرحلات. توليت المشروع من جمع المتطلبات مع كل قسم، إلى تصميم قاعدة البيانات، حتى نشر تطبيق السائقين على Google Play. وخلال ذلك ربطت النظام بالفوترة الإلكترونية من ZATCA وبالمنصات الحكومية مثل قوى ومقيم وبيان. أتمتت مسيّر الرواتب لـ 190 موظفاً من أيام إلى ثوانٍ، واختصرت إدخال المستندات من دقائق إلى ثوانٍ باستخدام OCR بالذكاء الاصطناعي.",
      "يهمني أن تصمد البرمجيات في الاستخدام الفعلي: صلاحيات وصول آمنة، تطبيقات تعمل على شبكات الجوال الضعيفة، وواجهات عربية مصممة من البداية للكتابة من اليمين لليسار وليست مضافة لاحقاً.",
      "خارج العمل أطوّر MergesPDF، أداة PDF تحافظ على الخصوصية، وKashef، محرك لاستخراج بيانات المستندات، تحت علامتي الخاصة AM Launch Web.",
      "حاصل على بكالوريوس الحوسبة ونظم المعلومات من الأكاديمية العربية للعلوم والتكنولوجيا، وأتحدث العربية والإنجليزية.",
    ],
    servicesKicker: "ماذا أبني",
    servicesTitle: "من الجداول إلى الأنظمة.",
    servicesCue: "مرّر لتحريك العرض",
    services: [
      { title: "أنظمة ERP", desc: "منصات أعمال متعددة الوحدات: الأسطول، الموارد البشرية، الرواتب، المحاسبة والمشتريات في مكان واحد." },
      { title: "تطبيقات الجوال", desc: "تطبيقات أندرويد تعمل على شبكات الجوال الضعيفة ومنشورة على Google Play." },
      { title: "أتمتة المستندات بالذكاء الاصطناعي", desc: "OCR واستخراج بيانات يحوّل دقائق من الإدخال إلى ثوانٍ." },
      { title: "التكامل السعودي", desc: "فوترة ZATCA الإلكترونية ومنصات قوى ومقيم وبيان الحكومية." },
      { title: "مواقع ثنائية اللغة", desc: "واجهات عربية أولاً من اليمين لليسار وإعادة تصميم سينمائية للعملاء." },
    ],
    workKicker: "أعمال مختارة",
    workTitle: "النظام الرئيسي وإعادة تصميم مواقع العملاء.",
    visit: "زيارة الموقع",
    preview: "معاينة مباشرة",
    close: "إغلاق",
    previewNote: "إذا بقيت المعاينة فارغة فالموقع يمنع التضمين. افتحه في تبويب جديد.",
    contactKicker: "تواصل",
    contactTitle: "لنبنِ النظام القادم معاً.",
    openTo: "متاح لـ: وظائف Full Stack والواجهات الأمامية وأنظمة ERP (السعودية، الإمارات، عن بُعد)",
    location: "الموقع",
    locationValue: "الدمام، المملكة العربية السعودية",
    copy: "نسخ",
    copied: "تم النسخ",
    form: { name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة", send: "إرسال الرسالة", sent: "يتم فتح تطبيق البريد والرسالة جاهزة للإرسال." },
    errors: { name: "يرجى إدخال الاسم", email: "يرجى إدخال بريد صحيح", message: "يرجى كتابة رسالة قصيرة" },
    footer: "بدعم من AM Launch Web",
  },
} as const;

export function buildMailto(name: string, from: string, message: string) {
  const subject = `Portfolio inquiry from ${name}`;
  const body = `${message}\n\n— ${name} (${from})`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
