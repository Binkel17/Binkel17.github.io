import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  role: string;
  status: "In Progress" | "Active" | "Completed";
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    title: "KI-Stadtführer",
    role: "Master Thesis",
    status: "In Progress",
    description:
      "KI-gestützte narrative urbane Erkundung — inspiriert von menschlichen Reiseführern, skaliert durch KI. Untersucht, wie sich städtische Orte durch algorithmisch generierte, personalisierte Erzählungen erleben lassen.",
    tags: ["KI", "Urban Experience", "HCI", "Research through Design"],
  },
  {
    title: "VelocityAdapt",
    role: "Wissenschaftliche Hilfskraft · BMWK-gefördert",
    status: "Active",
    description:
      "Klimaanpassung in Städten mittels urbaner digitaler Zwillinge. Themen: 3D-Stadtmodelle, Extended Reality (AR/VR), KI-gestützte Geodatenanalyse und partizipative Bürgerbeteiligung.",
    tags: ["Digitale Zwillinge", "XR", "AR/VR", "KI", "Klimaanpassung"],
    link: "https://velocityadapt.de",
    linkLabel: "velocityadapt.de",
  },
  {
    title: "ENVIKO",
    role: "Wissenschaftliche Hilfskraft · BMWK-gefördert",
    status: "Completed",
    description:
      "Partizipative Visualisierung der Energiewende. Entwicklung von AR/VR-Erfahrungen und gamifizierten Formaten für menschzentrierte Bürgerbeteiligung im Bereich erneuerbare Energien.",
    tags: ["AR/VR", "Gamification", "Energiewende", "Bürgerbeteiligung"],
    link: "https://nviko.de",
    linkLabel: "nviko.de",
  },
];

const statusStyles: Record<Project["status"], string> = {
  "In Progress": "border-accent text-accent",
  Active: "border-primary text-primary",
  Completed: "border-muted text-muted",
};

export default function Projects() {
  return (
    <section id="projects" className="border-b border-edge">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-accent">03</span>
          <h2 className="text-4xl font-black tracking-tight text-primary">Projekte</h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-edge">
          {projects.map((project) => (
            <article key={project.title} className="bg-canvas p-8 flex flex-col gap-6 group">

              {/* Status badge */}
              <span
                className={`self-start font-mono text-xs tracking-widest uppercase border px-3 py-1 ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>

              {/* Title & role */}
              <div>
                <h3 className="text-xl font-black tracking-tight text-primary mb-1">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-muted">{project.role}</p>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-xs text-muted border border-edge px-2 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* External link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted hover:text-accent transition-colors mt-auto"
                >
                  <ExternalLink size={12} />
                  {project.linkLabel}
                </a>
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
