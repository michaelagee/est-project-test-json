import { createContext } from 'react';

const initialState = {
    totalCost: 0,
    getTotalCost: () => {},
    updateTotalCost: () => {}
  };

  export const CurrentEstimationTotalCost = createContext(initialState);