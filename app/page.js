"use client"
import Hr from "@/components/Hr";
import Post from "@/components/Post";
import NewPost from "@/components/NewPost";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const {user} = useAuth();
  return (
      <main className="center min-h-screen w-screen flex-col p-5 ">
        {user && <NewPost/>}
        <Hr />
        <Post />
      </main>
  );
}
