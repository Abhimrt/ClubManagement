"use client"
import Post from "@/components/Post";
import NewPost from "@/components/NewPost";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user,clubData } = useAuth();
  console.log(process.env.key)
  return (
    <main className="center min-h-screen w-screen flex-col p-5 ">
      {user && clubData && <NewPost image = {clubData.photoURL} uid = {user.uid} />}
      <Post />
    </main>
  );
}
