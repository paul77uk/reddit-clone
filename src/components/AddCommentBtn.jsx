"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddCommentBtn = ({ addComment }) => {
  const router = useRouter();
  const [openComment, setOpenComment] = useState(false);
  const [text, setText] = useState("");
  return (
    <main>
      {!openComment && (
        <button id="add-comment-btn" onClick={() => setOpenComment(true)}>
          <span id="add-icon">+</span> Add a comment
        </button>
      )}
      {openComment && (
        <>
          <textarea
            id="add-comment-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
          <div id="btns-container">
            <button
              id="cancel-comment-btn"
              onClick={() => setOpenComment(false)}
            >
              Cancel
            </button>
            <button
              id="comment-btn"
              onClick={() => {
                addComment(text);
                setOpenComment(false);
                setText("");
                router.refresh();
              }}
            >
              Comment
            </button>
          </div>
        </>
      )}
    </main>
  );
};
export default AddCommentBtn;
