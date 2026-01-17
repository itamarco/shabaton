import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "המדריך המלא לשנת שבתון | גננות ועובדי הוראה",
  description: "המדריך המלא לשנת שבתון לגננות ועובדי הוראה. כל מה שצריך לדעת על זכויות, כספים, לימודים ובירוקרטיה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
