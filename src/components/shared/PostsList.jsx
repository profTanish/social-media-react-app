import PostListItem from "./PostListItem";
 
 const PostsList = ({ posts }) => {
   console.log(posts);
   return (
     <ul className="grid grid-cols-3 mt-16 w-full gap-4">
       {posts.map((post) => (
         <PostListItem key={post.$id} post={post} />
       ))}
     </ul>
   );
 };
 
 export default PostsList;