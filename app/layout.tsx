

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import { generateMetadata as getMetadata } from "@/components/ui/Meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ensure getMetadata returns the correct type for robots.googleBot.max-image-preview
export const metadata: any = getMetadata('/'); // If getMetadata is in your control, update its return value as below:

// Example fix inside getMetadata (in "@/components/ui/Meta"):


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="light" // This will force dark mode
        > */}
          <ViewTransitions>
            <ReactLenis root>{children}</ReactLenis>
          </ViewTransitions>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
