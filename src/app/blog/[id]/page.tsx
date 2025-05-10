import { getBlogPost, getAllBlogPosts } from '@/lib/markdown';
import styles from '../../page.module.css';

// Add required CSS for KaTeX and Prism
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  return (
    <div>
      <h1 className={styles.pageHeading}>{post.title}</h1>
      <div box-="round" className={styles.readmeBox}>
        <div className={styles.readmeBoxHeader}>
          <span is-="badge" variant-="background0" style={{ color: "var(--yellow)" }}>{post.date}</span>
          <span is-="badge" variant-="background0">{post.tag}</span>
        </div>
        <div className={styles.readmeBoxContent}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
} 