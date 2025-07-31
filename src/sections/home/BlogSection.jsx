import React from "react";

const blogPosts = [
  {
    title: "5 Essential Financial Strategies for Small Businesses",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "blog-3.png",
    link: "#",
  },
  {
    title: "Tax-Saving Tips for Entrepreneurs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "blog-2.png",
    link: "#",
  },
  {
    title: "The Importance of Financial Planning for Startups",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "blog-1.png",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="container-fluid mx-auto px-4 py-20">
      <h2 className="text-h2 font-semibold text-center mb-12 font-parkinsans">Our Blog</h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t pt-10 mb-5"
          >
            <div className="md:w-[55%]">
              <h3 className="text-p lg:text-[30px] font-semibold font-manrope mb-5 text-[#262626]">{post.title}</h3>
              <p className="font-manrope text-lg mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="font-manrope text-secondary font-medium underline text-[16px]"
              >
                Read more
              </a>
            </div>
            <div className="md:w-[45%] flex justify-center md:justify-end">
              <img
                src={`./${post.image}`}
                alt={post.title}
                className="rounded-xl w-full "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
