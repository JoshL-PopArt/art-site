const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[5] flex items-center justify-between border-b border-line bg-wall px-[clamp(20px,5vw,64px)] py-[18px]">
      <a href="#top" className="font-medium tracking-[0.04em] no-underline">
        Josh Lichtblau
      </a>
      <nav className="flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="ml-4 text-base text-soft no-underline transition-colors hover:text-ink md:ml-7"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
