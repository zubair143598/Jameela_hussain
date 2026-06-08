import { getDict } from "@/lib/i18n";
import About from  "@/components/about/About";

export default async function AboutPage({ params }) {
  const { locale } = await params;

  const dict = await getDict(locale);

  return (
    <About
      locale={locale}
      dict={dict}
    />
  );
}