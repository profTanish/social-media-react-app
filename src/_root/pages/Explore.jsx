import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";

import SearchResults from "../../components/shared/SearchResults";
import PostsList from "../../components/shared/PostsList";
import {
  useGetPosts,
  useGetPostsBySearch,
} from "../../lib/react-query/authQueriesAndMutations";
import useDebounce from "../../hooks/useDebounce";
import Loader from "../../components/shared/Loader";

const Explore = () => {
  const [query, setQuery] = useState("");
  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

  const debouncedQuery = useDebounce(query, 500);
  const { data: searchedPosts, isFetching: isSearchingPosts } =
    useGetPostsBySearch(debouncedQuery);

  if (!posts)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    );

  const shouldShowSearchResults = query !== "";
  const shouldShowPosts =
    !shouldShowSearchResults &&
    posts.pages.every((item) => item.documents.length === 0);

  return (
    <div className="w-full">
       <h3 className="text-lg font-medium mb-2.5">Search post:</h3>
 
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything..."
          className="input bg-dark-2 pl-10 w-80 text-light-2"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <HiMagnifyingGlass className="absolute top-1/2 left-2.5 translate-y-[-50%] opacity-30 text-xl" />
      </div>

      <div className="flex items-center justify-between mt-5 mb-8">
         <h3>Recent Post</h3>
         <div className="flex items-center gap-4 text-light-2">
           <button className="text-light-1">Feeds</button>
           <button>Popular</button>
           <button>Today</button>
           <button>Latest</button>
         </div>
       </div>
       
       {shouldShowSearchResults ? (
         <SearchResults />
       ) : shouldShowPosts ? (
         <p>You've reached the end.</p>
       ) : (
         posts.pages.map((item, i) => (
           <PostsList key={i} posts={item.documents} />
         ))
       )}
    </div>
  );
  };
  
  export default Explore;