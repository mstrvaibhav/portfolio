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
        <title>realvaibhava ✦ designer ✦ artist ✦ dreamer</title>
        <meta property="og:title" content="realvaibhava ✦ designer ✦ artist ✦ dreamer" />
        <meta property="og:description" content="I am designer currently crafting cross platform consumer experiences at MakeMyTrip flights team." />
        <meta property="og:url" content="https://www.vaibhava.me/" />
        <meta property="og:image" content="https://www.vaibhava.me/preview.jpg" />
        <meta property="og:image:width" content="4800" />
        <meta property="og:image:height" content="3200" />
        <meta property="og:image:alt" content="realvaibhava ✦ designer ✦ artist ✦ dreamer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.vaibhava.me/preview.jpg" />
        <meta name="twitter:image:width" content="4800" />
        <meta name="twitter:image:height" content="3200" />
        <meta property="twitter:image:alt" content="realvaibhava ✦ designer ✦ artist ✦ dreamer" />
      </head>
      <body className={inter.className} style={{ width: "100%", display: "flex" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}