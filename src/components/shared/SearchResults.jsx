import Loader from "./Loader";
 import PostsList from "./PostsList";
 
 const SearchResults = ({ searchedPosts, isSearchingPosts }) => {
   if (isSearchingPosts) return <Loader />;
 
   if (searchedPosts && searchedPosts.documents.length > 0)
     return <PostsList posts={searchedPosts.documents} />;
 
   return (
     <p className="text-sm text-light-2">
       ⛔ No results found! Try searching something else...
     </p>
   );
  };
  
  export default SearchResults;