"use client";
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry"
import './global.css'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  // useEffect(() => {
  //   console.log("stay hungry stay foolish");
  //   document.title = "realvaibhava ✦ designer ✦ artist ✦ dreamer"
  // })

  return (
    <html>
      <head>
        <title>Hello!</title>
        <meta property="og:title" content="✦ realvaibhava ✦" />
        <meta property="og:description" content="Description of my Next.js website" />
        <meta property="og:image" content="https://www.vaibhava.me/preview.png" />
        <meta property="og:url" content="https://www.vaibhava.me/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.vaibhava.me/preview.png" />
      </head>
      <body className={inter.className} style={{ width: "100%", display: "flex" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}