import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Explore = () => {
  const [query, setQuery] = useState("");

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


      <div className="flex items-center justify-between mt-5">
         <h3>Recent Post</h3>
         <div className="flex items-center gap-4 text-light-2">
           <button className="text-light-1">Feeds</button>
           <button>Popular</button>
           <button>Today</button>
           <button>Latest</button>
         </div>
       </div>
 
       <div className="grid grid-cols-3 mt-16">
         <article>
           <div>
             <img
               src="https://images.unsplash.com/photo-1714108671525-a8f722f30632?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="thumbnail"
               className="rounded-md"
             />
           </div>
 
           <figure className="flex items-center gap-4 mt-2.5">
             {/* `/profile/${creatorId}` */}
             <Link to="/">
               <div className="flex items-center gap-4">
                 <img src="" alt="avatar" className="h-12 w-12 rounded-full" />
               </div>
             </Link>
             <div>
               <p>Andrija Djordjevic</p>
             </div>
           </figure>
           <div className="flex items-center gap-2.5 mt-5 mb-2.5">
             <p className="text-primary-blue text-sm">#tags</p>
             <p className="text-primary-blue text-sm">#test</p>
             <p className="text-primary-blue text-sm">#tags</p>
           </div>
           <p className="text-light-2 text-sm">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
           </p>
         </article>
       </div>
    </div>
  );
  };
  
  export default Explore;