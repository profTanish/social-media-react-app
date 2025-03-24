import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useGetUsers } from "../../lib/react-query/queriesAndMutations";
import Loader from "../../components/shared/Loader";
import ProfileListItem from "../../components/shared/ProfileListItem";
import useDebounce from "../../hooks/useDebounce";

const Profiles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 500);
  const { data: users } = useGetUsers();

  const filteredUsers =
    users?.documents.filter((user) => user.username === debouncedQuery) ||
    users;

  if (!users)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-2.5">Find a new friend:</h3>

      <div className="relative">
        <input
          type="text"
          placeholder="Search anything..."
          className="input bg-dark-2 pl-10 w-80 text-light-2"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <HiMagnifyingGlass className="absolute top-1/2 left-2.5 translate-y-[-50%] opacity-30 text-xl" />
      </div>

      <h3 className="text-lg font-medium mt-10">Profiles list:</h3>

      <ul>
        {" "}
        {filteredUsers.length > 0
          ? filteredUsers.map((user) => (
            <ProfileListItem key={user.$id} user={user} />
          ))
          : users.documents.map((user) => (
            <ProfileListItem key={user.$id} user={user} />
          ))}
      </ul>
    </div>
  );
};

export default Profiles;