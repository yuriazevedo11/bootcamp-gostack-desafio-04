import React from 'react';

import PostComments from './PostComments'

const PostItem = ({ data }) => (
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

    { data.comments.map(comment => <PostComments key={comment.id} data={comment}/>) }
  </article>
);

export default PostItem;
