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
    <>
      {/* Link to return to main landing page */}
      <div className="mb-8 flex justify-start">
        <a href="/" className="text-green-700 hover:underline font-semibold text-base flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </a>
      </div>
      <Helmet>
        <html lang="en" />
        <title>Ecogreen Blog | Sustainable Landscaping, Garden Design & Outdoor Living in Kenya</title>
        <meta name="description" content="Explore expert tips, project showcases, and the latest trends in sustainable landscaping, garden design, and outdoor living in Kenya. Stay inspired with Ecogreen's world-class blog." />
        <meta name="keywords" content="Kenya landscaping blog, sustainable landscaping Kenya, garden design Nairobi, outdoor living Kenya, Ecogreen blog, landscaping tips, project showcases, eco-friendly gardens, Nairobi landscaping, gardening Kenya, SustainableLandscapingKenya, EcoFriendlyLandscapingNairobi, GreenGardensKenya, LandscapingContractorsNairobi, OutdoorDesignKenya, DroughtTolerantPlantsKE, RainwaterHarvestingNairobi, PermeablePavingKenya, GardenDesignNairobi, EcogreenLandscapers, NairobiHomes, KenyaGardens, ExcavationForPathways, SitePreparationKenya, TreeCareKenya, ProfessionalTreeCareNairobi, TreePruningNairobi, TreeRemovalKenya, ArboristNairobi, LandscapingKenya, GardenMaintenanceNairobi, HealthyTreesNairobi, PropertyValueKenya, TreeTrimmingServicesKE, StumpGrindingKenya, EcoFriendlyTreeCare, DreamGardenKE, HardscapingKenya, SoftscapingNairobi, EcoFriendlyGardensKE, GardenPlanning, PlantDiseasesKenya, GardenHealthNairobi, EcoFriendlyPestControlKE, ProfessionalGardenCareNairobi, IrrigationSystemsKenya, SoilImprovementNairobi, HealthyPlantsKenya, UrbanLandscapingNairobi, LandscapingProjectKenya, CommercialLandscapingKE, GreenSpacesNairobi, PropertyTransformationKE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#166534" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="canonical" href="https://www.ecogreen.co.ke/blog" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ecogreen Blog | Sustainable Landscaping, Garden Design & Outdoor Living in Kenya" />
        <meta property="og:description" content="Explore expert tips, project showcases, and the latest trends in sustainable landscaping, garden design, and outdoor living in Kenya. Stay inspired with Ecogreen's world-class blog." />
        <meta property="og:url" content="https://www.ecogreen.co.ke/blog" />
        <meta property="og:image" content="https://placehold.co/1200x630/A2CC8A/333333?text=Ecogreen+Blog" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecogreen Blog | Sustainable Landscaping, Garden Design & Outdoor Living in Kenya" />
        <meta name="twitter:description" content="Explore expert tips, project showcases, and the latest trends in sustainable landscaping, garden design, and outdoor living in Kenya. Stay inspired with Ecogreen's world-class blog." />
        <meta name="twitter:image" content="https://placehold.co/1200x630/A2CC8A/333333?text=Ecogreen+Blog" />
        <meta name="robots" content="index, follow" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Ecogreen Blog",
          "description": "Explore expert tips, project showcases, and the latest trends in sustainable landscaping, garden design, and outdoor living in Kenya. Stay inspired with Ecogreen's world-class blog.",
          "url": "https://www.ecogreen.co.ke/blog",
          "blogPost": paginated.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "author": { "@type": "Person", "name": post.author },
            "datePublished": post.date,
            "url": `https://www.ecogreen.co.ke/blog/${post.id}`,
            "description": post.excerpt
          }))
        })}</script>
      </Helmet>
      <main className="container mx-auto px-4 pt-8" itemScope itemType="https://schema.org/Blog">
        <header>
          <h1 className="text-4xl font-extrabold text-green-800 mb-4 text-center" itemProp="headline">Ecogreen Blog</h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto" itemProp="description">Explore expert landscaping tips, project showcases, and inspiration for beautiful, sustainable outdoor spaces in Kenya and beyond.</p>
        </header>
        <nav aria-label="Blog Filters" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-full sm:w-1/2 px-4 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Search blog posts"
          />
          <select
            value={selectedTag}
            onChange={e => { setSelectedTag(e.target.value); setPage(1); }}
            className="w-full sm:w-1/4 px-4 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Filter by topic"
          >
            <option value="">All Topics</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag.replace(/\b\w/g, l => l.toUpperCase())}</option>
            ))}
          </select>
        </nav>
        <section aria-label="Blog Posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {paginated.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <a
                href={`/blog/${post.id}`}
                tabIndex={0}
                aria-label={`Read more about ${post.title}`}
                itemProp="url"
              >
                <img src={post.image} alt={post.title || 'Blog post image'} className="w-full h-48 object-cover" loading="lazy" itemProp="image" />
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-green-800 mb-2" itemProp="headline">
                  <a href={`/blog/${post.id}`} tabIndex={0} aria-label={`Read more about ${post.title}`} itemProp="url">{post.title}</a>
                </h2>
                <div className="text-sm text-gray-500 mb-2">
                  <time dateTime={post.date} itemProp="datePublished">{new Date(post.date).toLocaleDateString()}</time>
                  {" | "}
                  <span itemProp="author">{post.author}</span>
                </div>
                <p className="text-gray-700 text-base mb-4 flex-1" itemProp="description">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs" itemProp="keywords">{tag}</span>
                  ))}
                </div>
                <span className="text-green-600 hover:underline font-medium mt-auto">Read More &rarr;</span>
              </div>
            </article>
          ))}
        </section>
        {/* Pagination */}
        <nav className="flex justify-center items-center gap-2 mt-10" aria-label="Pagination">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 rounded-full bg-green-200 text-green-800 font-bold disabled:opacity-50"
            aria-label="Previous page"
          >
            Previous
          </button>
          <span className="text-green-800 font-semibold">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full bg-green-200 text-green-800 font-bold disabled:opacity-50"
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      </main>
    </>
  );
}
