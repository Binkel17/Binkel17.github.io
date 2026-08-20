import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="start"
      className="min-h-screen flex flex-col justify-center border-b border-edge relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 py-32 w-full">
        <div className="grid grid-cols-12 gap-6 items-start">

          {/* Main content — 7 columns */}
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-8">
              HCI Researcher · AI · Urban Experience Design
            </p>

            <h1 className="text-7xl sm:text-8xl lg:text-[8rem] font-black tracking-tight leading-[0.9] text-primary mb-10">
              Thorsten
              <br />
              Gartmann
            </h1>

            <p className="text-muted text-lg leading-relaxed max-w-xl mb-12">
              Ich erforsche die Schnittstelle von Mensch-Computer-Interaktion,
              KI und urbaner Erfahrung mit dem Ansatz Research through Design.
              Aktuell an der Universität Siegen.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-accent/85 transition-colors"
            >
              Projekte ansehen
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Profile image — 4 columns, offset by 1 */}
          <div className="hidden lg:block col-span-4 col-start-9">
            <div className="relative aspect-3/4 w-full overflow-hidden border border-edge">
              <Image
                src="/profile.png"
                alt="Thorsten Gartmann"
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </div>
            <div className="flex flex-col gap-1 mt-4 font-mono text-xs text-muted text-right leading-loose">
              <span>Universität Siegen</span>
              <span>Research through Design</span>
              <span>HCI · AI · XR</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 w-16 h-0.5 bg-accent" />
    </section>
  );
}
