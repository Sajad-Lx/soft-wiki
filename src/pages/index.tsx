import Head from "next/head";
import React from "react";
import HeroPost from "../components/common/hero-post";
import MorePosts from "../components/common/more-posts";
import { getAllPosts } from "../lib/api/api";
import { APP_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="A Blogging site for everyone." />
      </Head>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          excerpt={heroPost.excerpt}
          author={heroPost.author}
          slug={heroPost.slug}
        />
      )}
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
