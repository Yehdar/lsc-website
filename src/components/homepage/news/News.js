// src/components/homepage/news/News.js
"use client";

import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const newsItems = [
    {
      imageSrc: "/news/news1.png",
      title: "Bergeron Closed???",
      description: "Has the lack of funding eventually led to its closure?",
      date: "4 July 2024",
      link: "/news/bergeron-closed",
    },
    {
      imageSrc: "/news/news2.png",
      title: "Strike on Lassonde",
      description: "How has the strike affected Lassonde students?",
      date: "24 May 2024",
      link: "/news/strike-on-lassonde",
    },
    {
      imageSrc: "/news/news3.png",
      title: "Mental Health",
      description: "Taking care of your mental health!",
      date: "31 January 2024",
      link: "/news/mental-health",
    },
  ];

  return (
    <section className="bg-white p-4 mb-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Recent News</h2>
        <a href="news" className="text-blue-600 hover:underline">
          View all news
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            date={item.date}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
