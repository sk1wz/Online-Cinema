"use client"
import { IFilm } from "@/Interfaces/AllInterfaces";
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import { memo, useCallback, useState } from "react";




function CardItem (props: IFilm){
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFavorite,setIsFavorites] = useState<boolean>(false);
  
    const handleMouseOver = useCallback(() => {
        setIsHovered(true);
    }, [setIsHovered]);
      
    const handleMouseOut = useCallback(() => {
        setIsHovered(false);
    }, [setIsHovered]);
   
    const addFavorite = useCallback((id:number) =>{
        setIsFavorites(prev => !prev)
        props.handleFavorite(id);
    },[])
      
    return (
        <div className={`CardItem bg-cover w-80 h-96 border-2 border-custom-color4 rounded-xl flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300`}  
        style={{
            backgroundImage: isHovered
              ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.img})`
              : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.img})`,
          }}  
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <div className="top self-start w-full relative">
                <div className="top__actions flex items-center justify-between p-2">
                    <div className="top__actions__left flex gap-2 items-center">
                        <button  style={{background: 'rgba(0,0,0,0.4)'}} className="p-2 rounded-xl"><Star width={20} height={20} color="#00B9AE"  fill={null ? "#00B9AE" : "none"} /></button>
                        <p className={
                        `font-semibold text-sm ${
                            props.rating > 7? "text-green-500" : 
                            props.rating < 4? "text-red-500" : 
                            "text-yellow-500"
                        }`
                        }>
                        Рейтинг: {props.rating}
                        </p>
                    </div>
                    <div className="top__actions__right">
                        <button onClick={() => addFavorite(props.id)} style={{background: 'rgba(0,0,0,0.4)'}} className="p-2 rounded-xl"><Heart width={20} height={20} color="#00B9AE" fill={isFavorite ? "#00B9AE" : "none"} /></button>
                    </div>
                    
                </div>
            </div>
            <div className="bottom self-end p-4 overflow-hidden flex flex-col gap-2 relative w-full" style={{background: 'rgba(0,0,0,0.8)'}}>
                <div className="bottom__info">
                    <h1 className="text-custom-color2 font-semibold">{props.title}</h1>
                    <p className="text-white">{props.description}</p>
                </div>
                <div className="bottom__actions">
                    <Link href={`view/${props.id}`}><button className="text-white text-sm bg-custom-color2 rounded-xl p-2 hover:bg-custom-color5 transition-all duration-300">Читать подробнее</button></Link>
                </div>
            </div>
        </div>
    )
}
export default memo(CardItem);