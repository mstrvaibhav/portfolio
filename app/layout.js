"use client";
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry"
import './global.css'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  useEffect(() => {
    console.log("stay hungry stay foolish");
    document.title = "realvaibhava ✦ designer ✦ artist ✦ dreamer"
  })

  return (
    <html>
      <body className={inter.className} style={{ width: "100%", display: "flex" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}