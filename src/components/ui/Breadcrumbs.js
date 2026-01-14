import Link from 'next/link';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-8">
      <ol className="flex items-center text-[var(--foreground)]">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-white">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-semibold">{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && (
              <span aria-hidden="true" className="mx-2 select-none">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
