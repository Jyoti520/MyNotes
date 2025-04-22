import React from "react";
import { Edit2, Trash } from "lucide-react";



function Header({ setChecked, deletedNotes }) {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 flex px-6 py-2 w-full justify-between items-center bg-white font-sans text-gray-600 font-medium ">
        <h3 className="font-mono text-gray-600 text-2xl font-medium">
          My Notes
        </h3>
        <div className="flex gap-4">
        <button
          className="text-orange-300 bg-transparent cursor-pointer rounded-full p-2 hover:bg-orange-300 hover:text-white transition duration-300"
          onClick={()=>setChecked(prev=> !prev)}
        >
          <Edit2 fontSize={24} />
        </button>

        <button
          className="text-orange-300 bg-transparent cursor-pointer rounded-full p-2 hover:bg-orange-300 hover:text-white transition duration-300"
          onClick={deletedNotes}
        >
          <Trash fontSize={24} />
        </button>
        </div>
      </div>
    </>
  );
}

export default Header;
