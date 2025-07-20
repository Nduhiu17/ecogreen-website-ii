import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { blogPosts } from "../blogData";

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const POSTS_PER_PAGE = 4;

export default function BlogMainPage() {
  const [page, setPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter(post =>
    (!selectedTag || post.tags.includes(selectedTag)) &&
    (post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Link to return to main landing page */}
      <div className="mb-8 flex justify-start">
        <a href="/" className="text-green-700 hover:underline font-semibold text-base flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </a>
      </div>
      <Helmet>
        <title>Ecogreen Blog | Landscaping Tips, Projects & Inspiration</title>
        <meta name="description" content="Read expert landscaping tips, project showcases, and inspiration from Ecogreen Landscapers & Contractors. Stay updated with the latest in sustainable gardening, plant care, and outdoor design." />
        <meta name="keywords" content="landscaping blog, garden maintenance, plant disease, sustainable landscaping, kenya, nairobi, gardening tips, outdoor design, landscaping projects, eco-friendly gardening, lawn care, man-made waterfalls, walkways, landscaping ideas, landscaping news" />
        <link rel="canonical" href="https://ecogreencontractors.solutions/blog" />
        <meta property="og:title" content="Ecogreen Blog | Landscaping Tips, Projects & Inspiration" />
        <meta property="og:description" content="Expert landscaping tips, project showcases, and inspiration from Ecogreen Landscapers & Contractors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecogreencontractors.solutions/blog" />
        <meta property="og:image" content="https://ecogreencontractors.solutions/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecogreen Blog | Landscaping Tips, Projects & Inspiration" />
        <meta name="twitter:description" content="Expert landscaping tips, project showcases, and inspiration from Ecogreen Landscapers & Contractors." />
        <meta name="twitter:image" content="https://ecogreencontractors.solutions/logo192.png" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4 text-center">Ecogreen Blog</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">Explore expert landscaping tips, project showcases, and inspiration for beautiful, sustainable outdoor spaces in Kenya and beyond.</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-full sm:w-1/2 px-4 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <select
            value={selectedTag}
            onChange={e => { setSelectedTag(e.target.value); setPage(1); }}
            className="w-full sm:w-1/4 px-4 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">All Topics</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag.replace(/\b\w/g, l => l.toUpperCase())}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {paginated.map(post => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-green-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-700 text-base mb-4 flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <span className="text-green-600 hover:underline font-medium mt-auto">Read More &rarr;</span>
              </div>
            </a>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 rounded-full bg-green-200 text-green-800 font-bold disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-green-800 font-semibold">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full bg-green-200 text-green-800 font-bold disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
