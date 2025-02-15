import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";
import GridDebugTool from "./debug/GridDebug";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GridDebugTool />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
