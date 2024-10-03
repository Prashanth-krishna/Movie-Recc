import RecbyDropdowns from "./recbydropdown";
import Recbyselect from "./recbyselect";
import "./homepage.css";
import RecBySearch from "./recbysearch";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Recbyselect />
      <div className="or">OR</div>
      <RecbyDropdowns />
      <div className="or">OR</div>
      <RecBySearch />
    </div>
  );
}
