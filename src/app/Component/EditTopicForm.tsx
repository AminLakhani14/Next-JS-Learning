"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditTopicForm({ id }: any) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getTopicById = async () => {
      try {
        const cleanId = id.split("?")[0]; // removes query string if present
        const res = await axios.get(`http://localhost:3000/api/topics/${cleanId}`);
        setNewTitle(res.data.topics.title);
        setNewDescription(res.data.topics.description);
      } catch (error: any) {
        console.error("Error fetching topic:", error.message);
      }
    };

    getTopicById();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          className="input"
          placeholder="Edit Topic..."
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          className="input"
          placeholder="Edit Topic Description..."
        />
        <button type="submit" className="btn">
          Update Button
        </button>
      </form>
    </>
  );
}
