import React from "react";
import MyComponents from "./MyComponents_1";

class MyComponentss extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleFirstLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    console.log("==>> call render: ", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleFirstLastName(event)}
          />
          <br />
          <input
            type="button"
            value="submit"
            onClick={() => this.handleSubmit()}
          />
        </form>
        <div>=============</div>
        <MyComponents
          name={this.state.firstName}
          age={this.state.firstName.length}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}
export default MyComponentss;
