import React, { useState } from "react";
import { Check, ChevronLeft, FilePlus, PenLine, Plus, PlusCircle, StickyNote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNote } from "../store/noteSlice";


function Form() {
  const dispatch=useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({title, content}))
    navigate("/");
  };
  return (
    <div className="min-h-screen p-4 bg-gradient-to-r  from-orange-200 to-yellow-200 text-gray-800 w-full">
      <div className="w-[100%] flex item-center justify-between pb-4">
      <div className="flex justify-start items-center">
      <button
        onClick={() => navigate(-1)}
        className="p-2 rounded-full cursor-pointer hover:bg-white hover:text-orange-400 transition-colors duration-300"
        aria-label="Back"
      >
        <ChevronLeft fontSize={32} />
      </button>

      <h1 className="px-6 text-xl text-center">Add Note</h1>
      </div>
      <button
          type="submit"
          form="note-form"
          className="cursor-pointer p-2.5 text-gray-800  font-semibold rounded-full  hover:bg-white hover:text-orange-400 transition-colors duration-300"
          aria-label="submit"
        >
          <Check fontSize={24}/>
      </button>
      </div>
      
      <form
        className="flex flex-col w-full max-w-2xl mx-auto p-6 bg-white backdrop-blur-xl h-[400px] shadow-lg rounded-xl space-y-6"
        id="note-form"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start justify-baseline">
          <input
            type="text"
            maxLength={20}
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-gray-600 py-2 px-4 w-full text-left focus:outline-none text-xl font-semibold border-b border-gray-300"
            required={true}
          />
        </div>
        <textarea
          type="text"
          placeholder="Take a note..."
          onChange={(e) => setContent(e.target.value)}
          className="text-wrap text-gray-600 text-lg font-semibold w-[100%] h-[100%] px-4 py-2 border-none border-gray-500 outline-none resize-none"
          
          value={content}
          required={true}
        />
        
      </form>
    </div>
  );
}

export default Form;
