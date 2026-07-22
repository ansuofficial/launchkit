import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/landing/Nav";
import { SITE } from "@/lib/site";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: `${SITE.name} - Professional Templates for Modern Teams`,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.githubUrl }],
  creator: SITE.name,
  keywords: [
    "email templates",
    "document templates",
    "Elements",
    "Unlayer",
    "React",
    "open source",
    "LaunchKit",
  ],
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/images/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
  },
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.siteUrl,
    siteName: SITE.name,
    title: `${SITE.name} - Professional Templates for Modern Teams`,
    description: SITE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - Professional Templates for Modern Teams`,
    description: SITE.tagline,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#08090F" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
