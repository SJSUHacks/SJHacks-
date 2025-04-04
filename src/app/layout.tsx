import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SJHacks",
  description: "SJHacks is a 24-hour, in-person hackathon in San Jose designed to bring together changemakers from all backgrounds. Whether you are a coder, designer, or just passionate about solving problems, this event offers a space for you to collaborate, innovate, and create solutions that make a difference.",
   icons: {
    icon: '/icon.ico', 
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
