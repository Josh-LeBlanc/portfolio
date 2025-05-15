import styles from "../page.module.css";
import { getAllProjects } from '@/lib/markdown';
import Link from 'next/link';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div>
      <h1 className={styles.pageHeading}>projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id} box-="round" className={styles.readmeBox} style={{ paddingBottom: "1rem" }}>
            <div className={styles.readmeBoxHeader}>
              <span is-="badge" variant-="background0" style={{ color: "var(--yellow)" }}>{project.title}</span>
              <span is-="badge" variant-="background0" style={{ color: "var(--mauve)" }}>{project.status}</span>
            </div>
            <p style={{ color: "var(--subtext0)", marginLeft: "1.5rem", marginTop: "0.3rem" }}>{project.date}</p>
            <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1.5rem", fontFamily: "var(--font-iosevka)", marginTop: ".5lh" }}>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} is-="badge" variant-="flamingo" className={styles.projectTechLabel}>{tech}</span>
              ))}
            </div>
            <p className={styles.readmeBoxContent} style={{ color: "var(--text)", paddingTop: "1rem", paddingLeft: "1.5rem", paddingBottom: ".5lh" }}>{project.description}</p>
            <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1rem" }}>
              {project.sourceCode && (
                <Link href={project.sourceCode}>
                  <button box-="round" variant-="sapphire" className={styles.firstBoxButtons}>Source Code</button>
                </Link>
              )}
              {project.blog && (
                <Link href={project.blog}>
                  <button box-="round" variant-="sapphire" className={styles.firstBoxButtons}>Blog</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 