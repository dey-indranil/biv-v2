import React from "react";
import Section from "./Section";
import Carousel from "./Carousel";
import "../styles.css";

const Content = ({ sections }) => {
  return (
    <main className="content">
      {sections.map((section, index) => (
        <div key={index}>
          {section.title === "Gallery" ? (
            <div className="gallery-section">
              <h2>{section.title}</h2>
              <Carousel />
            </div>
          ) : (
            <Section title={section.title} content={section.content} />
          )}
        </div>
      ))}
    </main>
  );
};

export default Content;
