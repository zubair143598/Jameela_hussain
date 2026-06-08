import HomeSection  from "@/components/home/HomeSection";
import { getDict } from "@/lib/i18n";

export default async function HomePage({ params }) {
  const { locale } = await params;

  const dict = await getDict(locale);

  return (
    <HomeSection
      locale={locale}
      dict={dict}
    />
  );
}