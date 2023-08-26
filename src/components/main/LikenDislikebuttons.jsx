import React from "react";

function LikenDislikeButtons({ likes, dislikes, onLike, onDislike }) {
  const totalVotes = likes + dislikes;
  const likePercentage = (likes / totalVotes) * 100 || 0;
  const dislikePercentage = (dislikes / totalVotes) * 100 || 0;

  return (
    <div>
      <button onClick={onLike}>Like</button>
      <button onClick={onDislike}>Dislike</button>
      <p>Likes: {likePercentage.toFixed(2)}%</p>
      <p>Dislikes: {dislikePercentage.toFixed(2)}%</p>
    </div>
  );
}

export default LikenDislikeButtons;
