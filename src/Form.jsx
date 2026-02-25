import { useState } from "react";

export default function Form() {

    let [fullData, setFullData] = useState({
        fullName: "",
        username: "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;//name attribute ki value "fullname and username".
        let newValue = event.target.value;
        //event → the object created when an event (like click, input, change) happens.
        //target → the HTML element on which the event occurred.
        //value → the current value of that element (like the text inside an input, or the 
        //name -> value of name attribute.

        setFullData( (currData) =>{ //currData means current state varible object 
        
            //currData[fieldName] = newValue -->this we can directly transfer the vlaue directly.. given below..
            //making new key value pair in currData which is temporary object has to be pass in setForm data.
            //                  OR
            return {...currData , [fieldName] : newValue};

            ///note:
              //let obj = { a: 1 };      // only "a" exists initially
              //obj.b = 2;              // dynamically add a new property "b"
              //console.log(obj);      // { a: 1, b: 2 }
        });
    };

    let handleSubmit = (event) =>{
        event.preventDefault();

        //set state object empty
        setFullData({
            fullName: "",
            username:"",
        })
    }


    return( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">full name</label>
            <input placeholder="enter full name" id="fullName" name="fullName" type="text" value={fullData.fullName} onChange={handleInputChange} />
            <br></br>
            <label htmlFor="username">username</label>
            <input placeholder="enter full name" id="username" name="username" type="text" value={fullData.username} onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    );
}