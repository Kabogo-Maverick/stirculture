import React, { useState } from 'react';
import '../styles/EventGallery.css';

const events = [
  {
    id: 1,
    title: 'Midnight Mojito Madness',
    category: 'Tastings',
    image: '/images/event1.jpeg',
    description: 'A minty night filled with mojito flights.'
  },
  {
    id: 2,
    title: 'Glow-In-The-Dark Gala',
    category: 'Themed',
    image: '/images/event2.jpeg',
    description: 'Neon cocktails and high-energy vibes.'
  },
  {
    id: 3,
    title: 'Sunset Sangria Social',
    category: 'Parties',
    image: '/images/event3.jpeg',
    description: 'Outdoor sangria event at golden hour.'
  },
  {
    id: 4,
    title: 'Craft Cocktail Course',
    category: 'Tastings',
    image: '/images/event4.jpeg',
    description: 'Learn mixology from the masters.'
  },
];

const categories = ['All', 'Themed', 'Tastings', 'Parties'];

const EventGallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredEvents =
    filter === 'All' ? events : events.filter((event) => event.category === filter);

  return (
    <div className="event-gallery">
      <h2>Event Gallery</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="events-container">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="tag">{event.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
