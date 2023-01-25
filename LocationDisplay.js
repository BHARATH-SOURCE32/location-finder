import React from "react";
import northpic from "./images/north.jpg";
import southpic from "./images/south.jpg";

const locationConfig = {
  North: {
    Text: "hi you are currently in north region",
    picture: northpic,
  },
  South: {
    Text: "hi you are currently in south region",
    picture: southpic,
  },
};

const LocationDisplay = ({ latitude }) => {
  var region = latitude > 0 ? "North" : "South";
  const { Text, picture } = locationConfig[region];

  return (
    <div className={region}>
      <div className="ui raised text cotainer segment">
        <div className="image">
          <img src={picture} alt="LoctionDisplay" />
        </div>
        <div className="ui teal bottom attached label">
          <h1> {Text}</h1>
        </div>
      </div>
    </div>
  );
};

export default LocationDisplay;
