const categories = [
  {
    label: "Design & Prototyping",
    skills: ["Figma", "Adobe Suite"],
  },
  {
    label: "Development",
    skills: ["Python", "React", "Next.js", "Unity"],
  },
  {
    label: "Forschungsmethoden",
    skills: ["Interviews", "Fokusgruppen", "Workshops", "Thematische Analyse"],
  },
  {
    label: "Projektmanagement",
    skills: ["Notion", "Jira"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-edge">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-accent">04</span>
          <h2 className="text-4xl font-black tracking-tight text-primary">Skills</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-edge">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-canvas p-8">
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-6">
                {cat.label}
              </p>
              <ul className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-primary text-sm font-medium border-l-2 border-edge pl-4"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
