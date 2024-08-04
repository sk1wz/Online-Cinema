"use client"
import { useFetchData } from "@/hooks/useFetch";
import ViewItemInfo from "@/components/items/ViewItemInfo";
import { useEffect } from "react";


export default function ViewItemPage({ params }: {params: {viewId?: string | any}}) {
  const { data, isLoading } = useFetchData("films", params.viewId);

    return (
      <div className={`view-${params.viewId}`}>
         <div className="view__info flex justify-between gap-10">
            <ViewItemInfo data={data} isLoading={isLoading}/>
         </div>
        
        
      </div>
    );
  }