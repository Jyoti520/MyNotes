import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const savestate = (notes) => {
  try {
    localStorage.setItem("notes", JSON.stringify(notes));
  } catch (error) {
    console.error("error saving data");
  }
};
const initialItems=loadState()
const initialState = {
  items: initialItems,
  searchItems:[...initialItems],
  filter: "All",
  searchQuery: "",
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: {
      reducer(state, action) {
        state.items.push(action.payload);
        savestate(state.items);
      },
      prepare({ title, content }) {
        return {
          payload: {
            id: Date.now().toString(),
            title,
            content,
            checked: false,
            createdAt: new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          },
        };
      },
    },
    //update note through id
    updateNote(state, action) {
      const { id, title, content } = action.payload;
      const note = state.items.find((note) => note.id === id);
      if (note) {
        (note.title = title), (note.content = content);
        savestate(state.items);
      }
    },
    //delete note
    deleteNote(state, action) {
      state.items = state.items.filter((note) => note.id !== action.payload);
      savestate(state.items);
    },

    toggleCheck(state, action) {
      const note = state.items.find((note) => note.id === action.payload);
      if (note) {
        note.checked = !note.checked;
        savestate(state.items);
      }
    },
    deleteCheckedNotes(state, action) {
      state.items = state.items.filter((note) => !note.checked);
      savestate(state.items);
    },

    searchNote(state, action) {
      state.searchQuery = action.payload.trim().toLowerCase();
      if (state.searchQuery === "") {
        state.searchItems=[...state.items];
      } else {
        state.searchItems = state.items.filter((note) =>
          note.title.toLowerCase().includes(state.searchQuery)
        );
      }
    },
  },
});
export const {
  createNote,
  deleteNote,
  toggleCheck,
  deleteCheckedNotes,
  updateNote,
  searchNote,
} = noteSlice.actions;
export default noteSlice.reducer;
