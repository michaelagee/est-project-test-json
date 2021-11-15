import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {},
    env: "local",
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
    filteredEstimation: [],
    currentEstimationHours: 0,
    totalCost: 0,
  });