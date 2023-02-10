import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "Duy Anh",
    age: 21,
    arrJobs: [
      {
        id: "nguyenduyanh",
        title: "Dev",
        salary: "5$",
      },
      {
        id: "nguyenduyanh2",
        title: "Dev2",
        salary: "52$",
      },
      {
        id: "nguyenduyanh4",
        title: "Dev4",
        salary: "54$",
      },
    ],
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
      age: this.state.name.length,
    });
  };
  handleClickButton = () => {
    alert("hello nè ");
  };
  render() {
    let { name, age, arrJobs } = this.props;
    return (
      <>
        <div>
          chào em: {name}, tuoi: {age}
        </div>
        <div>Mô tả: {arrJobs}</div>
      </>
    );
  }
}
export default MyComponents;
