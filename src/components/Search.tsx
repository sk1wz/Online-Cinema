"use client"
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import { useDebouncedCallback } from 'use-debounce';


export default function Search({placeholder}:{placeholder:string}){
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback(
        (term: string) => {
          const params = new URLSearchParams(searchParams);
          if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`);
        },
        500 // time
      );
        
    
    useEffect(() =>{
        setIsLoading(false)
    }, [])

    return (
        <div className="Search flex items-end gap-4">
            {isLoading ? (
                <Skeleton className="w-[256px] h-[32px] rounded-xl" />
            ) : (
                <Input 
                placeholder={placeholder}
                type="text" 
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
                />
            )

            }
       
            {/* <h1 className="text-custom-color2 text-sm pb-2 font-bold">Поиск</h1> */}
           
        </div>
    )
}