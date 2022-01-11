import React, { createContext} from 'react';
import { estimationList } from '../data/data';

export const GlobalContext = React.createContext({
    env: "local",
    totalCost: 1,
    estimations: [],
    searchField: "",
    searchButtonTitle: "Search",
    filteredEstimation: [],
    updateGlobalEstimations: () => {}
  });