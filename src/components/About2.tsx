import familyImg from "../assets/melissa_family_photos.png";

export default function About2() {
  return (
    // Added overflow-hidden to prevent horizontal scrolling on 320px viewports
    <section className="text-left pt-0 pb-28 bg-white overflow-hidden">
      {/* Adjusted padding: px-4 for 320px, sm:px-6 for standard mobile, md:px-12 for desktop */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column on Desktop (Stacked Bottom on Mobile): Copy Content */}
        <div className="order-2 md:order-1 flex flex-col gap-6">
          <h2 className="hidden text-xs font-bold tracking-[0.2em] text-earth uppercase">
            The Problem That Led Me Here
          </h2>
          <h3 className="hidden font-serif text-4xl md:text-5xl text-charcoal leading-tight">
            I stopped asking what's next and started creating it...
          </h3>

          {/* Inner Content Container: Added break-words to ensure long words don't force width beyond 320px */}
          <div className="flex flex-col gap-8 text-gray-600 font-light leading-relaxed text-base md:text-lg break-words">
            <p className="hidden">
              For more than 20 years, I worked in corporate accounting and
              administrative roles. I was good at the details,numbers,
              organization, schedules, and making sure everything ran
              smoothly.But the part I loved most was always the people.
              Supporting them.Encouraging them. Helping them succeed. Then life
              got busy.
            </p>
            <p className="hidden">
              I started my family and returned to work when my children were
              just 8 weeks old, putting them in daycare so I could get back to
              my career.Before my third child was born, my husband and I made
              the decision that financially, it made more sense for me to stay
              home.Two years later, our fourth child arrived.And honestly ? I
              loved being home.I loved being the carpool mom.Volunteering at
              school.
            </p>
            <p className="-mt-8">
              I showed up for every practice, every game, and all the little
              moments that defined our lives. But deep down, I always knew I was
              destined for more, so I never stopped moving.
            </p>
            <p>
              I volunteered with different organizations, worked part-time at my
              church, and eventually discovered something that gave me a
              tremendous sense of purpose: caregiving. Today, I have the
              privilege of helping seniors and veterans with their daily lives,
              providing support, companionship, and helping them stay
              independent and connected to the things they love. It has been an
              honor and incredibly rewarding.
            </p>
            <p>
              But as my children grew older and became more independent, I found
              myself asking a different question: What’s next for me? I knew I
              wanted to keep working. I wanted to contribute financially. I
              wanted to keep helping people. But I also knew what I didn't want.
              I didn't want to spend my life tied to a desk. I didn't want my
              schedule dictated by someone else's schedule. And I didn't want to
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

        {/* Right Column on Desktop (Stacked Top on Mobile): Image & Badge */}
        <div className="order-1 md:order-2 relative">
          <img
            src={familyImg}
            alt="Melissa Krahenbuhl Leisure"
            className="w-full h-auto object-cover shadow-lg aspect-[4/5]"
          />
          <div className="bg-sand p-6 shadow-xl border border-stone w-full mt-6 relative z-10 md:absolute md:-bottom-8 md:-left-8 md:max-w-xs md:mt-0">
            <p className="text-sm italic text-gray-600 font-serif leading-relaxed">
              "Imagine building a life, where personal development, meaningful
              relationships, and financial freedom are all within reach."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
