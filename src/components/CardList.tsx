
import CardItem from "./items/CardItem";
import NotSearchPage from "./NotSearch";
import { Skeleton } from "./ui/skeleton";
import Paginate from "./Paginate";
import { IFilm } from "@/Interfaces/AllInterfaces";


export default function CardList({
  filteredFilms, 
  isLoading,  
  itemsPerPage,
  handleFavorite
   }: {   
  filteredFilms: IFilm[],
  isLoading: boolean, 
  setIsLoading: (isLoading: boolean) => void, 
  itemsPerPage:number,
  handleFavorite: (item: any) => void }){


  return (
    <div className="CardList w-full h-auto">
      {isLoading ? (
        <div className="grid grid-cols-4 gap-4">
          {Array(8).fill(null).map((_, index) => (
            <Skeleton key={index} className="w-[320px] h-[384px] rounded-xl" />
          ))}
        </div>
      ) : (
        filteredFilms && filteredFilms.length > 0 ? (
          <Paginate items={filteredFilms} itemsPerPage={itemsPerPage}>
            {/* @ts-ignore */}
            {(currentItems) => (
              <div className="grid grid-cols-4 gap-4">
                {currentItems.map((item) => (
                  <CardItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    rating={item.rating}
                    handleFavorite={handleFavorite}
                  />
                ))}
              </div>
            )}
          </Paginate>
        ) : (
          <NotSearchPage />
        )
      )}
    </div>
  );
}
