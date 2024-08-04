import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Navbar from "@/components/Navbar";
import "./App.scss";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sk1wzCinema | Онлайн-кинотеатр",
  description: "Онлайн-Кинотеатр Sk1wzCinema - лучший среди лучших. Бесплатный просмотр фильмов и сериалов в хорошем качестве!",
  keywords: "Смотреть онлайн бесплатно в хорошем качестве, Онлайн-кинотеатр, Sk1wzCinema, Sk1wz"
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ru">
      <body className={inter.className + " " + "bg-custom-color3"} >

        <div className="App flex justify-between">

          <LeftMenu />

          <div className="Main flex flex-1 w-full flex-col gap-4 h-screen p-4">


            <Navbar />
            <div className="content relative w-full overflow-auto h-screen">
              {children} {/* RENDERING COMPONENTS */}
            </div>
          

          </div>
          <RightMenu />

        </div>

        <Toaster /> {/* notifications */}
      </body>
    
    </html>
  );
}
