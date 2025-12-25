import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Cartoon Artist 10M
      </motion.h1>

      <p>Anime Art Paintings for True Fans</p>

      <h2>Buy / Commission</h2>

      <a
        href="https://wa.me/919876614958?text=Hello%20Cartoon%20Artist%2010M,%20I%20want%20anime%20art"
        target="_blank"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}