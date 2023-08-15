import Hr from "@/components/Hr"
import Post from "@/components/Post"
import NewPost from "@/components/NewPost"

export default function Home() {
  return (
    <main className="center min-h-screen w-screen flex-col p-5 ">
        <NewPost/>
        <Hr />
        <Post />
    
    </main>
  )
}
