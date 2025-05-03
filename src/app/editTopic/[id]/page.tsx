import EditTopicForm from "@/app/Component/EditTopicForm";
import { useEffect } from "react";

export default async function EditTopic({ params }:any) {
  const { id } = params;

  return <EditTopicForm id={id}/>
}