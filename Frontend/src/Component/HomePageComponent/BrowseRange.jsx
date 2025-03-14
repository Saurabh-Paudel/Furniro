import React from "react";

function BrowseRange() {
  // Define room data with unique IDs for better key usage
  const roomCategories = [
    { id: "dining", name: "Dining", image: "/Dining_Range.png" },
    { id: "living", name: "Living", image: "/Living_Range.png" },
    { id: "bedroom", name: "Bedroom", image: "/Bedroom_Range.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Browse The Range
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {roomCategories.map((room) => (
          <article
            key={room.id}
            className="rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="rounded-md">
              <img
                src={room.image}
                alt={room.name}
                style={{ aspectRatio: "381 / 480" }}
                className="rounded-md"
              />
            </div>
            <div className="text-center mt-[30px]">
              <p className="text-lg font-medium text-gray-800">{room.name}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BrowseRange;
