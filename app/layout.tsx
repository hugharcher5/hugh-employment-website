import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

const description =
  "Hugh Archer: Commerce student at UCD (First Class Honours), investment fund intern at IBM's pension fund and AI engineer at Blackkite Ventures.";

export const metadata: Metadata = {
  title: "Hugh Archer · Finance and AI · UCD Commerce",
  description,
  openGraph: { title: "Hugh Archer", description, url: "https://hugharcher.vercel.app", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${mono.variable} antialiased`}>
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}
