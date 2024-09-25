"use client";

import { GlobalStyle } from "@/styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
