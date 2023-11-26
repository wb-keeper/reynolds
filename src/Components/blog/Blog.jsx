"use client";

import SectionHeader from "@/Components/SectionHeader";
import PostList from "@/Components/blog/PostList";

const getPosts = async () => {
  const res = await fetch("http://localhost:4000/posts");
  return res.json();
};
async function Blog(props) {
  const posts = await getPosts();
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        <PostList posts={posts} />
      </div>
    </section>
  );
}

export default Blog;
