import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://livin-website.vercel.app"),
  title: "Livin | Apartment search that learns your preferences",
  description:
    "Livin helps renters turn messy housing preferences into small, explained apartment shortlists that improve with feedback.",
  openGraph: {
    title: "Livin | Apartment search that learns your preferences",
    description:
      "A preference-learning apartment search experience for students and early-career renters.",
    type: "website",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Livin | Apartment search that learns your preferences",
    description:
      "Small explained apartment shortlists, strict hard constraints, and feedback that compounds."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f1e8"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
