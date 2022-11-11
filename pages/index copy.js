import { ApolloClient, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link';
import { GET_ALL_POSTS } from '../graphql/queries';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <main>
        <h2>Home</h2>
      </main>

      <footer></footer>
    </div>
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS
  })

  return {
    props: {
      posts: data.blogPosts.data
    }
  }
}