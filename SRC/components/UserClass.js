import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        // this.state({
        //     // name: "dummy", location : "default"
        // })
    }

    // componentDidMount(){

    // }

    render(){
        const {name, location, description}=this.props;
        return(
             <div style={{ border: "1px solid black", padding:"5px"}}>
            <h1>{name}</h1>
            <h3>{location}</h3>
            <h4>{description}</h4>
        </div>
        )
    }
}

export default UserClass;