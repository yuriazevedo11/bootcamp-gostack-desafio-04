import React from 'react';

const PostComments = ({ data }) => (
  <div className="post-comment">
    <img src={data.author.avatar} />
    <section>
      <div>
        <strong>{data.author.name}: </strong>
        {data.content}
      </div>
    </section>
  </div>
);

export default PostComments;
