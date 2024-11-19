"use client";
import React from "react";
import { Instagram, MessageCircleMore, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly space-x-4">
      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/rishank_26/profilecard/?igsh=bGdwNjZodmx2dDlo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:scale-110 transition-transform"
      >
        <Instagram />
      </a>

      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/9839952001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:scale-110 transition-transform"
      >
        <MessageCircleMore />
      </a>

      {/* LinkedIn Profile */}
      <a
        href="https://www.linkedin.com/in/rishank-tiwari-89b248198/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default Footer;
