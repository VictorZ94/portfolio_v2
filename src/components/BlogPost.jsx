const BlogPost = ({ title, excerpt, date, category, onClick }) => {
  return (
    <article
      className="bg-secondary rounded-lg shadow-md p-6 mb-6"
      onClick={onClick}
    >
      <h2 className="text-gold-300 text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gold-100 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-gold-300 text-sm">{date}</span>
        <span className="bg-gold-300 text-secondary px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
    </article>
  );
};

export default BlogPost;
