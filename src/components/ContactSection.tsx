// Edit the three values below. Leave one as '' (empty quotes) to hide that row.
const EMAIL = 'josh.lichtblau@gmail.com';
const PHONE = '(609) 240-4139';
const STUDIO = 'Princeton, NJ';

const details = [
  { label: 'Email', value: EMAIL, href: EMAIL ? `mailto:${EMAIL}` : '' },
  { label: 'Phone', value: PHONE, href: PHONE ? `tel:${PHONE.replace(/[^+\d]/g, '')}` : '' },
  { label: 'Studio', value: STUDIO, href: '' },
].filter((item) => item.value);

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 grid gap-[clamp(28px,6vw,90px)] border-t border-line px-[clamp(20px,5vw,64px)] py-[90px] max-md:py-[60px] md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
    >
      <h2 className="text-[clamp(30px,4vw,48px)] font-light leading-[1.1] tracking-[-0.01em]">Contact</h2>
      <div>
        <p className="mb-6 max-w-[40ch] text-soft">
          To ask about an available piece, get in touch using the details below.
        </p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-7 gap-y-1.5 text-[18px]">
          {details.map((item) => (
            <div key={item.label} className="contents">
              <dt className="text-soft">{item.label}</dt>
              <dd>
                {item.href ? (
                  <a href={item.href} className="no-underline hover:text-accent">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
