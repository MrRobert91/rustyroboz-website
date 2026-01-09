import Link from 'next/link';

const Card = ({ post, type }) => {
  return (
    <Link
      href={`/${type}/${post.slug}`}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out group"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h5>
      <p className="font-normal text-gray-700 mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags && post.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
