function SearchBar({setSearch}) {
  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} />
    </>
  );
}

export default SearchBar;
