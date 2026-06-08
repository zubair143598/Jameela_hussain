import React from "react";
import { getDict } from "@/lib/i18n";
import Services from "@/components/Services";

export default async function ServicesPage({ params }) {
  const { locale } = await params;

  const dict = await getDict(locale);
  return (
    <div>
      <Services locale={locale} dict={dict} />
    </div>
  );
};

