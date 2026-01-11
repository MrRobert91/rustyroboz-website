import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function getAboutContent() {
  const filePath = path.join(process.cwd(), 'src/content/about/index.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    title: matterResult.data.title,
    contentHtml,
  };
}

export default async function AboutPage() {
  const aboutContent = await getAboutContent();

  return (
    <section>
      <h1 className="text-4xl font-bold text-center mb-10">{aboutContent.title}</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div dangerouslySetInnerHTML={{ __html: aboutContent.contentHtml }} />
      </div>
    </section>
  );
}
