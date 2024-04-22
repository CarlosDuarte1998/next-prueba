'use client';
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css"; 
import SideMenu from "@/components/side-menu";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    
    <NextUIProvider>
      <header>
        <SideMenu />
      </header>
      
      <AnimatePresence mode="wait" >
        <main>
        <Component {...pageProps} />
      </main>
      </AnimatePresence>

      <footer>
        
      </footer>
    </NextUIProvider>
  );
}
