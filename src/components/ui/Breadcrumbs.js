import Link from 'next/link';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="mb-8">
      <ol className="flex space-x-2 text-gray-500">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-gray-700">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-semibold">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
