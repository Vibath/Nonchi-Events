import "../App.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Creative() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pageInner">
      <Link to="/" className="backHome">← Back to Home</Link>
        <h1>Nonchi Creative</h1>

        <p className="pageIntro">
          Sharing thoughts, ideas, and real experiences.
        </p>

        <div className="pageBlock">
          <h3>Content</h3>
          <p>YouTube videos, short clips, and storytelling.</p>
        </div>

        <div className="pageBlock">
          <h3>Topics</h3>
          <p>Mindset, life, discipline, relationships.</p>
        </div>
      </div>
    </motion.div>
  );
}