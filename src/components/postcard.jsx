import LikeButton from "./likebutton";

function PostCard({ profileImage, username, content, isLiked }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "16px",
        width: "300px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h3 style={{ margin: 0 }}>{username}</h3>
      </div>
      <p>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
}

export default PostCard;
