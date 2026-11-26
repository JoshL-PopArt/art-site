import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

interface ContactSectionProps {
  prefill: { title: string } | null;
}

interface InquiryForm {
  name: string;
  email: string;
  artwork: string;
  message: string;
  website: string;
}

const emptyForm: InquiryForm = { name: '', email: '', artwork: '', message: '', website: '' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

const details = [
  { label: 'Email', value: 'josh.lichtblau@gmail.com', href: 'mailto:josh.lichtblau@gmail.com' },
  { label: 'Phone', value: '(609) 240-4139' },
  { label: 'Studio', value: 'Princeton, New Jersey' },
];

const fieldClass =
  'w-full border border-line bg-white px-3.5 py-3 text-ink outline-none transition-colors focus:border-accent';

export default function ContactSection({ prefill }: ContactSectionProps) {
  const [form, setForm] = useState<InquiryForm>(emptyForm);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (prefill) setForm((current) => ({ ...current, artwork: prefill.title }));
  }, [prefill]);

  const update = (field: keyof InquiryForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((current) => ({ ...current, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;

    if (form.website) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    const { error } = await supabase.from('inquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      artwork: form.artwork.trim() || null,
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }
    setForm(emptyForm);
    setStatus('sent');
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 grid gap-[clamp(28px,6vw,90px)] border-t border-line px-[clamp(20px,5vw,64px)] py-[90px] max-md:py-[60px] md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
    >
      <h2 className="text-[clamp(30px,4vw,48px)] font-light leading-[1.1] tracking-[-0.01em]">Contact</h2>
      <div>
        <dl className="mb-9 grid grid-cols-[auto_1fr] gap-x-7 gap-y-1.5">
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

        <form onSubmit={handleSubmit} className="grid max-w-[520px] gap-[18px]">
          <label className="grid gap-1.5 text-[15px] text-soft">
            Your name
            <input
              className={fieldClass}
              name="name"
              required
              maxLength={120}
              autoComplete="name"
              value={form.name}
              onChange={update('name')}
            />
          </label>
          <label className="grid gap-1.5 text-[15px] text-soft">
            Your email
            <input
              className={fieldClass}
              type="email"
              name="email"
              required
              maxLength={254}
              autoComplete="email"
              value={form.email}
              onChange={update('email')}
            />
          </label>
          <label className="grid gap-1.5 text-[15px] text-soft">
            Artwork you are asking about
            <input
              className={fieldClass}
              name="artwork"
              placeholder="Optional"
              maxLength={200}
              value={form.artwork}
              onChange={update('artwork')}
            />
          </label>
          <label className="grid gap-1.5 text-[15px] text-soft">
            Message
            <textarea
              className={`${fieldClass} min-h-[130px] resize-y`}
              name="message"
              required
              maxLength={5000}
              value={form.message}
              onChange={update('message')}
            />
          </label>

          <div aria-hidden="true" className="hidden">
            <label>
              Leave this empty
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                value={form.website}
                onChange={update('website')}
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-ink px-7 py-3.5 font-medium text-wall transition-colors hover:bg-accent hover:text-white disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p role="status" className="text-ink">
                Thank you. Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-accent">
                Something went wrong and your message was not sent. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
