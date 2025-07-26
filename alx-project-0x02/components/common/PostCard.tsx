import { PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
