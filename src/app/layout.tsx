import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varunkrgportfolio.netlify.app"),
  title: {
    default: "Varun Kumar Gupta | Software Engineer",
    template: "%s | Varun Kumar Gupta"
  },
  description:
    "Software engineer portfolio of Varun Kumar Gupta, focused on backend systems, platform engineering, AI-driven automation, and production software development.",
  applicationName: "Varun Kumar Gupta Portfolio",
  keywords: [
    "Varun Kumar Gupta",
    "Software Engineer",
    "Backend Engineer",
    "Technology Developer",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Portfolio"
  ],
  authors: [{ name: "Varun Kumar Gupta" }],
  creator: "Varun Kumar Gupta",
  publisher: "Varun Kumar Gupta",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Varun Kumar Gupta | Software Engineer",
    description:
      "Portfolio showcasing software engineering experience across backend systems, platform automation, AI/ML, and production development.",
    url: "/",
    siteName: "Varun Kumar Gupta Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/favicon-placeholder.png",
        width: 512,
        height: 512,
        alt: "Varun Kumar Gupta portfolio icon"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Varun Kumar Gupta | Software Engineer",
    description:
      "Backend-focused software engineer portfolio covering enterprise systems, platform automation, and applied AI development.",
    images: ["/favicon-placeholder.png"]
  },
  icons: {
    icon: "/favicon-placeholder.png",
    shortcut: "/favicon-placeholder.png",
    apple: "/favicon-placeholder.png"
  },
  robots: {
    index: true,
    follow: true
  }
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
