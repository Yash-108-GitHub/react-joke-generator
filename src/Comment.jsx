import { useState } from "react";
import  "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comments(){
    let [comments, setComments] = useState([{
        username : "@abc",
        remarks: "great job",
        rating: 4
    }]);
                      //comment -> element of function calling. eg hello world
    let addNewComment = (comment) =>{
        setComments((currComments) => [...currComments, comment]); //currComments ->current state object(variable)
    };

    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) =>(
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating = {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
                
            </div>

            <hr></hr>

            <CommentsForm addNewComment ={addNewComment}/>
        </>
    );
}