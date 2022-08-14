import React, { useState, useEffect } from "react"
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import InputOption from "./InputOption"
import ImageIcon from "@mui/icons-material/Image"
import YouTubeIcon from "@mui/icons-material/YouTube"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"
import Post from "./Post"
import { db } from "./Firebase"
// import firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"
import FlipMove from "react-flip-move"
////
const Feed = () => {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

  console.log(posts)

  const sendPost = (e) => {
    e.preventDefault()
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#e7a33e" />
          <InputOption
            Icon={EventNoteIcon}
            title="Audio event"
            color="#C0CBCD"
          />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#fb4f14"
          />
        </div>
      </div>
      {/* posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}
export default Feed
