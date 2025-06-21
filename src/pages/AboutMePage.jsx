import { motion } from "framer-motion";
import "./OverlayPage.css";

const AboutMePage = ({ onClose }) => {
  return (
    <motion.div
      className="overlay-page"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="overlay-content">
        <h1>About Me</h1>
        <p>Let's introduce!</p>
        <button className="back-button" onClick={onClose}>
          ← Back to Room
        </button>
      </div>
    </motion.div>
  );
};

export default AboutMePage;
