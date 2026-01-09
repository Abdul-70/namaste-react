import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abdul-70");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div style={{ border: "1px solid black", padding: "5px" }}>
        <img src={userInfo.avatar_url} style={{ width: "150px" }} alt="" />
        <h1>{userInfo.name}</h1>
        <h3>{userInfo.location}</h3>
        <h4>{userInfo.bio}</h4>
      </div>
    );
  }
}

export default UserClass;
