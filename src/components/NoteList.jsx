import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../store/noteSlice";



function NoteList({ noteId, title, createdAt, isChecked}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const displayNote = (note_id) => {
    navigate(`/note/${note_id}`);
  };
 

  return (
          <div className="flex justify-between gap-4" key={noteId}>
            {isChecked && 
            <input type="checkbox" className="w-4 cursor-pointer" role="check-note"
            
            onChange={() => dispatch(toggleCheck(noteId))}
            />
            //it will dispatch the id into toggleCheck function 
            }

            <div
              className="w-[100%] my-3 pl-6 pr-4 py-4  flex flex-col items-start  bg-gradient-to-r  from-orange-200 to-amber-200 justify-between gap-2 rounded-xl mx-auto  cursor-pointer md:w-[90%] lg:w-[85%]" role="button" onClick={()=>displayNote(noteId)}
            >
              <h2 className="px-4 text-gray-600 font-semibold text-xl">
                {title}
              </h2>
              <p className="px-4 text-gray-500 font-medium">
                {createdAt}
              </p>
            
            </div>
            
          </div>
        )
    }

export default NoteList;
