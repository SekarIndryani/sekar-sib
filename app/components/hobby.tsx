import React from 'react';
import hobby1 from "./assets/bunga.jpg";
import hobby2 from "./assets/puteri.jpg";
import hobby3 from "./assets/indri.jpeg";
import hobby4 from "./assets/music.jpg";

const Hobbies = [
  { id: 1, name: "Melukis", image: hobby1 },
  { id: 2, name: "Menulis", image: hobby2 },
  { id: 3, name: "Mendaki Gunung", image: hobby3 },
  { id: 4, name: "Mendengarkan musik", image: hobby4 },
];

export default function MyGallery() {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-gray-700 font-bold">MY GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className="border-2 border-pink-300/75 rounded-lg bg-pink-300 text-black p-4">
            <img src={hobby.image.src} alt={hobby.name} className="w-full h-auto rounded-md" />
            <div className="mt-2">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}