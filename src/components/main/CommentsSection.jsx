import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

function CommentsSection({ videoId }) {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    const newComment = { ...comment, videoId };
    setComments([...comments, newComment]);
    // Here you can also send the comment data to your backend API for storage
  };

  return (
    <div>
      <CommentForm onAddComment={handleAddComment} />
      <CommentsList comments={comments} />
    </div>
  );
}

export default CommentsSection;
