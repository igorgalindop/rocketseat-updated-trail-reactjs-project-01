import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/igorgalindop.png',
      name: 'Igor Galindo',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem, ipsam laudantium, deleniti tempora ullam ducimus enim iste quae magni magnam in similique non consequatur quod asperiores voluptates, ipsum corporis.' },
      { type: 'link', url: '#', content: 'lorem.ipsum/link' }
    ],
    publishedAt: new Date('2023-01-03 20:00:00'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem, ipsam laudantium, deleniti tempora ullam ducimus enim iste quae magni magnam in similique non consequatur quod asperiores voluptates, ipsum corporis.' },
      { type: 'link', url: '#', content: 'lorem.ipsum/link' }
    ],
    publishedAt: new Date('2023-01-15 17:43:22'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
