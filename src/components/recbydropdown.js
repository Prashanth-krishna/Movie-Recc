import { useState } from "react";
import "./recbydropdown.css";

export default function RecbyDropdowns() {
  const [pref1, setPref1] = useState("Action");
  const [pref2, setPref2] = useState("Crime");
  const [pref3, setPref3] = useState("Comedy");
  const [pref4, setPref4] = useState("Sci-Fi");
  const [modalActive, SetmodalActive] = useState(false);

  const handleDropDownChange1 = (e) => {
    setPref1(e.target.value);
    if (e.target.value === "Feel-Good") {
      SetmodalActive(true);
    }
  };
  const handleDropDownChange2 = (e) => {
    if (e.target.value === "Feel-Good") {
      SetmodalActive(true);
    }
    setPref2(e.target.value);
  };
  const handleDropDownChange3 = (e) => {
    if (e.target.value === "Feel-Good") {
      SetmodalActive(true);
    }
    setPref3(e.target.value);
  };
  const handleDropDownChange4 = (e) => {
    if (e.target.value === "Feel-Good") {
      SetmodalActive(true);
    }
    setPref4(e.target.value);
  };
  const handleCloseModal = () => {
    SetmodalActive(false);
    if (pref1 === "Feel-Good") {
      setPref1("Action");
    } else if (pref2 === "Feel-Good") {
      setPref2("Crime");
    } else if (pref1 === "Feel-Good") {
      setPref3("Comedy");
    } else {
      setPref4("Sci-Fi");
    }
  };
  const handleAPICall = () => {
    console.log(pref1, pref2, pref3, pref4);
  };
  return (
    <>
      <div className="recbydropdown-container">
        {modalActive && (
          <div className="error-message-container">
            <div className="error-message-background">
              <button className="recbyselect-desp" onClick={handleAPICall}>
                I'm Desperate
              </button>
              <button
                className="recbyselect-desp-close"
                onClick={handleCloseModal}
              >
                OK
              </button>
            </div>
          </div>
        )}

        <div className="recbydropdown-dropdowns">
          <div className="recbydropdown-preference">
            <label>1st Preference</label>
            <select
              onChange={handleDropDownChange1}
              value={pref1}
              className="recbydropdown-dropdown"
            >
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="Dramedy">Dramedy</option>
              <option value="Feel-Good">Feel-Good</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          <div className="recbydropdown-preference">
            <label>2nd</label>
            <select
              value={pref2}
              onChange={handleDropDownChange2}
              className="recbydropdown-dropdown"
            >
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="Dramedy">Dramedy</option>
              <option value="Feel-Good">Feel-Good</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          <div className="recbydropdown-preference">
            <label>3rd</label>
            <select
              value={pref3}
              onChange={handleDropDownChange3}
              className="recbydropdown-dropdown"
            >
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="Dramedy">Dramedy</option>
              <option value="Feel-Good">Feel-Good</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          <div className="recbydropdown-preference">
            <label>4th</label>
            <select
              value={pref4}
              onChange={handleDropDownChange4}
              className="recbydropdown-dropdown"
            >
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="Dramedy">Dramedy</option>
              <option value="Feel-Good">Feel-Good</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
        </div>

        <button className="recbyselect-get-rec" onClick={handleAPICall}>
          Get Recommendations
        </button>
      </div>
    </>
  );
}
