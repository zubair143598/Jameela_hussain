import { getDict } from "@/lib/i18n";
import Fleet from  "@/components/fleet/Fleet";

const FleetPage = async ({ params }) => {
    const { locale } = await params;

  const dict = await getDict(locale);

  return (
    <Fleet
      locale={locale}
      dict={dict}
    />
  );
}

export default FleetPage;
