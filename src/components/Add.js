import "./new.css";
// import {db} from "./firebase-config";
import { useState } from "react";
import { db } from "./firebase-config";
import { onValue, ref, set } from "firebase/database";
import uuid from "uuid";

const Add = () => {
  const [deviceId, setDeviceId] = useState();
  const [weight, setweight] = useState();
  const [battery, setbattery] = useState();
  const [status, setstatus] = useState("");
  const [longitude, setlongitude] = useState();
  const [latitude, setlatitude] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = fetch(
      "https://gas-cylinder-87bc1-default-rtdb.asia-southeast1.firebasedatabase.app/gas.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceId,
          weight,
          longitude,
          latitude,
          battery,
          status,
        }),
      }
    );
    // if (res) {
    //   alert("Data added");
    // }
    setDeviceId("");
    setweight("");
    setstatus("");
    setbattery("");
    setlongitude("");
    setlatitude("");
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top-new">
          <h1 className="heading-top">Add New Device</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form className="form-new">
              <div>
                <label>DeviceID</label>
                <input
                  type="text"
                  placeholder="1"
                  className="inputfield"
                  name="deviceId"
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                />
                <label className="labels">Weight</label>
                <input
                  type="text"
                  placeholder="5kg"
                  className="inputfield"
                  name="weight"
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                />
                <label className="labels">Battery</label>
                <input
                  type="text"
                  placeholder="88%"
                  className="inputfield"
                  name="battery"
                  value={battery}
                  onChange={(e) => setbattery(e.target.value)}
                />
                <label className="labels">Status</label>
                <input
                  type="text"
                  placeholder="Good"
                  className="inputfield"
                  name="status"
                  value={status}
                  onChange={(e) => setstatus(e.target.value)}
                />
                <label className="labels">Longitude</label>
                <input
                  type="text"
                  placeholder="3.5577"
                  className="inputfield"
                  name="longitude"
                  value={longitude}
                  onChange={(e) => setlongitude(e.target.value)}
                />
                <label className="labels">Latitude</label>
                <input
                  type="text"
                  placeholder="3.456"
                  className="inputfield"
                  name="latitude"
                  value={latitude}
                  onChange={(e) => setlatitude(e.target.value)}
                />

                <button className="createButton" onClick={handleSubmit}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
