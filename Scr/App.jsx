import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Cartoon Artist 10M
      </motion.h1>

      <p>Anime Art Paintings</p>

      <a
        href="https://wa.me/919876614958"
        target="_blank"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}
