import React from "react";

const BestRecipes = () => {
  return (
    <div>
      <div className="space-y-12 my-8">
        <h2 className="text-4xl font-bold  mt-12 mb-6 border-b-2 border-black w-64 mx-auto">Populat Recipe</h2>
        <div className="flex">
          <div className="w-1/2">
            <img
              src="https://i.postimg.cc/0yRNbZ5J/3.jpg"
              alt=""
              className="rounded-xl w-[600px] h-[350px]  mx-auto"
            />
          </div>
          <div className="w-[40%] ">
            <h2 className="text-5xl font-bold text-cyan-800 my-5">Bulgogi</h2>
            <p>
              Bulgogi, a Korean culinary masterpiece, delights palates with its
              tender, thinly sliced beef marinated in a symphony of flavors. The
              essence of sweet and savory dance harmoniously as the meat grills
              to succulent perfection, releasing an irresistible aroma. A blend
              of soy sauce, garlic, sesame oil, and pear infuses each bite with
              a tantalizing balance of sweetness and umami. Served with steamed
              rice and an assortment of banchan, Bulgogi embodies the heart and
              soul of Korean cuisine, offering a mouthwatering culinary
              experience like no other.
            </p>
            <div className="flex justify-end">
              <button className="btn btn-outline border-0 border-b-4">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-1/2">
            <img
              src="https://i.postimg.cc/3RR8Pc1z/4.jpg"
              alt=""
              className="rounded-xl  w-[600px] h-[350px] mx-auto"
            />
          </div>
          <div className="w-[40%] ">
            <h2 className="text-5xl  text-right  font-bold text-cyan-800 my-5">Bulgogi</h2>
            <p>
              Japchae, a beloved Korean dish, presents a delightful harmony of
              flavors and textures. Stir-fried glass noodles, made from sweet
              potato starch, mingle with an assortment of colorful vegetables
              and tender strips of beef, creating a dish bursting with vibrant
              colors and flavors. Seasoned with soy sauce, sesame oil, and a
              touch of sweetness, Japchae offers a savory-sweet umami experience
              that tantalizes the taste buds and satisfies the soul, making it a
              cherished favorite in Korean cuisine.
            </p>
            <div className="flex justify-start">
              <button className="btn btn-outline border-0 border-b-4">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-1/2">
            <img
              src="https://i.postimg.cc/gJkjGJzS/2.jpg"
              alt=""
              className="rounded-xl  w-[600px] h-[350px] mx-auto"
            />
          </div>
          <div className="w-[40%] ">
            <h2 className="text-5xl font-bold text-cyan-800 my-5">Bibimbap</h2>
            <p>
              Bibimbap, a quintessential Korean dish, is a vibrant culinary
              masterpiece that showcases a colorful array of fresh vegetables,
              tender marinated beef, and a perfectly fried egg atop a bed of
              steamed rice. Bursting with flavors and textures, Bibimbap is
              typically served with a spicy gochujang sauce that adds a kick of
              heat and a depth of flavor. Each bite offers a delightful harmony
              of ingredients, making Bibimbap a beloved staple in Korean
              cuisine.
            </p>
            <div className="flex justify-end">
              <button className="btn btn-outline border-0 border-b-4">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-1/2">
            <img
              src="https://i.postimg.cc/59DzSBNf/5.jpg"
              alt=""
              className="rounded-xl  w-[600px] h-[350px] mx-auto"
            />
          </div>
          <div className="w-[40%] ">
            <h2 className="text-5xl text-right font-bold text-cyan-800 my-5">
              Kimchi Jjigae
            </h2>
            <p>
              Kimchi Jjigae, a beloved Korean comfort food, is a spicy and
              hearty stew that embodies the essence of Korean cuisine. Made with
              fermented kimchi, tofu, pork, and a flavorful broth, this dish is
              bursting with bold and tangy flavors. The kimchi infuses the stew
              with its signature tanginess and depth, while the tofu adds a
              creamy texture. Served piping hot, Kimchi Jjigae provides warmth
              and satisfaction, making it a cherished favorite in Korean
              households.
            </p>
            <div className="flex justify-start">
              <button className="btn btn-outline border-0 border-b-4">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRecipes;
