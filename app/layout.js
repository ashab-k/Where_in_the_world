import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navigation mode="Light Mode" />
        {children}
      </body>
    </html>
  );
}
