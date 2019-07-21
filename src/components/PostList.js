import React, { Component } from 'react';

import PostItem from './PostItem'

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Olivia Silva',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!'
          },
          {
            id: 2,
            author: {
              name: 'Diego Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            content: 'Sério, me chamem mesmo, esse comentário é real!'
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Olivia Silva',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!'
          },
          {
            id: 2,
            author: {
              name: 'Diego Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            content: 'Sério, me chamem mesmo, esse comentário é real!'
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'Olivia Silva',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!'
          },
          {
            id: 2,
            author: {
              name: 'Diego Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            content: 'Sério, me chamem mesmo, esse comentário é real!'
          }
        ],
      }
    ]
  };

  render() {
    return (
      <main id="post-list">
        { this.state.posts.map(post => <PostItem key={post.id} data={post} />) }
      </main>
    );
  }
}
