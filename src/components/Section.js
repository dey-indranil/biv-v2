import React from 'react';
import '../styles.css';

const Section = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
