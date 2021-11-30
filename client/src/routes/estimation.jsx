import { useParams } from "react-router-dom";
import { getEstimation } from "../data/data";

export default function Estimation() {
  let params = useParams();
  let estimation = getEstimation(parseInt(params.estimationId, 10));

  return (
    <div>
      <h2>Estimation ID: {estimation.id}</h2>
    </div>
  );
}