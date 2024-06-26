-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_subredditId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subreddit" DROP CONSTRAINT "Subreddit_userId_fkey";

-- AddForeignKey
ALTER TABLE "Subreddit" ADD CONSTRAINT "Subreddit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
