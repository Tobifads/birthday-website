import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import heroImage from "./assets/images/hero.jpg"; // Add your girlfriend's photo here
import songImage from "./assets/images/song.jpg"; // Album art for her favorite song
import photo1 from "./assets/images/photo1.jpg";
import photo2 from "./assets/images/photo2.jpg";
import photo3 from "./assets/images/photo3.jpg";

function App() {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 text-center font-sans">
      {/* Hero Section */}
      <section className="p-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-4"
        >
          🎉 Happy Birthday My Love! 🎉
        </motion.h1>
        <img
          src={heroImage}
          alt="Birthday Girl"
          className="mx-auto rounded-2xl shadow-lg w-3/4 md:w-1/3"
        />
      </section>

      {/* Apple Music Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-pink-500 mb-2">Your Favorite Vibe 🎶</h2>
        <a
          href="https://music.apple.com/your-favorite-song"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={songImage}
            alt="Apple Music Link"
            className="mx-auto rounded-lg w-64 hover:scale-105 transition-transform"
          />
        </a>
      </section>

      {/* Gallery Section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src={photo1} alt="Memory 1" className="rounded-xl shadow-md" />
        <img src={photo2} alt="Memory 2" className="rounded-xl shadow-md" />
        <img src={photo3} alt="Memory 3" className="rounded-xl shadow-md" />
      </section>

      {/* Birthday Note Section */}
      <section className="p-6">
        <button
          onClick={() => setShowNote(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-md text-lg"
        >
          💌 Read Your Birthday Note
        </button>
      </section>

      {/* Modal Note */}
      {showNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 md:w-1/2 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">To My Queen 💕</h2>
            <p className="text-gray-700 text-left">
              Happy Birthday, my love! 🎂 Every moment with you is a treasure,
              and I’m so grateful to have you in my life. Today is all about
              celebrating you – your smile, your heart, and your magic. Here’s
              to many more birthdays together. I love you always ❤️
            </p>
            <button
              onClick={() => setShowNote(false)}
              className="mt-4 bg-pink-400 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
