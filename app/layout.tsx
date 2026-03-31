import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "New Zealand Experience — NUSA TRAVEL",
  description: "Complete New Zealand Experience – North & South Island Dalam Satu Trip. 10 Hari 7 Malam pakej lengkap termasuk flight, hotel, makan halal dan tour guide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
