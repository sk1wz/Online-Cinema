"use client"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface PaginateProps {
  items: any[];
  itemsPerPage: number;
  children: (currentItems: any[]) => JSX.Element[];
}

export default function Paginate({ items, itemsPerPage, children }: PaginateProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    if(pageNumber > 0 && pageNumber <= totalPages){
      setCurrentPage(pageNumber);
    }
    
  };

  const indexOfLastItem = currentPage * itemsPerPage; // Индекс последнего элемента
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Индекс первого элемента
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem); // элементы на странице
  const totalPages = Math.ceil(items.length / itemsPerPage); // количество страниц

  // Показ пагинации, только если страниц > 1.
  const showPagination = totalPages > 1;

  return (
    <div>
      {children(currentItems)}
      {showPagination && (
        <Pagination>
          <PaginationContent>
            {/* PREV */}
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
            </PaginationItem>

            {/* ELEMENTS RENDER */}
            {Array(totalPages).fill(null).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* NEXT */}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}