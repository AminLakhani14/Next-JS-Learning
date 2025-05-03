"use client";

import { useRouter } from "next/navigation"
import { useState } from "react";

function addData(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const router = useRouter();
  
    const handleSubmit = async () => {
  
      if (!title || !description) {
        alert("Title and description are required.");
        return;
      }
  
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });
  
        if (res.ok) {
          router.push("/");
        } else {
          throw new Error("Failed to create a topic");
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (
        <>
            <form>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input" placeholder="Add Topic... "/>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="input" placeholder="Add Topic Description... "/>

                <button onClick={handleSubmit} className="btn">
                  Add Button 
                </button>
            </form>
        </>
    )
}
export default addData