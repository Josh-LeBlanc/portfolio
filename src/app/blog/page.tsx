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
      <h1>Blog Posts</h1>
      <div style={{ marginTop: "2rem" }}>
        {posts.map((post, index) => (
          <div key={index} box-="square" style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>{post.title}</h2>
              <span is-="badge" variant-="lavender">{post.tag}</span>
            </div>
            <p style={{ color: "var(--subtext1)", marginTop: "0.5rem" }}>{post.date}</p>
            <p style={{ marginTop: "1rem" }}>{post.excerpt}</p>
            <button variant-="blue" style={{ marginTop: "1rem" }}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
} 