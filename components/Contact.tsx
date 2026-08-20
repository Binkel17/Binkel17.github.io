import { Mail, GitFork, Link } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "gartmann.thorsten@gmail.com",
    href: "mailto:gartmann.thorsten@gmail.com",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/thorstengartmann",
    href: "https://github.com/thorstengartmann",
    placeholder: true,
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/thorstengartmann",
    href: "https://linkedin.com/in/thorstengartmann",
    placeholder: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-accent">05</span>
          <h2 className="text-4xl font-black tracking-tight text-primary">Kontakt</h2>
        </div>

        <div className="grid grid-cols-12 gap-6">

          {/* Statement */}
          <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
            <p className="text-muted text-lg leading-relaxed">
              Interesse an einer Zusammenarbeit?{" "}
              <span className="text-primary">Schreiben Sie mir gerne.</span>
            </p>
          </div>

          {/* Links */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-7">
            <ul className="flex flex-col divide-y divide-edge">
              {contacts.map(({ icon: Icon, label, value, href, placeholder }) => (
                <li key={label}>
                  <a
                    href={placeholder ? undefined : href}
                    target={!placeholder && href.startsWith("http") ? "_blank" : undefined}
                    rel={!placeholder && href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-5 py-5 group transition-colors ${
                      placeholder
                        ? "cursor-default opacity-40"
                        : "hover:text-accent"
                    }`}
                  >
                    <Icon size={16} className="text-muted shrink-0 group-hover:text-accent transition-colors" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-xs tracking-widest uppercase text-muted">
                        {label}
                        {placeholder && (
                          <span className="ml-2 text-muted">(coming soon)</span>
                        )}
                      </span>
                      <span className="text-sm text-primary">{value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-edge flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted tracking-widest">
            THORSTEN GARTMANN · {new Date().getFullYear()}
          </span>
          <span className="font-mono text-xs text-muted">
            Universität Siegen · HCI · Research through Design
          </span>
        </div>

      </div>
    </section>
  );
}
