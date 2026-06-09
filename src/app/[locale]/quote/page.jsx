import QuoteForm from "@/components/quote/QuoteForm";
import { getDict } from "@/lib/i18n";

export default async function QuotePage({
  params,
}) {
  const { locale } = await params;

  const dict =
    await getDict(locale);

  return (
    <QuoteForm
      locale={locale}
      dict={dict}
    />
  );
}