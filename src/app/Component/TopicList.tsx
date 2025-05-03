import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to Fetch");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};
export default async function TopicList() {
  const { topics } = await getTopic();

  return (
    <>
      {topics.map((t:any) => (
        <div key={t._id} className="topic">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn 
            id={t._id}
             />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
