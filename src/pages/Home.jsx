import React, { useState } from "react";
import Header from "../common/Header";
import NoteList from "../components/NoteList";
import SearchNoteList from "../components/SearchNoteList";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCheckedNotes } from "../store/noteSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);
  

  const search= useSelector(state=> state.notes.searchQuery)

  const notes = useSelector((state) =>
    state.notes.searchQuery ? state.notes.searchItems : state.notes.items
  );
  

  const openform = () => {
    navigate("/form");
  };

  const removeCheckedNote = () => {
    dispatch(deleteCheckedNotes());
    setChecked(false);
  };
  


  return (
    <div className="w-[100%] bg-white min-h-screen">
      <Header setChecked={setChecked} deletedNotes={removeCheckedNote} />
      <div className="mt-4 px-4">
        <SearchNoteList
          search={search}
        />
        <div className="items-center mt-6 overflow-y-auto">
          { notes.length > 0 ? notes.map((note) => (
          <NoteList key={note.id} noteId={note.id} title={note.title} createdAt={note.createdAt} isChecked={isChecked}/>))
        :(
          <div className="text-gray-500 mt-12 flex justify-center items-center text-xl tracking-widest font-medium">
             {search?  "Notes not found" : "Add Notes!"}
          </div>
        )

        }
        </div>
      </div>
      <button
        onClick={openform}
        className="fixed right-14 bottom-14 p-3 bg-orange-300  shadow-2xl backdrop-blur-xl hover:bg-orange-400 transition-colors duration-300 text-white rounded-full cursor-pointer"
      >
        <Plus fontSize={32} />
      </button>
    </div>
  );
}

export default Home;
