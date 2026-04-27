import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CalendarHeart,
  BookOpen,
  Clapperboard,
  HandHeart,
  GraduationCap,
} from "lucide-react";
import "./App.css";
import logo from "./assets/hero.png";

const spaces = [
  {
    title: "Nonchi Events",
    tag: "Curated Experiences",
    text: "Meaningful gatherings designed with warmth, beauty, and intention.",
    icon: CalendarHeart,
  },
  {
    title: "Nonchi Journals",
    tag: "Reflection & Growth",
    text: "Tools for discipline, creativity, self-reflection, and calm living.",
    icon: BookOpen,
  },
  {
    title: "Nonchi Creative Content",
    tag: "Stories & Ideas",
    text: "Visual storytelling, thoughts, and perspectives shared with purpose.",
    icon: Clapperboard,
  },
  {
    title: "Nonchi Foundation",
    tag: "Giving Back",
    text: "A genuine space for kindness, community support, and real human impact.",
    icon: HandHeart,
  },
  {
    title: "Nonchi Education",
    tag: "Learning With Purpose",
    text: "Learning experiences, guidance, and knowledge-sharing for personal growth.",
    icon: GraduationCap,
  },
];

function Reveal({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % spaces.length);
  const prev = () => setActive((active - 1 + spaces.length) % spaces.length);

  return (
    <main className="site">
      <header className="header">
        <nav className="nav">
          <div className="brand">
            <img src={logo} alt="Nonchi Logo" />
            <span>Nonchi</span>
          </div>

          <div className="navLinks">
            <a href="#home"><span>Home</span></a>
            <a href="#about"><span>About</span></a>

            <div className="spacesNavItem">
              <a href="#spaces"><span>Spaces</span></a>

              <div className="spacesDropdown">
                {spaces.map((space, index) => {
                  const Icon = space.icon;

                  return (
                    <a
                      key={space.title}
                      href="#spaces"
                      className="dropdownStep"
                      onClick={() => setActive(index)}
                      style={{ "--i": index }}
                    >
                      <span className="dropIcon">
                        <Icon size={16} strokeWidth={1.8} />
                      </span>

                      <div>
                        <strong>{space.title.replace("Nonchi ", "")}</strong>
                        <small>{space.tag}</small>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <a href="#contact"><span>Contact</span></a>
          </div>

          <a href="#contact" className="navButton">Let’s Talk</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">Calm • Creative • Meaningful</p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            A quiet brand for meaningful experiences.
          </motion.h1>

          <motion.p
            className="heroDescription"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Nonchi brings together events, journals, education, creative content,
            and social impact under one calm lifestyle identity.
          </motion.p>

          <div className="heroActions">
            <a href="#spaces" className="primaryBtn">Explore Spaces</a>
            <a href="#about" className="secondaryBtn">Our Vision</a>
          </div>
        </div>

        <div className="heroVisual">
          <motion.div
            className="orbit orbitOne"
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="orbit orbitTwo"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src={logo}
            alt="Nonchi Logo"
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9 }}
          />
        </div>
      </section>

      <Reveal id="about" className="about">
        <p className="eyebrow">About Nonchi</p>
        <h2>
          Nonchi is built around calm living, creativity, and experiences that
          people remember by feeling.
        </h2>
        <p>
          It is not only an event management company. It is a lifestyle brand
          that connects people through curated moments, thoughtful products,
          learning, storytelling, and genuine impact.
        </p>
      </Reveal>

      <Reveal id="spaces" className="spaces">
        <div className="sectionTop">
          <div>
            <p className="eyebrow">The Nonchi Spaces</p>
            <h2>One brand, five connected worlds.</h2>
          </div>

          <div className="controls">
            <button onClick={prev}><ChevronLeft size={22} /></button>
            <button onClick={next}><ChevronRight size={22} /></button>
          </div>
        </div>

        <div className="carouselShell">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="carouselContent"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -35 }}
              transition={{ duration: 0.45 }}
            >
              <div className="spaceInfo">
                <span className="spaceNumber">0{active + 1}</span>
                <h3>{spaces[active].title}</h3>
                <p className="spaceTag">{spaces[active].tag}</p>
                <p className="spaceText">{spaces[active].text}</p>

                <button className="exploreBtn">
                  Explore this space <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="cardStage">
                {spaces.map((space, index) => {
                  const offset = index - active;

                  return (
                    <motion.div
                      key={space.title}
                      onClick={() => setActive(index)}
                      className={`spaceCard ${index === active ? "activeCard" : ""}`}
                      animate={{
                        x: offset * 75,
                        y: Math.abs(offset) * 22,
                        rotate: offset * 7,
                        scale: index === active ? 1 : 0.82,
                        opacity: index === active ? 1 : 0.35,
                        zIndex: 10 - Math.abs(offset),
                      }}
                      transition={{ type: "spring", stiffness: 130, damping: 20 }}
                    >
                      <div className="cardCircle"></div>
                      <div>
                        <p>Space 0{index + 1}</p>
                        <h4>{space.title.replace("Nonchi ", "")}</h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <Reveal className="feeling">
        <p className="eyebrow">The Feeling</p>
        <h2>
          Simple enough to feel peaceful. Strong enough to become unforgettable.
        </h2>
      </Reveal>

      <Reveal id="contact" className="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s create something meaningful.</h2>
        <p>
          For events, education, journals, creative content, or foundation work —
          Nonchi starts with a simple conversation.
        </p>
        <a href="mailto:hello@nonchi.com" className="primaryBtn">
          Start a Conversation
        </a>
      </Reveal>

      <footer>
        © 2026 Nonchi. Calm living, meaningful experiences.
      </footer>
    </main>
  );
}

export default App;