import styles from "../page.module.css";

export default function Blog() {
  const posts = [
    {
      title: "Getting Started with WebTUI",
      date: "2024-03-20",
      excerpt: "Learn how to build beautiful terminal-style web interfaces using WebTUI",
      tag: "Tutorial"
    },
    {
      title: "The Power of Terminal-Style UIs",
      date: "2024-03-15",
      excerpt: "Why terminal-style UIs are making a comeback in modern web development",
      tag: "Opinion"
    },
    {
      title: "Customizing WebTUI Themes",
      date: "2024-03-10",
      excerpt: "A deep dive into creating custom themes for your WebTUI applications",
      tag: "Tutorial"
    }
  ];

  return (
    <div>
      <h1 className={styles.pageHeading}>blog posts</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index} box-="round" className={styles.readmeBox} style={{ marginBottom: "1rem" }}>
            <div className={styles.readmeBoxHeader}>
              <span is-="badge" variant-="background0" style={{ color: "var(--yellow)" }}>{post.title}</span>
              <span is-="badge" variant-="background0">{post.tag}</span>
            </div>
            <div className={styles.readmeBoxContent}>
              <p style={{ color: "var(--subtext0)", marginTop: "0.5rem" }}>{post.date}</p>
              <p style={{ marginTop: "1rem", color: "var(--text)" }}>{post.excerpt}</p>
              <button box-="round" variant-="blue" style={{ marginTop: "1rem" }}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 