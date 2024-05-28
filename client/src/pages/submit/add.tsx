import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
type Props = {};

function add({}: Props) {
  const handleSubmit = async () => {
    await setDoc(doc(firestore, "problems","longest-substring-without-repeating-characters"), {
        id: "longest-substring-without-repeating-characters",
		title: "12. Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		category: "Sliding Window",
		order: 12,
		videoId: "",
      likes: 0,
      dislikes: 0
    });
  };
  return <div onClick={handleSubmit} className="cursor-pointer bg-gray-900 min-h-screen min-w-screen">add</div>;
}

export default add;
