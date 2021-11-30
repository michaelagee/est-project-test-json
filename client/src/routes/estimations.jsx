import { Outlet } from "react-router-dom";
import EstimationNavigationBar from "../components/navigation/vertical.nav.menu.component";

export default function Estimations() {
    return (
      <div>
        <EstimationNavigationBar />
        <h2>Expenses</h2>
        <Outlet />
      </div>
    );
  }