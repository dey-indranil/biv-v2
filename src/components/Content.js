import React from 'react';
import Section from './Section';
import '../styles.css';

const Content = ({ sections }) => {
  return (
    <main className="content">
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </main>
  );
};

export default Content;
