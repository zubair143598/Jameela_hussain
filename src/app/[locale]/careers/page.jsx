import CareersForm from "@/components/careers/CareersForm";
import { getDict } from "@/lib/i18n";

export default async function CareersPage({
  params,
}) {
  const { locale } = await params;

  const dict = await getDict(locale);

  return (
    <CareersForm
      locale={locale}
      dict={dict}
    />
  );
}