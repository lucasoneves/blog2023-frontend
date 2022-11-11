import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import Header from "../components/Header/Header";
import PostItem from "../components/PostItem/PostItem";
import { GET_ALL_POSTS } from "../graphql/queries";

export default function Home({ posts }) {
  return (
    <div>
      <main>
        {posts.map((post, i) => {
          return (
            <PostItem title={post.attributes.title } key={i} />
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.blogPosts.data,
    },
  };
}
