import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';

import React from "react";

     

    
export const router = createBrowserRouter ([
    {
        path: "/",
        element: <LandingPage />,
    }

  
]);
  d