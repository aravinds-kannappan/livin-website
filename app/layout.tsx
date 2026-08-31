import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://livin-website.vercel.app"),
  title: "Livin | Just say what home feels like",
  description:
    "A voice-first apartment search that turns natural conversation into hard constraints, honest trade-offs, and a shortlist that learns.",
  openGraph: {
    title: "Livin | Just say what home feels like",
    description:
      "Talk naturally. Get a small, explained apartment shortlist that learns what you choose.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Livin voice-first apartment search shown on a phone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Livin | Just say what home feels like",
    description:
      "Voice-first apartment search with strict constraints and honest trade-offs.",
    images: ["/og.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e7"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*
          THESIS: Voice becomes a precise housing brief; no generic SaaS hero or card grid.
          OWN-WORLD: Field-note paper, carbon ink, coral recorder field, rule-led controls.
          STORY: Speak naturally, confirm constraints, inspect trade-offs, and return with preference memory.
          FIRST VIEWPORT: Direct offer left; animated phone right; primary conversation action under the promise.
          FORM: Voice-memo field notebook, grounded direction 3 of 7, seed 5e02e1f8.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <template
          data-impeccable-contract="THESIS voice becomes a precise housing brief; OWN-WORLD field-note paper, carbon ink, coral recorder field, rule-led controls; STORY speak, confirm, shortlist, remember; FIRST VIEWPORT offer left, animated phone right, primary action below; FORM voice-memo field notebook, grounded direction 3 of 7, seed 5e02e1f8; FINISH reviewed, documented, provenance embedded"
        />
        {children}
      </body>
    </html>
  );
}
