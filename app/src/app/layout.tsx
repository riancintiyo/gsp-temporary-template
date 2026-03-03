import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    { path: "../../public/fonts/PlusJakartaSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../../public/fonts/PlusJakartaSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/PlusJakartaSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/PlusJakartaSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/PlusJakartaSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../public/fonts/PlusJakartaSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../../public/fonts/PlusJakartaSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/PlusJakartaSans-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "General Science Program",
  description: "Empowering learning and creativity based on Science, Technology, Engineering, Art, Mathematic (STEAM) project for elementary school students in rural areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
