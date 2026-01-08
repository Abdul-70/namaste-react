import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h3>This is about page..</h3>

      <User
      
        name={"Abdurrahim (Function)"}
        location={"Delhi, India"}
        bio={
          "My name is Abdurrahim  and i'm a softwere developer. I am from Delhi."
        }
      />
      <UserClass name={"Mohammad Umar (Class)"}
        location={"New York, USA"}
        description={
          "My name is Mohammad Umar  and i'm a React developer. I am from USA."
        }/>
    </div>
  );
};

export default About;
