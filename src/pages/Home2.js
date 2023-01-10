import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      menu: [],
      isLoading: false,
    };
  }

  render() {
    console.log(this.state.keyword);
    this.setState({ keyword: "test" });

    return <>{this.sayHello()}</>;
  }
}

// typecript

export default Home;
