// src/utils/loadMarkdown.ts
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const markdownFiles = import.meta.glob('../data/articles/*.md', { query: '?raw', import: 'default' });

export async function loadMarkdown(filePath: string) {
  const fileKey = `../data/articles/${filePath}`;
  console.log(`Looking for file: ${fileKey}`);
  const loadFile = markdownFiles[fileKey];

  if (!loadFile) {
    throw new Error(`Markdown file not found: ${filePath}`);
  }

  const fileContents = await loadFile() as string;
  console.log(`Loaded file contents: ${fileContents}`);

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    data,
    contentHtml,
  };
}