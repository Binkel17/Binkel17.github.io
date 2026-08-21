export default function About() {
  return (
    <section id="about" className="border-b border-edge">
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-accent">02</span>
          <h2 className="text-4xl font-black tracking-tight text-primary">About</h2>
        </div>

        <div className="grid grid-cols-12 gap-6">

          {/* Left column — main text */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 text-muted text-lg leading-relaxed">
            <p>
              Ich bin Master-Student im Bereich HCI an der
              Universität Siegen. Meine Arbeit bewegt sich an der Schnittstelle
              von Mensch-Computer-Interaktion, Künstlicher Intelligenz und
              Urban Experience Design.
            </p>
            <p>
              Mein methodischer Ansatz ist Research through Design:
              ich entwickle und erforsche interaktive Systeme nicht nur theoretisch,
              sondern durch das Entwerfen und Erproben konkreter Prototypen, 
              mit dem Ziel, neue Erkenntnisse über die Mensch-Technik-Beziehung
              zu gewinnen.
            </p>
            <p>
              Aktuell erforsche ich in meiner Master Thesis, wie KI-gestützte
              Systeme urbane Experiences bereichern können, inspiriert von
              menschlichen Stadtführern, aber skaliert durch generative KI.
              Parallel arbeite ich als wissenschaftliche Hilfskraft im
              BMWK-geförderten Projekt VelocityAdapt an digitalen Zwillingen
              und Extended Reality für klimaresistente Städte.
            </p>
          </div>

          {/* Right column — quick facts */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-8 font-mono text-xs">
            <div>
              <p className="tracking-widest uppercase text-accent mb-3">Universität</p>
              <p className="text-primary">Universität Siegen</p>
              <p className="text-muted">Master of Science</p>
            </div>
            <div>
              <p className="tracking-widest uppercase text-accent mb-3">Fokus</p>
              <ul className="flex flex-col gap-1 text-muted">
                <li>Mensch-Computer-Interaktion</li>
                <li>Künstliche Intelligenz</li>
                <li>Urban Experience Design</li>
                <li>Extended Reality</li>
              </ul>
            </div>
            <div>
              <p className="tracking-widest uppercase text-accent mb-3">Sprachen</p>
              <ul className="flex flex-col gap-1 text-muted">
                <li>Deutsch — Muttersprache</li>
                <li>Englisch — fließend</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
