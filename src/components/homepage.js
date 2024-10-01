import RecbyDropdowns from "./recbydropdown";
import Recbyselect from "./recbyselect";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Recbyselect />
      <RecbyDropdowns />
    </div>
  );
}
