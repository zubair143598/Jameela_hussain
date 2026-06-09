import ContactForm from "@/components/contact/ContactForm";

import { getDict } from "@/lib/i18n";

export default async function ContactPage({
  params,
}) {
  const { locale } = await params;

  const dict =
    await getDict(locale);

  return (
    <ContactForm
      locale={locale}
      dict={dict}
    />
  );
}