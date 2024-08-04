"use client"
import CardList from "@/components/CardList";
import Search from "@/components/Search";
import { useFetchDataAll } from "@/hooks/useFetch";
import { IFilm } from "@/Interfaces/AllInterfaces";
import { useEffect, useState } from "react";

export default function TrendsPage({searchParams} : {searchParams?:{query?: string; page?: string;}}){
  const { data, isLoading,setIsLoading } = useFetchDataAll("films");
  const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([]);
  const query = searchParams?.query || "";
    
  

  const searchTrendFilms = async (data: IFilm[], query: string) => {
    const result = data.filter((data) => data.rating > 7 && data.title.toLowerCase().includes(query.toLowerCase()));
    return result.sort((a, b) => b.rating - a.rating);
  };

  const fetchSearchFilms = async () => {
    setIsLoading(true);
    let result: IFilm[] = [];
    result = await searchTrendFilms(data, query);
    
    setFilteredFilms(result);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

 
  useEffect(() => {
    fetchSearchFilms();
  }, [query, data]);
  
    return (
      <div className="trendsPage">
        <div className="chapter flex justify-between items-center mb-4">
          <div className="left">
            <h1 className="text-custom-color2 text-lg pb-2 font-bold">Сейчас в тренде</h1>
          </div>
          <div className="right">
            <Search placeholder={"Введите название.."}/>
          </div>
        </div>
        <CardList filteredFilms={filteredFilms} isLoading={isLoading} setIsLoading={setIsLoading} itemsPerPage={8} />
        
      </div>
        
    )
}