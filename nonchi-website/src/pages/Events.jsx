import "../App.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Events() {
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
        <h1>Nonchi Events</h1>

        <p className="pageIntro">
          Nonchi Events are not just events. They are meaningful experiences.
        </p>

        <div className="pageBlock">
          <h3>Event Types</h3>
          <p>Weddings, cultural events, and creative gatherings.</p>
        </div>

        <div className="pageBlock">
          <h3>The People Behind Nonchi</h3>
          <p>Core team, production team, and event specialists.</p>
        </div>
      </div>
    </motion.div>
  );
}