import Hr from "@/components/Hr"
import Post from "@/components/Post"

export default function Home() {
  return (
    <main className="center min-h-screen w-screen flex-col p-5">
      <p>{"je"}{process.env.apikey}</p>
        <Hr />
        <Post />
    
    </main>
  )
}
