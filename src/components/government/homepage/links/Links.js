// src/components/government/homepage/links/Links.js
"use client";

import React from "react";
import LinkCard from "./LinkCard";

const Links = () => {
  const Links = [
    {
      imageSrc: "/images/batman.png",
      title: "Services",
      description:
        "Elected to make laws and check the work of the Secretariat.",
      link: "/government/services",
    },
    {
      imageSrc: "/images/cap.png",
      title: "Ministry",
      description:
        "Elected to check draft laws and challenge the work of the Congress.",
      link: "/government/ministry",
    },

    {
      imageSrc: "/images/flash.png",
      title: "Reports and Documents",
      description: "Find vote results from the House and Senate.",
      link: "/government/reports-and-documents",
    },
  ];

  return (
    <section className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Links.map((link, index) => (
          <LinkCard
            key={index}
            imageSrc={link.imageSrc}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Links;
