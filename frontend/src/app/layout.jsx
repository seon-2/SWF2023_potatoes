import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../../components/templates/Footer";
import ToastProvider from "./templates/ToastProvider";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}