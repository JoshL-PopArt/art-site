export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 grid gap-[clamp(28px,6vw,90px)] border-t border-line px-[clamp(20px,5vw,64px)] py-[90px] max-md:py-[60px] md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
    >
      <h2 className="text-[clamp(30px,4vw,48px)] font-light leading-[1.1] tracking-[-0.01em]">
        About the artist
      </h2>
      <div className="max-w-[60ch] text-[18px] leading-[1.6]">
        <p className="mb-4">
          I am a self-taught painter who focuses on oil on canvas or wood. I paint in an abstract style because I do
          not possess technical skills and, consequently, am unable to paint representationally. I paint shape and
          color combinations that I enjoy looking at. I try to create pieces that give the viewer a sense of depth and
          perspective in a colorful environment.
        </p>
        <p className="mb-4">
          My work is inspired by nature, but not necessarily reflective of actual objects found in nature or the
          man-made world (because I am unable to do that). I view art as a means for people to experience the same
          subject, while each &ldquo;seeing&rdquo; different things and having different emotions.
        </p>
        <p className="mb-4">
          My goal is to create pieces that leave viewers with a positive feeling, or at least a feeling other than
          repulsion. I plan to continue painting for as long as I am allowed to do so.
        </p>
        <div className="mt-6 grid aspect-[4/5] w-[min(100%,280px)] place-items-center bg-line text-sm text-soft">
          Artist photo
        </div>
      </div>
    </section>
  );
}
