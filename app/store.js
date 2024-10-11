"use client";

import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './reducers/items'
import uiReducer from './reducers/ui'

export const makeStore = () => {
  return configureStore({
    reducer: {
        items:itemsReducer,
        ui: uiReducer,
    },
    devTools: true
  })
}