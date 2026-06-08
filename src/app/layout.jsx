// src/app/layout.jsx
import "./globals.css";
import Providers from "@/lib/providers";

export const metadata = {
  title: "Jameela — Heavy Transport, Fuel & Water · KSA",
  description:
    "Jameela operates Mercedes-Benz MP4/MP5 tankers across Saudi Arabia — Aramco fuels, water and construction materials.",
};

export default function RootLayout({ children }) {
  return (
     <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}