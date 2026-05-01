import "../App.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Journals() {
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
        <h1>Nonchi Journals</h1>

        <p className="pageIntro">
          A tool for clarity, discipline, and self-reflection.
        </p>

        <div className="pageBlock">
          <h3>Why it matters</h3>
          <p>Helps thinking, builds discipline, improves life.</p>
        </div>
      </div>
    </motion.div>
  );
}