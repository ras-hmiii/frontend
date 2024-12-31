import React, { useState } from "react";

function Card() {
  const categories = [
    {
      id: 1,
      title: "MAN",
      image: "../src/assets/man.jpg",
      details:
        "Here are more details about the MAN category. This can include specifications, features, or other interesting facts.",
    },
    {
      id: 2,
      title: "WOMAN",
      image: "../src/assets/women.jpg",
      details:
        "Here are more details about the WOMAN category. This can include specifications, features, or other interesting facts.",
    },
    {
      id: 3,
      title: "KIDS",
      image: "../src/assets/kids.jpg",
      details:
        "Here are more details about the KIDS category. This can include specifications, features, or other interesting facts.",
    },
  ];

  const faqs = [
    { id: 1, question: "What is the return policy?", answer: "You can return any item within 30 days of purchase." },
    { id: 2, question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." },
    { id: 3, question: "How can I track my order?", answer: "You can track your order using the tracking link sent to your email after purchase." },
  ];

  const [showDetails, setShowDetails] = useState({});
  const [faqOpen, setFaqOpen] = useState({});

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFaq = (id) => {
    setFaqOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start pt-56 px-2 bg-black bg-opacity-30">
              <h2 className="text-white text-2xl font-bold">{category.title}</h2>
              {showDetails[category.id] && (
                <p className="text-white text-center mt-2 px-4">
                  {category.details}
                </p>
              )}
              <button
                className="mt-3 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200"
                onClick={() => toggleDetails(category.id)}
              >
                {showDetails[category.id] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">FAQs</h2>
        <div>
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-300 pb-4 mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span>{faqOpen[faq.id] ? "-" : "+"}</span>
              </div>
              {faqOpen[faq.id] && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
