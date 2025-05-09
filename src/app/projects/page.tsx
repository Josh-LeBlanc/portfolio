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
      <h1>Projects</h1>
      <div style={{ marginTop: "2rem" }}>
        {projects.map((project, index) => (
          <div key={index} box-="square" style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>{project.title}</h2>
              <span is-="badge" variant-="green">{project.status}</span>
            </div>
            <p style={{ marginTop: "1rem" }}>{project.description}</p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} is-="badge" variant-="mauve">{tech}</span>
              ))}
            </div>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
              <button variant-="blue">View Project</button>
              <button variant-="sapphire">Source Code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 