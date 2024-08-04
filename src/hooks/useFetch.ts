import { IFilm } from "@/Interfaces/AllInterfaces";
import { useState, useEffect } from 'react';
const baseUrl = process.env.REACT_APP_URL;

// Получение всех фильмов
export const useFetchDataAll = (url: string) => {
  const [data, setData] = useState<IFilm[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://${baseUrl}/${url}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }
        setData(data);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, setIsLoading };
};



// Получение одного фильма
export const useFetchData = (url: string, uid: string) => {
    const [data, setData] = useState<IFilm[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://${baseUrl}/${url}/${uid}`);
          const data = await response.json();
  
          if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
          }
          setData(data);
          setIsLoading(false);
     
        } catch (error) {
          console.error('Error fetching');
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { data, isLoading, setIsLoading };
  };
