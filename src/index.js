import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estimations from "./routes/estimations";
import Invoices from "./routes/invoices";
import NewEstimation from './routes/addNewEstimation';
import Estimation from './routes/estimation';
import { RecoilRoot } from 'recoil';
import { GlobalContext } from './context/global-state';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/estimations" element={<Estimations />}>
            <Route path=":estimationId" element={<Estimation />} />
          </Route>
          <Route exact path="/invoices" element={<Invoices />} />
          <Route exact path="/newestimation" element={<NewEstimation />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
