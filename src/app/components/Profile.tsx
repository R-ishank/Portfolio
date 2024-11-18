"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Profile() {
  const [isHovered, setIsHovered] = useState(true);

  useEffect(() => {
    const el = document.getElementById("tilt");
    if (!el) return;

    const height = el.clientHeight;
    const width = el.clientWidth;

    const handleMove = (e: MouseEvent) => {
      const xVal = e.offsetX; // offsetX is safer than layerX
      const yVal = e.offsetY; // offsetY is safer than layerY
      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);

      const transformStyle = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      el.style.transform = transformStyle;
    };

    const handleMouseOut = () => {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    };

    const handleMouseDown = () => {
      el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    };

    const handleMouseUp = () => {
      el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseout", handleMouseOut);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);

    // Clean up event listeners
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseout", handleMouseOut);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-8 shadow-lg"
    >
      <div className="flex items-center space-x-8">
        <div id="tilt" className="rounded-lg">
          <img src="/PassportPRTnobg.jpeg" alt="Profile" className="w-48 h-48" />
        </div>
        <div>
          <motion.h1
            className="text-3xl font-bold mb-2"
            whileHover={{ scale: 1.05 }}
          >
            Rishank Tiwari
          </motion.h1>
          <motion.p className="text-gray-400 mb-3" whileHover={{ scale: 1.05 }}>
            Full Stack Developer
          </motion.p>
          <motion.div
            className="box flex mb-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p>Core Competencies:</p>
          </motion.div>
          <div className="space-y-2 mb-2">
            <div className="mb-1 bg-gray-700 rounded-lg p-4">
              <p>Core Technologies:</p>
              <ul className="flex space-x-1">
                <li>React.js,</li>
                <li>Next.js,</li>
                <li>Node.js,</li>
                <li>JavaScript,</li>
                <li>HTML,</li>
                <li>CSS,</li>
                <li>SQL,</li>
                <li>MySQL,</li>
                <li>DynamoDB</li>
              </ul>
            </div>
            <div className="mb-3 bg-gray-700 rounded-lg p-4">
              <p>Cloud & DevOps Tools:</p>
              <ul className="flex space-x-1">
                <li>AWS EC2,</li>
                <li>AWS S3,</li>
                <li>CloudFront,</li>
                <li>Load Balancers,</li>
                <li>Git,</li>
                <li>Bitbucket,</li>
                <li>Jira,</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
          >
            <Download size={16} />
            <a href="https://presume.s3.ap-south-1.amazonaws.com/Rishank_Tiwari_Resume.docx">
              <span>Download Resume</span>
            </a>
          </motion.button>
        </div>
      </div>
      <motion.div
        className="mt-6 grid grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p>Email: rishankworks@gmail.com</p>
          <p>Phone: 9839952001</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <p>Noida, India</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
