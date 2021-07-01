import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
    };
  }

  componentDidMount() {
    const url =
      "https://asia-south1-edupal-317605.cloudfunctions.net/app/student/all";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          student: data,
        });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.student.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
