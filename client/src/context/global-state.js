import React, { createContext} from 'react';
import { estimationList } from '../data/data';

const initialState = {
    env: "local",
    totalCost: 1,
    estimations: [
      ...estimationList
    ],
    searchField: "",
    searchButtonTitle: "Search",
    filteredEstimation: []
  };

  export const GlobalContext = createContext(initialState);