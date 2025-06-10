import Link from "next/link";
import React from "react";
import './styles/main.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "3rem",
        }}
      >
        <header>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/about">About</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
