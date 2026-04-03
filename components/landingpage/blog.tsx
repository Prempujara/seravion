const posts = [
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is reshaping the way we build and interact with web applications.",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    category: "Technology",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Design Systems That Scale",
    excerpt:
      "Learn the principles behind building design systems that grow with your organization and maintain consistency.",
    date: "Mar 8, 2026",
    readTime: "7 min read",
    category: "Design",
    gradient: "from-violet-600 to-purple-700",
  },
  {
    title: "Optimizing Cloud Infrastructure",
    excerpt:
      "Best practices for reducing costs and improving performance in your cloud architecture.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    category: "Engineering",
    gradient: "from-emerald-600 to-teal-700",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div>
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Blog
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Latest <span className="text-blue-600">insights</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-200">
            View All Articles →
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
