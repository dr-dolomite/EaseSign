// app/layout.tsx
import { Providers } from "./providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EaseSign",
  description:
    "Discover Effortless Event Registrations with EaseSign - Streamlined Process, Modern UI. Simplify Your Event Management Experience. Sign Up Now!",
};

import { NavbarResponsive } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavbarResponsive/>
          {children}</Providers>
      </body>
    </html>
  );
}
