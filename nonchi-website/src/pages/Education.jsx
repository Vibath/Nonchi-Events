import "../App.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Education() {
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
        <h1>Nonchi Education</h1>

        <p className="pageIntro">
          Learning experiences built for real growth.
        </p>

        <div className="pageBlock">
          <h3>Purpose</h3>
          <p>Sharing knowledge, guiding people, building better thinking.</p>
        </div>

        <div className="pageBlock">
          <h3>Future</h3>
          <p>Courses, workshops, and structured learning experiences.</p>
        </div>
      </div>
    </motion.div>
  );
}