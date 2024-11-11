import { mealData } from "../data/data";
import { HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";
const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCat = (category) => {
    setFoods(mealData.filter((item) => {
        return item.category === category;
      }))
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center mb-10">
        Our Meal
      </h1>
      <div className="flex flex-col lg:row justify-center mb-10">
        <div className="flex justify-center md:justify-center gap-4">
          <button onClick={() => setFoods(mealData)} className="mt-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-700 hover:border-orange-700">
            All
          </button>
          <button onClick={() => filterCat("pizza")} className="mt-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-700 hover:border-orange-700">
            Pizza
          </button>
          <button onClick={() => filterCat("chicken")} className="mt-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-700 hover:border-orange-700">
            Chicken
          </button>
          <button onClick={() => filterCat("salad")} className="mt-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-700 hover:border-orange-700">
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {foods.map((meal) => (
          <div
            key={meal.id}
            className="border-none hover:scale-105 duration-300 "
          >
            <img
              className="w-full h-[250px] object-cover rounded-lg"
              src={meal.image}
              alt={meal.name}
            />
            <div className="flex justify-between py-4 px-2">
              <p className="font-bold capitalize">{meal.name}</p>
              <p className="bg-orange-500 h-18 w-18 rounded-full px-2 py-4 -mt-10 text-white border-8 font-semibold">
                {meal.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-8">
              <p className="flex items-center text-indigo-500">
                View More <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
