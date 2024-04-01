import { prisma } from "@/lib/prisma.js";
import img from "@/../public/reddit-post.svg";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { fetchUser } from "@/lib/fetchUser.js";
import AddCommentBtn from "@/components/AddCommentBtn.jsx";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { PiArrowFatUp } from "react-icons/pi";
import { PiArrowFatDown } from "react-icons/pi";

const page = async ({ params }) => {
  const user = await fetchUser();
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { postId } = params;
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { user: true, subreddit: true },
  });

  const comments = await prisma.comment.findMany({
    where: { postId },
    include: { user: true },
  });

  const addComment = async (message) => {
    "use server";
    await prisma.comment.create({
      data: {
        message,
        postId: post.id,
        userId: user.id,
      },
    });
  };

  return (
    <main>
      <div id="community-user">
        <img src={img.src} width={"30px"} />
        <div>
          <div id="community-name-timeago">
            <div id="community-name">{`r/${post.subreddit.name}`}</div>
            <div id="time-ago">{timeAgo.format(post.createdAt)}</div>
          </div>
          <div id="user-name">{post.user.username}</div>
        </div>
      </div>

      <div id="post-detail-page-title">{post.title}</div>
      <div id="post-message">{post.message}</div>

      <AddCommentBtn addComment={addComment} />

      <div id="comments">
        {comments.map((comment) => (
          <div key={comment.id} id="comment">
            <div id="comment-user-timeago">
              <div id="comment-user">{comment.user.username}</div>
              <div id="comment-timeago">
                {`${timeAgo.format(comment.createdAt)}`}
              </div>
            </div>
            <div id="comment-container">
              <div id="comment-message">{comment.message}</div>
              <div id="votes-reply">
                <div id="votes">
                  <PiArrowFatUp size={20} />
                  {/* {comment.votes} */}
                  138
                  <PiArrowFatDown size={20} />
                </div>
                <div id="reply">
                  <HiOutlineChatBubbleLeft size={20} />
                  Reply
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default page;
