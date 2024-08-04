import { ShieldAlert } from "lucide-react";

export default function NotFoundPage(){
    return (
        <div className="notFound flex justify-center items-center h-full">
            <div className="404 flex flex-col gap-4 items-center">
                <ShieldAlert  width={40} height={40} color="#00B9AE"/>
                <h1 className="font-bold text-lg text-custom-color2">404 | This page could not be found.</h1>
                <a href="/" className="font-semibold text-white text-base bg-custom-color2 p-2 rounded-lg">Вернуться на главную страницу</a>
            </div>
            
        </div>
    )
}