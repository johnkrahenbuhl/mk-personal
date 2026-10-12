import melissaImg from "../assets/melissa-portrait.jpg";

export default function About() {
  return (
    <section className="text-left pt-24 pb-14 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image & Badge */}
        <div className="order-2 md:order-1 relative">
          <img
            src={melissaImg}
            alt="Melissa Krahenbuhl"
            className="w-full h-auto object-cover shadow-lg aspect-[4/5]"
          />
          <div className="absolute -bottom-8 -right-8 bg-sand p-6 max-w-xs shadow-xl hidden md:block border border-stone">
            <p className="text-sm italic text-gray-600 font-serif leading-relaxed">
              "My mission is to help others explore what's possible."
            </p>
          </div>
        </div>

        {/* Right Column: Copy Content */}
        <div className="order-1 md:order-2 flex flex-col gap-6">
          <h2 className="text-xs font-bold tracking-[0.2em] text-earth uppercase">
            The Problem That Led Me Here
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
            I stopped asking what's next and started creating it...
          </h3>

          {/* Inner Content Container: Uses flex gap for immaculate paragraph spacing */}
          <div className="flex flex-col gap-8 text-gray-600 font-light leading-relaxed text-base md:text-lg">
            <p>
              For more than 20 years, I worked in corporate accounting and
              administrative roles. I was good at the details, numbers,
              organization, schedules, and making sure everything ran smoothly.
              But the part I loved most was always the people. Supporting them.
              Encouraging them. Helping them succeed. Then life got busy.
            </p>
            <p>
              I started my family and returned to work when my children were
              just 8 weeks old, putting them in daycare so I could get back to
              my career. Before my third child was born, my husband and I made
              the decision for me to stay home. Two years later, our fourth
              child arrived. And honestly I loved being home. I loved being the
              carpool mom and volunteering at school.
            </p>
            <p className="hidden">
              Showing up for practices, games, and all the little moments that
              somehow become the big moments.But I also knew I was someone who
              needed to do something. So I stayed active.
            </p>
            <p className="hidden">
              I volunteered with different organizations, worked part - time at
              my church, and eventually discovered something that gave me a
              tremendous sense of purpose: caregiving.Today, I have the
              privilege of helping seniors and veterans with their daily
              lives—providing support, companionship, and helping them stay
              independent and connected to the things they love.It has been
              incredibly rewarding.
            </p>
            <p className="hidden">
              But as my children grew older and became more independent, I found
              myself asking a different question: What’s next for me ? I knew I
              wanted to keep working.I wanted to contribute financially.I wanted
              to keep helping people. But I also knew what I didn't want. I
              didn't want to spend my life tied to a desk. I didn't want my
              schedule dictated by someone else's schedule.And I didn't want to
              choose between earning an income and having a life.
            </p>
            <p className="hidden">
              I wanted something that could fit into my life—not take over my
              life.Something flexible. Something meaningful. Something I could
              build for myself and grow over time. That search eventually led me
              to start my online business. And it changed the way I looked at
              what was possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
