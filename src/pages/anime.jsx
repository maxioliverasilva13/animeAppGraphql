import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "@apollo/client";
import { peopleQuery } from "../utils/peopleUtils";
import { ClockLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { repeat } from "ramda";
import { GrPrevious } from "react-icons/gr";
import clsx from "clsx";
import { getAnimeList } from "../utils/animeUtils";
import AnimeItem from "../components/AnimeItem";
import { MotionScreen } from 'react-motion-layout';
// import { SharedElement, MotionScene, useMotion } from 'react-motion-layout';

const ntc = require('ntcjs');

let isRenderDotsBack = false;
let isRenderDotsNext = false;

const DEFAULT_PAGE_SIZE = 10;
const formatPage = (index) => index * DEFAULT_PAGE_SIZE;

export default function People() {
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  // const withTransition = useMotion(`story-activeElement`);

  const { data, loading } = useQuery(getAnimeList, {
    variables: {
      page: currentPage
    }
  });

  isRenderDotsBack = false;
  isRenderDotsNext = false;

  console.log(data);
  const animeInfo = data?.Page?.media || [];
  const totalPages = Math.ceil((data?.Page?.pageInfo?.total || 0) / DEFAULT_PAGE_SIZE);

  useEffect(() => {
    if (totalPages && allPages === 0) {
      setAllPages(totalPages);
    }
  }, [data, totalPages]);

  console.log(animeInfo);

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full h-auto min-h-full transition-all z-10 bg-white flex flex-col items-start font-semibold text-[30px] justify-start gap-5 md:p-10 p-4">
      {loading && (
        <ClockLoader
          className="m-auto"
          size={100}
          color="#36d7b7"
          loading={loading}
        />
      )}

      <div className="flex transition-all flex-row items-start gap-4 justify-start flex-wrap">
        {animeInfo?.map((item) => {
          return (
           <AnimeItem item={item} />
          );
        })}
      </div>

      {!loading && allPages > 0 && (
        <div className="w-auto mx-auto mt-5 px-4 py-2 h-auto flex flex-row items-center justify-center gap-3 rounded-md shadow-md border border-gray-200">
          <GrPrevious
            className="!text-red-100 text-[18px]"
            onClick={() => handlePrevPage()}
          />
          {repeat([], allPages).map((item, index) => {
            const currentIndex = index + 1;
            const isActive = currentIndex === currentPage;

            if (
              (currentIndex > totalPages - 3) || 
              (currentIndex >= currentPage && currentIndex < currentPage + 3) || 
              (currentIndex + 3 > allPages)
            ) {
              return (
                <span
                  className={clsx(
                    "font-medium text-[16px] px-2 py-1 rounded-md flex items-center justify-center",
                    !isActive ? "bg-transparent" : "bg-blue-400"
                  )}
                >
                  <span
                    onClick={() => setCurrentPage(currentIndex)}
                    className={clsx(
                      "cursor-pointer ",
                      !isActive ? "text-gray-500" : "text-white"
                    )}
                  >
                    {currentIndex}
                  </span>
                </span>
              );
            } else {

              // if (isRenderDots) return;
              if (currentIndex < currentPage) {
                if (isRenderDotsBack) return;
                isRenderDotsBack = true;
              } else {
                if (isRenderDotsNext) return;
                isRenderDotsNext = true;
              }
              
              return <span onClick={() => setCurrentPage(currentIndex)} className="font-normal text-base cursor-pointer">...</span>
            }
          })}

          <GrPrevious
            className="!text-red-100 text-[18px] rotate-180"
            onClick={() => handleNextPage()}
          />
        </div>
        )}
    </div>
  );
}
