"use client"
import { handleError } from "@/lib/utils";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useEffect } from "react";

export default function ViewInfo(props: any){
    const { data, isLoading } = props;

    return (
    <>
        {/* LEFT */}
        {isLoading ? (
            <div>
                <Skeleton className="w-[320px] h-[384px] rounded-xl mb-4" />
                <Skeleton className="w-[320px] h-[40px] rounded-md" />
            </div>
        ) : (
            <div className="left relative flex-none flex flex-col gap-4">
                <img src={data?.img} className="w-80 h-96 object-fit rounded-xl" alt="none" />
                <Button onClick={handleError}>Смотреть фильм</Button>
            </div>
        )
        }

        {/* RIGHT */}
        <div className="right flex-1">
        {/* RIGHT TOP INFO BLOCK  */}
        {isLoading ? (
            <Skeleton className="w-[full] h-[45px] rounded-xl mb-4" />
        ) : (
            <div className="right__info__top mb-4">
                <span className="text-slate-600">Название</span>
                <div className="right__info__top__head flex items-center gap-2">
                    <h1 className="text-xl font-semibold text-custom-color2">
                    {data?.title} 
                    </h1>
                    <p className={
                    `font-semibold text-sm ${
                        data?.rating > 7? "text-green-500" : 
                        data?.rating < 4? "text-red-500" : 
                        "text-yellow-500"
                    }`
                    }>
                    Рейтинг: {data?.rating}
                    </p>
                </div>
            </div>
        )
        }
        
        {/* RIGHT BOTTOM INFO BLOCK  */}
        {isLoading ? (
            <Skeleton className="w-[full] h-[200px] rounded-xl mb-4" />
        ) : (

            <div className="right__info__bottom mt-4">
            <span className="text-slate-600">Описание</span>
                <div className="right__info__bottom__info">
                <p className="text-white">
                {data?.description}
                </p>
                </div>
            </div>
        )
        }

        </div>

    </>

    );
}




