import React from 'react';

const reviews = [
  {
    source: 'Google',
    author: 'Marie D.',
    text: "Une pizza délicieuse et un service chaleureux ! J'y retournerai sans hésiter."
  },
  {
    source: 'TheFork',
    author: 'Jean P.',
    text: "Excellente adresse pour découvrir des plats italiens authentiques."
  },
  {
    source: 'Google',
    author: 'Lucie G.',
    text: 'Ambiance conviviale et desserts à tomber !'
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Ils nous recommandent !
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="text-sm font-semibold text-gray-800">
                {review.author} - {review.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
