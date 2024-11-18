"use client";

import { motion } from "framer-motion";
const projects = [

  {
    title: "TOIFA - Times Of India Film Fare Awards",
    image: "/toifa.png",
    url: "https://toifa.in/", // url
    description:
      "TOIFA (Times of India Film Awards) is a revamped version of the classic Filmfare Awards, built using Next.js on a serverless architecture, offering improved performance and modern, scalable infrastructure.",
    technologies1:" Next.js",
    technologies2:"Serverless",
    technologies3:"DynamoDB"
  },
  {
    title: "BombayTimes",
    image: "/bombaytimes.png",
    url: "https://www.bombaytimes.com/", // url
    description:
      "A React-based frontend to Keep yourself updated with the latest news, videos, photos about the entertainment industry, celebrity, lifestyle, travel, events and a lot more.",
      technologies1:" Next.js",
      technologies2:"Serverless",
      technologies3:"MySQL"
  },
  {
    title: "ECoupon",
    image: "/Ecoupon.png",
    url: "https://mytoiconnect.com/login/", // url
    description:
      "A featured e-delivery tracking platform built with .NET and consumed RFC's of SAP and SQL Database to mentain the Transaction records between the Customer, Vendor and Dealer.",
      technologies1:".NET ",
      technologies2:"SAP",
      technologies3:"SQL(procedures)"
  },
  {
    title: "Times Subscription",
    image: "/subscribe.png",
    url: "https://subscribe.timesgroup.com/v2/", // url
    description:
      "A comprehensive dashboard for the Times Of India Newspaper subscription. TOI+ Offer Ends Soon: Upto 35% Read the latest news and exclusive stories with TOI Digital Newspaper & TOI+ subscription",
      technologies1:" Next.js",
      technologies2:"Serverless",
      technologies3:"MySQL"
  },

  {
    title: "Times Content",
    image: "/timescontent.png",
    url: "https://timeshighriseawards.com/index.html", // url
    description:
      "A React.js application to Browse & Buy photos, images, cartoons, graphics, articles, microfilm, Audio & Video content; from India's largest media group The Times Group.",
      technologies1:" React.js",
      technologies2:"Serverless",
      technologies3:"MySQL"
  },
  {
    title: "Times High Rise",
    image: "/highrise.png",
    url: "https://timeshighriseawards.com/index.html", // url
    description:
      "A complex application for Nominating your residential complex for the prestigious Times High Rise Awards. This esteemed award celebrates excellence, honouring complexes that excel across various parameters and set newbenchmarks in quality living..",
      technologies1:" Next.js",
      technologies2:"Serverless",
      technologies3:"DynamoDB"
  },
  {
    title: 'Times Food and NightLife Awards',
    image: '/timesfood.png',
    url: 'https://timesfoodawards.com/', // url
    description: 'Next.js application which showcases the Times Food & Nightlife Awards celebrates the best in F&B and honours those making a difference in the world of hospitality through their innovation and ...',
    technologies1:" Next.js",
    technologies2:"Serverless",
    technologies3:"MySQL & DynamoDB"
  },
];

function ProjectDiverter(url: string) {
  // Use a production-friendly redirect that handles both relative and absolute URLs
  if (url && typeof window !== "undefined") {
    window.location.href = url;
  }
}

export default function Projects() {
  // const handleProjectClick = (url: string) => {
  //   ProjectDiverter(url);
  // };
  const handleProjectClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-gray-800 rounded-lg p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              onClick={() => handleProjectClick(project.url)}
              className="w-full h-40 "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <div className="p-2 flex justify-center" >
                <p className="text-grey-500">{project.technologies1}</p>
                <p className="mx-1">/</p>
                <p className="text-grey-500">{project.technologies2}</p>
                <p className="mx-1">/</p>
                <p className="text-grey-500">{project.technologies3}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
