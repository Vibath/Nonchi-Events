import "../App.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Foundation() {
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
        <h1>Nonchi Foundation</h1>

        <p className="pageIntro">
          Giving back is part of Nonchi.
        </p>

        <div className="pageBlock">
          <h3>What we do</h3>
          <p>Helping people, supporting communities, real impact.</p>
        </div>

        <div className="pageBlock">
          <h3>Real Moments</h3>
          <p>Stories and experiences from real life.</p>
        </div>
      </div>
    </motion.div>
  );
}