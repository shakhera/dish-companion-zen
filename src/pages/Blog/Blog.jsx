import React, { useState } from "react";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogData = [
    {
      question: "What are some popular cooking techniques?",
      answer:
        "Popular cooking techniques include grilling, roasting, sautéing, baking, steaming, boiling, frying, and braising.",
    },
    {
      question: "What are some common kitchen utensils and their uses?",
      answer:
        "Common kitchen utensils include knives (for chopping, slicing, and dicing), cutting boards, pots and pans, spatulas, wooden spoons, mixing bowls, measuring cups and spoons, and colanders.",
    },
    {
      question: "How can I make my own pizza dough from scratch?",
      answer:
        "To make pizza dough from scratch, you'll need flour, yeast, water, salt, and optionally, olive oil and sugar. Combine the ingredients, knead the dough until it's smooth and elastic, then let it rise until doubled in size. Roll out the dough, add your favorite toppings, and bake in a preheated oven until the crust is golden brown.",
    },
    {
      question: "What are some healthy alternatives to common ingredients?",
      answer:
        "Some healthy alternatives include using whole grain flour instead of white flour, Greek yogurt instead of sour cream, avocado or hummus instead of mayonnaise, and olive oil instead of butter.",
    },
    {
      question: "How can I tell if meat is cooked properly?",
      answer:
        "You can use a meat thermometer to check the internal temperature of meat. For example, chicken should be cooked to an internal temperature of 165°F (75°C), while beef steaks can be cooked to varying degrees of doneness depending on preference (e.g., rare, medium rare, medium, well done).",
    },
    {
      question: "What are some tips for reducing food waste in the kitchen?",
      answer:
        "Some tips include planning meals in advance, storing leftovers properly, using vegetable scraps to make homemade broth or composting, and freezing perishable items before they spoil.",
    },
    {
      question: "How can I make a basic tomato sauce from scratch?",
      answer:
        "To make a basic tomato sauce, you'll need tomatoes (fresh or canned), onions, garlic, olive oil, salt, pepper, and optionally, herbs like basil or oregano. Sauté the onions and garlic in olive oil, add the tomatoes and seasonings, then simmer until the sauce thickens.",
    },
    {
      question:
        "What are some traditional dishes from different cuisines around the world?",
      answer:
        "Traditional dishes include Italian pasta dishes like spaghetti carbonara and lasagna, Mexican dishes like tacos and enchiladas, Indian dishes like chicken tikka masala and palak paneer, Chinese dishes like fried rice and kung pao chicken, and French dishes like coq au vin and beef bourguignon.",
    },
  ];

  const [expanded, setExpanded] = useState([]);

  const handleReadMore = (index) => {
    // If the index is already expanded, remove it from the list
    if (expanded.includes(index)) {
      setExpanded(prevIndexes => prevIndexes.filter(i => i !== index));
    } else {
      // If the index is not expanded, add it to the list
      setExpanded(prevIndexes => [...prevIndexes, index]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 mx-auto mt-4">
        {blogData.map((post, index) => (
          <div key={index} className="shadow-xl rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 ">{post.question}</h2>

              {/* Render the full answer if expanded, otherwise show only part of it */}
            <p className="text-gray-700">{expanded.includes(index) ? post.answer : `${post.answer.slice(0, 100)}...`}</p>
            {/* Show "Read More" button */}
              <button
                className="text-blue-500 mt-2 inline-block hover:underline"
                onClick={() => handleReadMore(index)}
              >
                {expanded.includes(index) ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Blogs></Blogs>
    </div>
  );
};

export default Blog;
