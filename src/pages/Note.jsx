import { ChevronLeft, NotebookPen, TrashIcon } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote } from "../store/noteSlice";
import { useDispatch, useSelector } from "react-redux";

function Note() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const note = useSelector((state) =>
    state.notes.items.find((note) => note.id === id)
  );

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatch(deleteNote(note.id));
      navigate("/");
    }
  };


  if (!note) {
    return (
      <div className="w-[100%] text-gray-600 text-2xl min-h-screen flex justify-center items-center overflow-hidden">
        Notes Not Found!
      </div>
    );
  }
  return (
    <div className="flex flex-col mx-auto w-full min-h-screen">
      {/* HEADING */}
      <div className="w-full flex items-center justify-between px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full cursor-pointer text-orange-400 hover:text-white hover:bg-gradient-to-r from-orange-300 to-amber-300 transition-colors duration-300"
          >
            <ChevronLeft fontSize={28} />
          </button>
          <h1 className=" text-orange-500 text-2xl px-2">Note</h1>
        </div>
        <button
          className="p-2 rounded-full cursor-pointer text-orange-400 hover:text-white hover:bg-gradient-to-r from-orange-300 to-amber-300 transition-colors duration-300"
          aria-label="edit note"
          role="button"
          onClick={() => navigate(`/update/${note.id}`)}
        >
          <NotebookPen fontSize={24} />
        </button>
      </div>

      <div className="w-[100%] bg-white flex flex-col flex-grow justify-between pt-4 gap-6 px-4 text-wrap">
        <div className="w-[100%] flex flex-col items-between justify-between px-4 py-2  gap-4 text-wrap">
          <h2 className="text-2xl font-semibold">{note.title}</h2>
          <p className=" text-gray-600 text-md break-words">{note.content}</p>
        </div>

        {/* DATE and ICONS */}
        <div className="flex items-center justify-between  border-t border-gray-300 tracking-wide py-3 px-6">
        <button
            className="p-2 rounded-full flex items-center justify-center bg-none text-orange-400 hover:bg-gradient-to-r from-orange-300 to-amber-300 hover:text-white  transition-colors duration-300 cursor-pointer"
            aria-label="delete note"
            role="button"
            onClick={handleDelete}
          >
            <TrashIcon fontSize={24} className="text-lg" />
          </button>
          <p className="text-gray-600 text-xl font-semibold">
            {note.createdAt}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Note;


