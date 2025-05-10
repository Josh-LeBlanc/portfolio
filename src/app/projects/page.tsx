import styles from "../page.module.css";

export default function Projects() {
  const projects = [
    {
      title: "WebTUI Portfolio",
      description: "A personal portfolio website built using WebTUI and Next.js",
      tech: ["Next.js", "WebTUI", "TypeScript"],
      status: "Active"
    },
    {
      title: "Terminal Chat App",
      description: "Real-time chat application with a terminal-style interface",
      tech: ["React", "WebSocket", "Node.js"],
      status: "In Progress"
    },
    {
      title: "CLI Task Manager",
      description: "A task management application with terminal-inspired design",
      tech: ["Vue.js", "Express", "MongoDB"],
      status: "Completed"
    }
  ];

  return (
    <div>
      <h1 className={styles.pageHeading}>projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} box-="round" className={styles.readmeBox} style={{ paddingBottom: "1rem" }}>
            <div className={styles.readmeBoxHeader}>
              <span is-="badge" variant-="background0" style={{ color: "var(--yellow)" }}>{project.title}</span>
              <span is-="badge" variant-="background0" style={{ color: "var(--mauve)" }}>{project.status}</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1.5rem", fontFamily: "Iosevka Nerd Font", marginTop: ".5lh" }}>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} is-="badge" variant-="flamingo" className={styles.projectTechLabel}>{tech}</span>
              ))}
            </div>
            <p className={styles.readmeBoxContent} style={{ color: "var(--text)", paddingTop: "1rem", paddingLeft: "1.5rem", paddingBottom: ".5lh" }}>{project.description}</p>
            <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1rem", }}>
              <button box-="round" variant-="blue" className={styles.firstBoxButtons}>View Project</button>
              <button box-="round" variant-="sapphire" className={styles.firstBoxButtons}>Source Code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 