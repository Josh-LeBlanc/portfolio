import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeStringify from 'rehype-stringify';

const blogsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
}

export function getAllBlogPosts() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string; tag: string; excerpt: string }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  return {
    id,
    content: processedContent.toString(),
    ...(data as { title: string; date: string; tag: string; excerpt: string }),
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  sourceCode?: string;
  blog?: string;
}

export function getAllProjects() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjects = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      ...(matterResult.data as Project),
      tech: (matterResult.data.tech as string).split(',').map(t => t.trim())
    };
  });

  return allProjects;
} 