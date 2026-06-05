"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512">
    <path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
  </svg>
);

export default function Footer() {
  const t = useTranslations("Footer");
  const n = useTranslations("Navbar");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/company/ambyte-agency/",
      label: "LinkedIn",
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/213556648005",
      label: "WhatsApp",
    },
    {
      icon: EmailIcon,
      href: "mailto:contact@ambyte-agency.com",
      label: "Email",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/ambyte.agency/",
      label: "Instagram",
    },
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com/profile.php?id=61586145290425",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { label: n("home"), href: "#home" },
    { label: n("services"), href: "#services" },
    { label: n("projects"), href: "#works" },
    { label: n("events"), href: "#events" },
    { label: n("contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6 lg:px-12 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2 w-fit">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-black text-xl">
                  <Image
                    src={"https://ambyte-agency.com/assets/logobg-BXPDcwaC.png"}
                    alt="logo"
                    width={48}
                    height={48}
                  />
                </span>
              </div>
              <span className="font-black text-2xl tracking-wider text-white">
                AMBYTE <span className="text-white/80">AGENCY</span>
              </span>
            </a>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-black tracking-wider text-white uppercase relative w-fit">
                {t("quickLinks")}
                <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-white rounded-full"></span>
              </h3>
            </div>
            <nav className="flex flex-col gap-3 text-white/70 font-medium">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-black tracking-wider text-white uppercase relative w-fit">
                {t("contactUs")}
                <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-white rounded-full"></span>
              </h3>
            </div>
            <div className="flex flex-col gap-4 text-white/70 font-medium text-base">
              <a
                href="mailto:contact@ambyte-agency.com"
                className="flex items-center gap-3.5 hover:text-white transition-colors duration-300 w-fit"
              >
                <EmailIcon />
                <span>contact@ambyte-agency.com</span>
              </a>
              <a
                href="tel:+213556648005"
                className="flex items-center gap-3.5 hover:text-white transition-colors duration-300 w-fit"
              >
                <PhoneIcon />
                <span className="ltr">+213556648005</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40 font-medium">
          <p>{t("rights", { year: currentYear })}</p>
          <p className="hover:text-white transition-colors duration-300">
            {t("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
