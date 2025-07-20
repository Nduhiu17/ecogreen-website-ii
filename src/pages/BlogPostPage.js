import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogPosts } from "../blogData";

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-green-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Helmet>
        <title>{post.title} | Ecogreen Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={`https://ecogreencontractors.solutions/blog/${post.id}`} />
        <meta property="og:title" content={`${post.title} | Ecogreen Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ecogreencontractors.solutions/blog/${post.id}`} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Ecogreen Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <div className="container mx-auto px-4 pt-8 max-w-3xl">
        <Link to="/blog" className="text-green-600 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
        <h1 className="text-4xl font-extrabold text-green-800 mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
          <span className="text-sm text-green-700 font-semibold">By {post.author}</span>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <div className="prose prose-green max-w-none mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{tag}</span>
          ))}
        </div>
        <Link to="/blog" className="text-green-600 hover:underline">&larr; Back to Blog</Link>
      </div>
    </div>
  );
}
