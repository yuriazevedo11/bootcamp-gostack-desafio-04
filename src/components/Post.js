import React from 'react';

const components = ({ data }) => (
  <article>
    <header>
      <img src={data.author.avatar} alt="img" />
      <div className="post-info">
        <strong>{data.author.name}</strong>
        <small>{data.date}</small>
      </div>
    </header>
    <section>
      <div>{data.content}</div>
    </section>
    <hr/>
  </article>
);

export default components;
