"use client"
import CardList from "@/components/CardList";
import Search from "@/components/Search";
import {useFetchDataAll} from "@/hooks/useFetch";
import { IFilm } from "@/Interfaces/AllInterfaces";
import axios from "axios";
import React, { useEffect, useState } from 'react';


export default function ViewPage({searchParams} : {searchParams?:{query?: string; page?: string;}}){
    const { data, isLoading,setIsLoading } = useFetchDataAll("films");
    const query = searchParams?.query || "";
    const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([]);
  
  // Поиск фильмов по названию в просмотре
  const searchFilms = async (data: IFilm[], query: string) => {
    const result = data.filter((data) => data.title.toLowerCase().includes(query.toLowerCase()));
    return result;
  };

  const fetchSearchFilms = async () => {
    setIsLoading(true);
    let result: IFilm[] = [];
    result = await searchFilms(data, query);
    
    setFilteredFilms(result);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleFavorite = async(filmId: number) =>{
    try {
      const {data} = await axios.post('https://6bc124b994bfc1e1.mokky.dev/favorites',{
        filmId: filmId
      });
      console.log(data)
    } catch (error) {
      throw new Error("Error!")
    }
  }

 
  useEffect(() => {
    fetchSearchFilms();
  }, [query, data]);
    
    return (
        <div className="viewPage">
            <div className="chapter flex justify-between items-center mb-4">
                <div className="left">
                    <h1 className="text-custom-color2 text-lg font-bold">Список фильмов</h1>
                </div>
                <div className="right">
                   <Search placeholder={"Введите для поиска.."}/>
                </div>
            </div>
         
            <CardList filteredFilms={filteredFilms} isLoading={isLoading} setIsLoading={setIsLoading} itemsPerPage={8} handleFavorite={handleFavorite} />
           
        </div>
        
    )
}