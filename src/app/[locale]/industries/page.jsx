import { getDict } from "@/lib/i18n";
import Industries from "@/components/industries/Industries";

export default async function IndustriesPage({ params }) {
  const { locale } = await params;

  const dict = await getDict(locale);
  return (
    <div>
      <Industries locale={locale} dict={dict} />
    </div>
  );
};

