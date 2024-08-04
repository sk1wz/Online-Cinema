import { SearchX } from "lucide-react";

export default function NotSearchPage(){
   
    return (
        <div className="notFound flex justify-center items-center absolute w-full">
            <div className="404 flex flex-col gap-4 items-center">
            <SearchX width={40} height={40} color="#00B9AE"/>
            <h1 className="font-bold text-lg text-custom-color2">По вашему запросу ничего не найдено!</h1>
            </div>
            
        </div>
    )

}