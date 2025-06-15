import { Post } from "../../types/post";

type PostsSectionProps = {
  posts: Post[];
};

export default function PostsSection({ posts }: PostsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Our Posts</h2>
      <div className="flex gap-6 flex-wrap">
        {posts.map((post) => (
          <article key={post.id} className="w-80 rounded-lg border p-4 bg-white shadow-sm dark:bg-neutral-900">
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">{post.text}</p>
            <div className="text-xs text-gray-400">Author ID: {post.author}</div>
          </article>
        ))}
      </div>
    </section>
  );
} 