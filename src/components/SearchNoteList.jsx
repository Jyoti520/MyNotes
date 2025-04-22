import React from "react";
import { searchNote } from "../store/noteSlice";
import { useDispatch } from "react-redux";

function SearchNoteList({ search }) {
  const dispatch=useDispatch()
  return (
    <div className="w-full my-4 p-2 bg-gray-100 rounded-full hover:backdrop-blur-lg border-3 border-transparent hover:border-orange-200 transition-colors duration-300">
      <input
        type="text"
        value={search}
        placeholder="Search here.."
        onChange={(e) =>dispatch(searchNote(e.target.value))}
        className="font-medium py-1 px-6 text-lg outline-none"
        aria-label="search-note"
      />
    </div> 
  );
}

export default SearchNoteList;
