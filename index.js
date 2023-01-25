import React from "react";
import ReactDOM from "react-dom/client";
import LocationDisplay from "./LocationDisplay";
import "./locationDisplay.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
  state = { latitude: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("update method");
  }
  componentWillUnmount() {
    console.log("clear method");
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error: My error message is {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          {" "}
          <LocationDisplay latitude={this.state.latitude} />{" "}
        </div>
      );
    } else {
      return <div> waiting for user permission </div>;
    }
  }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
