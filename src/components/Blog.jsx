import React, { useState } from "react";
import "../styles/Blog.css";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleReadMore = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <div className="blog-wrapper">
      <h2 className="blog-heading">Inside Cocktail Clubhouse</h2>

      {/* Post 1 */}
      <article className="blog-card" aria-expanded={expandedPost === "post1"}>
        <div className="card-header">
          <img
            src="/images/cock1.jpeg"
            alt="Craft Cocktail"
            className="blog-thumb"
            loading="lazy"
          />
        </div>
        <div className="card-body">
          <h3 className="blog-title">The Rise of Craft Cocktails</h3>
          <p className="blog-meta">By Cocktail Clubhouse • May 2025</p>
          <p className="blog-preview">
            Discover how artisanal ingredients and bold flavors are changing nightlife...
          </p>

          {expandedPost === "post1" && (
            <div className="blog-full">
              <p>
                Craft cocktails blend fresh herbs, exotic spices, and homemade syrups.
                Our bartenders balance flavors, textures, and aromas to create unforgettable drinks.
              </p>
              <img
                src="/images/cock2.jpeg"
                alt="Detailed Craft"
                className="blog-full-img"
                loading="lazy"
              />
            </div>
          )}

          <button
            className="read-btn"
            onClick={() => toggleReadMore("post1")}
          >
            {expandedPost === "post1" ? "Show Less" : "Read More"}
          </button>
        </div>
      </article>

      {/* Post 2 */}
      <article className="blog-card" aria-expanded={expandedPost === "post2"}>
        <div className="card-header">
          <img
            src="/images/cock3.jpeg"
            alt="Cocktail of the Week"
            className="blog-thumb"
            loading="lazy"
          />
        </div>
        <div className="card-body">
          <h3 className="blog-title">Cocktail of the Week</h3>
          <p className="blog-meta">By Stir Culture • May 2025</p>
          <p className="blog-preview">
            A rooftop takeover with music and signature blends. Here’s what you missed…
          </p>

          {expandedPost === "post2" && (
            <div className="blog-full">
              <p>
                “Sunset Breeze” is a refreshing mix of gin, elderflower, and grapefruit juice,
                topped with mint. A perfect citrus-floral blend for warm nights.
              </p>
              <img
                src="/images/cock4.jpeg"
                alt="Sunset Breeze"
                className="blog-full-img"
                loading="lazy"
              />
            </div>
          )}

          <button
            className="read-btn"
            onClick={() => toggleReadMore("post2")}
          >
            {expandedPost === "post2" ? "Show Less" : "Read More"}
          </button>
        </div>
      </article>
    </div>
  );
};

export default Blog;
