import { useState } from "react";

function LikeButton({ isLiked }) {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "white" : "gray",
        color: "red",
        padding: "8px 16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {liked ? "❤️ Liked" : "Like"}
    </button>
  );
}

export default LikeButton;
