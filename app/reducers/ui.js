import { createSelector, createSlice } from '@reduxjs/toolkit'
import { makeStore } from '../store'

export const uiSlice = createSlice({
  name: 'ui',

  initialState: {
    isModalOpen: false,
    currentFileId: null,
    currentDirNames: [],
    itemType: '',
    navigationStack: [],
    selectedItem: null
  },

  reducers: {
    openModal(state,payload) {
        state.isModalOpen = true

        if(payload.payload.mode ==='edit') {
            const selectedItem = payload.payload.selectedItem;
            state.selectedItem = selectedItem;
            state.itemType = selectedItem.type
        } else {
            state.itemType = payload.payload.itemType
        }
    },

    closeModal(state) {
        state.isModalOpen = false
    },

    setCurrentDirNames(state, action) {
        state.currentDirNames = action.payload;
    },

    setCurrentFileId(state, action) {
        state.currentFileId = action.payload;
    },

    openFolder(state, action) {
        if(state.navigationStack[state.navigationStack.length - 1] === action.payload) {
            state.navigationStack = state.navigationStack.filter(id => id !== action.payload).filter(Boolean)
        }
        state.navigationStack.push(action.payload);
    },
    prepareNamesForCurrentDir(state, action) {
        state.currentDirNames = action.payload.names;
    }
  }
})

const itemsSelector = state => state.items;
const currentDirIdSelector = state => state.ui.navigationStack[state.ui.navigationStack.length - 1];

export const currentItemsSelector = createSelector([itemsSelector,currentDirIdSelector],(state,currentDirId)=> {
  if(currentDirId) {
    return state.items[currentDirId]?.children?.map(id => state.items[id]) || [];
  } else if(Object.values(state.items).length) {
    return Object.values(state.items).filter(item => !item?.parent);
  } else {
    return []
  }
})


// Action creators are generated for each case reducer function
export const { 
    openModal, closeModal ,
    setCurrentDirNames, setCurrentFileId,
    openFolder,prepareNamesForCurrentDir
} = uiSlice.actions

export default uiSlice.reducer