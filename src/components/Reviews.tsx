import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Ils nous recommandent !
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <iframe
            title="Avis Google"
            loading="lazy"
            className="w-full h-80 border-0 rounded-2xl shadow-md"
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_EMBED_ID"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            title="Avis TheFork"
            loading="lazy"
            className="w-full h-80 border-0 rounded-2xl shadow-md"
            src="https://widget.thefork.com/YOUR_THEFORK_WIDGET_ID"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
