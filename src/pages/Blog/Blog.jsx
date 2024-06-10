import React, { useState } from "react";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  const foodBlog = [
    {
      img: "https://i.postimg.cc/DytS1n60/1.jpg",
      teaser: "Tasty Food For You",
      description:
        "Dive into the tangy and spicy world of traditional Korean Kimchi. This fermented cabbage side dish is packed with flavor and probiotics, making it a delicious and healthy addition to any meal.",
    },
    {
      img: "https://i.postimg.cc/gJkjGJzS/2.jpg",
      teaser: "A Symphony of Flavors",
      description:
        "Experience the vibrant and delicious bowl of Bibimbap. This mixed rice dish is topped with an array of colorful vegetables, savory beef, and a fried egg, all brought together with a spicy gochujang sauce.",
    },
    {
      img: "https://i.postimg.cc/0yRNbZ5J/3.jpg",
      teaser: "Savor the Savory",
      description:
        "Indulge in the rich, savory taste of Bulgogi. This Korean barbecue dish features tender beef marinated in a sweet and savory sauce, perfect when wrapped in lettuce and paired with rice.",
    },
    {
      img: "https://i.postimg.cc/3RR8Pc1z/4.jpg",
      teaser: "Noodles to Delight",
      description:
        "Japchae is a Korean noodle dish made from sweet potato noodles, stir-fried with a colorful mix of vegetables and seasoned beef. It's a perfect balance of sweet and savory flavors.",
    },
    {
      img: "https://i.postimg.cc/59DzSBNf/5.jpg",
      teaser: "A Hearty Stew",
      description:
        "Kimchi Jjigae is a spicy Korean stew made with aged kimchi and pork. This hearty dish is perfect for a comforting meal, offering a rich and spicy taste that warms the soul.",
    },
    {
      img: "https://i.postimg.cc/xdsJJH4D/6.jpg",
      teaser: "Street Food Favorite",
      description:
        "Tteokbokki is a popular Korean street food made from chewy rice cakes and fish cakes, all simmered in a spicy gochujang sauce. It's a fiery, delicious snack that you can't miss.",
    },
    {
      img: "https://i.postimg.cc/DytS1n60/1.jpg",
      teaser: "Grill Perfection",
      description:
        "Samgyeopsal is a Korean barbecue favorite featuring thick slices of pork belly grilled to perfection. Wrap the grilled pork in lettuce with a bit of kimchi for a delightful bite.",
    },
    {
      img: "https://i.postimg.cc/gJkjGJzS/2.jpg",
      teaser: "Spicy Chicken Delight",
      description:
        "Dakgalbi is a spicy Korean chicken dish stir-fried with vegetables and rice cakes. This flavorful dish is known for its rich, spicy taste and is a favorite among spicy food lovers.",
    },
    
    
  ];

  const [expanded, setExpanded] = useState([]);

  const handleReadMore = (index) => {
    if (expanded.includes(index)) {
      setExpanded((prevIndexes) => prevIndexes.filter((i) => i !== index));
    } else {
      setExpanded((prevIndexes) => [...prevIndexes, index]);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-end">
        <div className="w-full  bg-cyan-600 rounded-s-full ">
          <main className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodBlog.map((food, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div
                    className={`p-6 text-center ${
                      index % 2 === 0 ? "bg-blue-200" : "bg-green-200"
                    }`}
                  >
                    <img
                      src={food.img}
                      alt={food.teaser}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                    <h2 className="text-xl font-bold text-gray-800">
                      {food.teaser}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {expanded.includes(index)
                        ? food.description
                        : `${food.description.slice(0, 100)}...`}
                      <button
                        className="text-blue-500 mt-2 inline-block hover:underline"
                        onClick={() => handleReadMore(index)}
                      >
                        {expanded.includes(index) ? "Show Less" : "Read More"}
                      </button>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blog;
