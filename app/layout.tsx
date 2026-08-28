import type { Metadata } from "next";
import "./globals.css";

const title = "2026 UNOFFICIAL PLAYBOOK: Nex Summer Internship";
const description =
  "An interactive digital edition of the 2026 Nex summer internship playbook, built from intern surveys, photos and drawings.";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
