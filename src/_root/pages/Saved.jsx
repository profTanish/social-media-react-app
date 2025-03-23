import Loader from "../../components/shared/Loader";
 import PostListItem from "../../components/shared/PostListItem";
import { useGetCurrentUser } from "../../lib/react-query/authQueriesAndMutations";

const Saved = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();

  console.log(currentUser);
 
  const saved = currentUser?.save;
 
   return (
     <div>
       <h3 className="text-lg font-medium mb-5">Posts you've saved:</h3>
 
       <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {isLoading ? (
           <Loader />
         ) : (
           saved.map((save) => (
             <PostListItem key={save.$id} post={save.post} showUser={false} />
           ))
         )}
         {!saved.length > 0 && <p>No posts saved yet.</p>}
       </ul>
     </div>
   );
  };
  
  export default Saved;