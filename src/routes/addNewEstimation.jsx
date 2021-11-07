import BreadCrumb from "../components/breadcrumb/breadcrumb.component";
import EstimationNavigationBar from "../components/navigation/vertical.nav.menu.component";

export default function NewEstimation() {
  return (
    <div>
      <EstimationNavigationBar />
      <BreadCrumb currentPage="Add New Estimation" />
      <main style={{ padding: "1rem 0" }}>
        <h2>Add New Estimation</h2>
      </main>
    </div>
  );
}