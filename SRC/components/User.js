import { useState, useEffect } from "react";

const User = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/abdul-70");

    const json = await data.json();
    setUser(json);
    console.log(json);
  };

  if (!user) return <h2>Loading....</h2>;
  return (
    <div style={{ border: "1px solid black", padding: "5px" }}>
      <img
        src="https://avatars.githubusercontent.com/u/214314485?v=4"
        style={{ width: "150px" }}
        alt=""
      />
      <h1> {user.name}</h1>
      <h3>{user.location}</h3>
      <h4>{user.bio}</h4>
    </div>
  );
};

export default User;
