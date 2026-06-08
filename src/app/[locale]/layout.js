import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dir, getDict, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = getDict(locale);

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main
        lang={locale}
        dir={dir(locale)}
        className={
          locale === "ar"
            ? "font-arabic"
            : "font-sans"
        }
      >
        {children}
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}
