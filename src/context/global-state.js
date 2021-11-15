import React, { createContext} from 'react';

const initialState = {
    env: "local",
    totalCost: 1,
    estimations: [
      {
        name: "No Project",
        id: 0,
        views: ["landing"],
        general_estimate_features: ["geolocationn"],
        platform_specific_features: ["camera"],
        capabilities: ["biometrics"],
        media: ["Image Optimzation"],
        random: [
          {
            ios: {
              enabled: true,
              hours: 20,
            },
          },
        ],
      },
    ],
    searchField: "",
    searchButtonTitle: "Search",
    filteredEstimation: []
  };

  export const GlobalContext = createContext(initialState);