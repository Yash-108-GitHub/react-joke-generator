import { useState } from "react";
import React from "react";
import {useFormik} from 'formik';

const validate = values =>{
    const errors = {};
    if(!values.username){
        errors.username = 'Username cannot be empty';
    }
    return errors;
};

export default function CommentsForm({addNewComment}) {
//     // let [formData , setFormData] = useState({
//     //     username:"",
//     //     remarks:"",
//     //     rating: 5
//     // }); 

    const formik = useFormik({
        initialValues : {
            username: "",
            remarks: "",
            rating: 5,
        },
        validate,
        onSubmit: (values) =>{
            alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) =>{
    //     setFormData((currData) =>{
    //         return {...currData , [event.target.name] : event.target.value };
    //     });
    // };

    // let handleSubmit = (event) =>{
    //     console.log(formData);

    //     addNewComment(formData);
    //     //formData holds the new comment details
    //     // We need to add that comment into the comments list
    //     // Your addNewComment function is designed to take one comment (like "Nice post!" or an object with username/remarks/rating).
    //     // Then it updates the state by appending it to the existing comments array.
    //     // So formData is passed as the comment parameter
    //     // In addNewComment(comment), the comment parameter will now hold whatever is inside formData.
    //     // Then React updates the state like:

    //     //Full flow:
    //         // User types into the form → updates formData state.
    //         // User clicks Submit → handleSubmit runs.
    //         // handleSubmit passes formData into addNewComment.
    //         // addNewComment adds that formData object into the comments list.
        
    //     event.preventDefault();

    //     setFormData({
    //         username :"",
    //         remarks:"",
    //         rating:"5"
    //     });
    // };

    return(
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" placeholder="username" 
                type="text" value={formik.values.username} 
                onChange={formik.handleChange} name="username"/>
                {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                <br></br><br></br>
                
                <label htmlFor="remarks">remarks</label>
                <textarea id="remarks" value={formik.values.remarks} 
                placeholder="give reamrks" onChange={formik.handleChange} 
                name="remarks"></textarea>
                <br></br><br></br>
                
                <label htmlFor="rating">rating</label>
                <input id="rating" value={formik.values.rating} 
                placeholder="rating" type="number" min={1} max={5} 
                onChange={formik.handleChange} name="rating"/>
                <br></br><br></br>
                
                <button type="submit">Add comment</button>
            </form>
        </div>
    );
}