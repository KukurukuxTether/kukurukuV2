import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SearchBarInput } from "@/components/form/SearchBar";
import { MaxWidthProvider } from "@/components/layout/MaxWidthProvider";
import { useDebounce } from "@/hooks/useDebounce";
import useGreeting from "@/hooks/useGreeting";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { generateRecentMovies } from "@/utils/generateRecentMovies";

import { HomeLayout2 } from "./layouts/HomeLayout2";
import { BookmarksPart } from "./parts/home/BookmarksPart";
import { WatchingPart } from "./parts/home/WatchingPart";
import { SearchListPart } from "./parts/search/SearchListPart";
import { SearchLoadingPart } from "./parts/search/SearchLoadingPart";

function useSearch(search: string) {
  const [searching, setSearching] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce<string>(search, 500);
  useEffect(() => {
    setSearching(search !== "");
    setLoading(search !== "");
  }, [search]);
  useEffect(() => {
    setLoading(false);
  }, [debouncedSearch]);

  return {
    loading,
    searching,
  };
}

export function HomePage2() {
  const searchParams = useSearchQuery();
  const [search, setSearch, setSearchUnFocus] = searchParams;
  const s = useSearch(search);
  const { greeting } = useGreeting();
  const recentMovies = generateRecentMovies(greeting);
  const movieCategories = [
    {
      id: 1,
      name: "TV Shows",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "Categories",
    },
  ];
  return (
    <HomeLayout2>
      <MaxWidthProvider className="mx-auto">
        <section className="mb-[4.438rem] lg:flex lg:gap-[3.813rem] ">
          <div className=" text-center lg:text-left lg:max-w-[26.688rem] mb-[2rem] lg:mb-0">
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.375rem] font-medium text-[#5C5C5C] mb-[1.875rem] ">
              <span className="bg-gradient-to-r from-[#2283CE] to-white text-transparent bg-clip-text">
                Hello Streamer
              </span>{" "}
              <br />
              What would you like to watch this {greeting}?
            </h1>
            <ul className="flex gap-[0.5rem] md:gap-[1rem] justify-center lg:justify-start">
              {movieCategories.map((item) => {
                return (
                  <button
                    key={item.id}
                    type="button"
                    className="bg-[#141414] border border-[#2E2E2E] h-[2.5rem]  rounded-[1rem] px-2 text-[0.75rem] md:text-[0.875rem] text-[#4B4B4B] w-[6rem]"
                  >
                    {item.name}
                  </button>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-[0.5rem] md:gap-[1.219rem] ">
            {recentMovies.map((item) => {
              return (
                <Link key={item.id} to={item.href}>
                  <div className="border overflow-hidden border-[#2E2E2E] h-[15.308rem] rounded-[1.083rem]">
                    <img
                      alt="Movie image"
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <div className="mb-[2.688rem] sticky top-0 z-10">
            <SearchBarInput
              // ref={inputRef}
              onChange={setSearch}
              value={search}
              onUnFocus={setSearchUnFocus}
              placeholder="Enter a movie title here"
            />
          </div>
          {s.loading ? (
            <SearchLoadingPart />
          ) : s.searching ? (
            <SearchListPart searchQuery={search} />
          ) : (
            <>
              <BookmarksPart />
              <WatchingPart />
            </>
          )}
        </section>
      </MaxWidthProvider>
    </HomeLayout2>
  );
}
