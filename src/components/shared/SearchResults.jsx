import Loader from "./Loader";
 import PostsList from "./PostsList";
 
 const SearchResults = ({ searchedResults, isSearching }) => {
   if (isSearching) return <Loader />;
 
   if (searchedResults && searchedResults.documents.length > 0)
     return <PostsList posts={searchedResults.documents} />;
 
   return (
     <p className="text-sm text-light-2">
       ⛔ No results found! Try searching something else...
     </p>
   );
  };
  
  export default SearchResults;