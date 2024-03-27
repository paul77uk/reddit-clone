import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <main id="search-bar">
      <CiSearch size={"22px"} color="#252F31" />
      <div id="search-text-sm">Search...</div>
      <div id="search-text">Search Reddit</div>
    </main>
  );
};
export default SearchBar;
