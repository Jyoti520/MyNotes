import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../store/noteSlice";

function EditNote() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const note= useSelector(state=> state.notes.items.find((note)=>note.id===id))
  useEffect(() => {
   if(note){
    setTitle(note.title)
    setContent(note.content)
   }
  }, [note])
  
  const navigate = useNavigate();

 // console.log("edit note id:" ,id);

 
 const cancelEdit=()=>{
  if(window.confirm("Are you sure you want to cancel the changes which you done?")){
    navigate("/")
  }
 }
  const handleSubmit = () => {
     if(!title || !content){
      alert("Please enter all the fields!")
     }
     else{
    dispatch(updateNote({id:note.id,  title, content }));
    navigate(`/`);}
  };

  if(!note){
    return <div className="text-gray-500 text-xl min-h-screen flex justify-center items-center tracking-wider">Notes not Found!</div>
  }

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen  overflow-auto">
      {/* HEADING */}
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-amber-50 px-2 py-2">
   
      <button onClick={cancelEdit} className="py-2 px-4 rounded-full text-lg cursor-pointer hover:text-orange-500 transition-colors duration-300">
          Cancel
        </button>
        <h1 className="text-orange-500 text-xl">Edit view</h1>

        <button
              className="text-lg px-4 rounded-full text-gray-600 cursor-pointer hover:text-orange-500 transition-colors duration-300"
              aria-label="save-note"
              role="button"
              onClick={handleSubmit}>
              Done
            </button>
      </div>

      <div
        className="flex flex-col flex-grow justify-between p-4 gap-6"
        
      >
        <div className="w-full flex flex-col justify-between px-6 pt-4">
        <input
            className="px-4 text-xl text-gray-600 font-semibold outline-none  text-left" maxLength={20}
            required={true}
            value={title}
            placeholder="Title.."
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full h-[270px] outline-none resize-none mt-4 px-4 py-4 text-gray-600 text-lg border-t border-gray-300"
            value={content}
            required={true}
            placeholder="update text here..."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* DATE and ICONS */}
        <div className="text-xl flex items-center justify-end  text-gray-600  tracking-widest py-2 px-6 border-t border-gray-300">
            <p className="text-lg font-semibold ">{note.createdAt}</p>
          <div className="flex justify-around gap-4">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
