'use client';
import ReportCard from '@/components/common/ReportCard';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <>
      <Header />

      <main className="p-6 space-y-4">
        <ReportCard />

        {/* Add Post Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>

        {/* Post Modal */}
        {isModalOpen && (
          <PostModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}

        {/* Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
}
