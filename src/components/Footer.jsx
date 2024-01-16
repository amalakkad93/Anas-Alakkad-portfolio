import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

import { contacts } from "../constants";


const Tooltip = ({ show, text, onCopy }) => {
  if (!show) return null;

  return (
    <div
      className="tooltip"
      style={{ position: 'absolute', bottom: '100%', marginBottom: '10px', cursor: 'pointer', zIndex: 1 }}
      onClick={onCopy}
    >
      {text}
    </div>
  );
};

const ImageCard = ({ src, alt, index, a, contactType }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  const hrefValue = contactType === "email" ? `mailto:${a}` : contactType === "phone" ? `tel:${a}` : a;
  const displayText = contactType === "email" || contactType === "phone" ? a : "";

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      onMouseEnter={() => setShowTooltip(contactType === "email" || contactType === "phone")}
      onMouseLeave={() => setShowTooltip(false)}
      // style={{ position: 'relative', display: 'inline-block' }}
    >
      <a href={hrefValue}>
        <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
          <img className="h-9" src={src} alt={alt} />
        </Tilt>
      </a>
      {(contactType === "email" || contactType === "phone") && showTooltip && (
        <div
          className="tooltip"
          style={{
            position: 'absolute',
            // bottom: '0%',
            // bottom: '100%',
            // left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '10px',
            cursor: 'pointer',
            zIndex: 1
          }}
          onClick={() => copyToClipboard(displayText)}
        >
          {copied ? "Copied!" : `Click to copy ${contactType}: ${displayText}`}
        </div>
      )}
    </motion.div>
  );
};
const Footer = () => {
  return (
    <div className="h-[80px] rounded-2xl bg-black-100 w-full flex flex-wrap items-center justify-center gap-5">
      <span className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        Contact:{" "}
      </span>
      {contacts.map((contact, index) => (
        <ImageCard
          key={index}
          src={contact.src}
          alt={contact.alt}
          index={index}
          a={contact.a}
          contactType={contact.contactType}
        />
      ))}
    </div>
  );
};


export default SectionWrapper(Footer, "");
