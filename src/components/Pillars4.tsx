import { useState } from "react";
import { PlaneTakeoff, Pause, Waypoints, ArrowDownCircle } from "lucide-react";

export function Pillars() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const pillars = [
    {
      icon: (
        <Pause className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
      ),
      title: "Delayed Dreams",
      description: (
        <div className="text-left space-y-4">
          <p className="pb-4">
            Long before I found my current path, I knew I wanted to help people.
            Personal development has been a huge part of my life for more than
            25 years. That passion eventually led me to become a certified Life
            Coach.
          </p>
          <p className="pb-4">
            I had a vision. I imagined creating a business where I could
            encourage people, help them believe in themselves, and support them
            in creating a better life.
          </p>
          <p className="pb-4">
            But sometimes the dream you have isn't meant for that moment. Around
            the same time I became a certified coach, I welcomed my fourth child
            and my priorities shifted. Being present for my children became my
            focus.
          </p>
          <p className="pb-4">
            I wanted to be there for the school events, the practices, the
            games, the everyday moments that you don't get back. So my coaching
            business never really took off.
          </p>
          <p className="pb-3">But here's the thing:</p>
          {/* Issue on Samsung Mobile with the below commented out h2 tag */}
          {/* <h2 className="pb-3 italic font-bold text-teal-950">
            The dream didn't disappear, it just went on the shelf.
          </h2> */}
          <div className="text-[#08060d] [font-family:var(--heading)] text-[24px] font-medium italic tracking-[-0.24px] leading-[28.32px] text-left cursor-pointer block pb-[13.5px] mb-2 antialiased w-full max-w-[394px]">
            The dream didn't disappear, it just went on the shelf.
          </div>
          <p className="">
            Years later, I would realize that it wasn't gone at all. I was
            simply waiting for the right time, and the right opportunity, to
            bring it back to life.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <Waypoints className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
      ),
      title: "Pivotal Moment",
      description: (
        <div className="text-left space-y-4">
          <p className="pb-4">
            Then life threw us a curveball. My husband's company required
            employees to return to the office, but they had permanently closed
            the office in our area. Suddenly, he was commuting long distance to
            another city, an enormous change for our family.
          </p>
          <p className="white-space-normal pb-4">
            We had a decision to make. We needed additional income and also{" "}
            <strong className="font-bold text-slate-900"> flexibility</strong>.
          </p>
          <p className=" hidden pb-4">
            We didn't want one person's career to come at the expense of our
            family life. We wanted options, wanted to be able to adapt, and most
            importantly, we wanted to create a future where we weren't
            completely dependent on someone else's decisions.
          </p>
          <p className="pb-4">
            That's when something clicked. I realized I could keep waiting for
            the "perfect time" or I could{" "}
            <strong className="font-bold text-slate-900">
              create my own path
            </strong>
            .
          </p>
          <p className="pb-4">
            So I decided to build something of my own. Not because I wanted
            another job. Because I wanted{" "}
            <span className="font-bold text-slate-950"> choice</span>:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-bold text-slate-900">
            <li>More flexibility.</li>
            <li> More independence.</li>
            <li> More purpose.</li>
            <li> More control over my time.</li>
            <li>
              {" "}
              And the opportunity to create something that could grow with me.
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: (
        <PlaneTakeoff className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
      ),
      title: "Purpose & Freedom",
      description: (
        <div className="text-left space-y-4">
          <p className="pb-4">
            I wanted something that could fit into my life. Something flexible,
            meaningful, and that I could build for myself and grow over time.
          </p>
          <p className="pb-4">
            That search eventually led me to I lead a global online education
            platform dedicated to personal and leadership development. Working
            entirely remotely, I empower ambitious individuals worldwide to
            design a more intentional, spacious, and financially aligned life,
            proving that you never have to sacrifice your lifestyle, well-being,
            or earning potential to achieve true success.
          </p>
          <p className="pb-4">
            Today, I'm passionate about helping other people discover that same
            possibility—especially those who find themselves asking,
          </p>
          {/* Issue on Samsung Mobile with the below commented out h2 tag */}
          {/* <h2 className="italic font-bold text-teal-950">
            "What's next for me?"
          </h2> */}
          <div className="text-[#08060d] [font-family:var(--heading)] text-[24px] font-medium italic tracking-[-0.24px] leading-[28.32px] text-left cursor-pointer block pb-[13.5px] mb-2 antialiased w-full max-w-[394px]">
            "What's next for me?"
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 -mt-32 relative z-20 items-start">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() =>
                  setExpandedIndex((current) => (current === idx ? null : idx))
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setExpandedIndex((current) =>
                      current === idx ? null : idx,
                    );
                  }
                }}
                className="bg-white rounded-2xl p-10 shadow-xl shadow-teal-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-200 group flex flex-col cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  {pillar.icon}
                </div>

                <h3 className="text-2xl font-serif text-teal-950 font-bold mb-4 shrink-0">
                  {pillar.title}
                </h3>

                <div className="relative w-full">
                  <div
                    className={`text-slate-600 leading-relaxed overflow-hidden max-h-[250px] ${
                      isExpanded ? "max-h-[1500px]" : ""
                    } group-hover:max-h-[1500px] transition-[max-height] duration-700 ease-in-out`}
                  >
                    {pillar.description}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ${
                      isExpanded ? "opacity-0" : "opacity-100"
                    } group-hover:opacity-0`}
                  />
                </div>

                <div
                  className={`mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm transition-opacity duration-300 ${
                    isExpanded ? "opacity-0" : "opacity-100"
                  } group-hover:opacity-0`}
                >
                  <span>Hover or Tap to read full story </span>
                  <ArrowDownCircle className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
