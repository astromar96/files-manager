import { createSelector, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const itemsSlice = createSlice({
  name: 'items',

  initialState: {
    selected:[],
    items:{},
    currentDir: null,
  },
  reducers: {
    addItem: (state, action) => {
        const currentDirId = action.payload.currentDirId;
        const parent = currentDirId ? state.items[currentDirId] : null;
        const item = {
            name: action.payload.name,
            type: action.payload.type,
            parent: parent,
            id: uuidv4(),
        };

        state.items[item.id] = item;
        
        if(parent) {
          if(!state.items[parent.id]?.children) {
            state.items[parent.id].children = [];
          }
          state.items[parent.id].children.push(item.id);
        }
    },

    editItem(state, action) {
        const { id, name } = action.payload;
        state.items[id].name = name;
    },
    toggleSelect: (state, action) => {
        const itemId = action.payload;

        if(state.selected.includes(itemId)) {
            state.selected = state.selected.filter(id => id !== itemId);
        } else {
          state.selected.push(itemId);
        }
       
    },
    deleteSelectedItems: (state) => {
        state.selected.forEach(id => {
            const item = state.items[id];
            if(item.parent) {
                state.items[item.parent.id].children = state.items[item.parent.id].children.filter(childId => childId !== id);
            }

            delete state.items[id];
        });
        state.selected = [];
    },
    unselect(state) {
        state.selected = [];
    }
  }
})


// Action creators are generated for each case reducer function
export const { addItem, toggleSelect, deleteSelectedItems, unselect, editItem } = itemsSlice.actions

export default itemsSlice.reducer