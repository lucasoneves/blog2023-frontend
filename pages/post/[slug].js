import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../graphql/queries";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const PostDetail = ({ post }) => {
  return (
    <>
      <h2>{ post.title }</h2>
      <MDXRemote {...post.content} />
    </>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.blogPosts.data.map((post) => {
    return { params: { slug: post.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.blogPosts.data[0].attributes;
  const html = await serialize(attrs.content);

  return {
    props: {
      post: {
        title: attrs.title,
        content: html,
      },
    },
  };
}
