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
      const xVal = e.offsetX;
      const yVal = e.offsetY;
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
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div id="tilt" className="rounded-lg">
          <img
            src="/PassportPRTnobg.jpeg"
            alt="Profile"
            className="lg:w-[27rem] lg:h-56 w-44 h-44 object-cover rounded-lg"
          />
        </div>
        <div>
          <motion.h1
            className="text-3xl font-bold mb-2 text-center lg:text-left"
            whileHover={{ scale: 1.05 }}
          >
            Rishank Tiwari
          </motion.h1>
          <motion.p
            className="text-gray-400 mb-3 text-center lg:text-left"
            whileHover={{ scale: 1.05 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            className="box flex mb-1 justify-center lg:justify-start"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p>Core Competencies:</p>
          </motion.div>
          <div className="space-y-4">
            <div className="mb-1 bg-gray-700 rounded-lg p-4">
              <p className="font-semibold mb-2">Core Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "SQL",
                  "MySQL",
                  "DynamoDB",
                  "Serverless Architecture",
                  "Api Gateway",
                  "lambda",
                  "CSR (Client Side Rendering)",
                  "SSR (Server Side Rendering)",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-600 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-3 bg-gray-700 rounded-lg p-4">
              <p className="font-semibold mb-2">Cloud & DevOps Tools:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS EC2",
                  "AWS S3",
                  "CloudFront",
                  "Load Balancers",
                  "Git",
                  "Bitbucket",
                  "Jira",
                  "REST APIs",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-gray-600 rounded text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
          >
            <Download size={16} />
            <a
              href="https://presume.s3.ap-south-1.amazonaws.com/Rishank_Tiwari_.docx"
              
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Resume</span>
            </a>
          </motion.button>
        </div>
      </div>
      <motion.div
        className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4"
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
