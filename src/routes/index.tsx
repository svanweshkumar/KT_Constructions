import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Compass,
  DraftingCompass,
  Hammer,
  Handshake,
  HardHat,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { heroImage, logoDark, logoLight, projects, siteUrl } from "@/lib/project-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KT Construction — Building with Structure & Purpose" },
      {
        name: "description",
        content:
          "KT Construction delivers thoughtful residential construction, structural design, renovation, and project management in Shivamogga.",
      },
      { property: "og:title", content: "KT Construction — Building with Structure & Purpose" },
      {
        property: "og:description",
        content: "Considered spaces, sound structures, and dependable construction in Shivamogga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
  }),
  component: Index,
});

const navItems = [
  ["Story", "story"],
  ["Approach", "approach"],
  ["Why us", "why-us"],
  ["Work", "work"],
  ["Services", "services"],
  ["Testimonials", "testimonials"],
] as const;

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Residential construction",
    body: "Complete homes built with exacting workmanship, from ground preparation to the final finish.",
  },
  {
    number: "02",
    icon: DraftingCompass,
    title: "Structural design",
    body: "Clear, efficient structural systems shaped by engineering knowledge and real site experience.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Renovation & interiors",
    body: "Thoughtful transformations that improve flow, function, durability, and everyday comfort.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Project management",
    body: "Coordinated teams, materials, schedules, and quality checks—handled from one dependable point.",
  },
];

const process = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Listen",
    body: "We understand your site, priorities, budget, and how you want to live.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Plan",
    body: "We align structure, design, schedule, and cost before construction begins.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    body: "Our team executes with measured quality control and clear communication.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Handover",
    body: "We inspect every detail and deliver a space ready for its next chapter.",
  },
];

const testimonialReviews = [
  {
    name: "Residential client",
    location: "Shivamogga",
    quote:
      "The team made each stage feel organised and transparent. The quality of finish speaks for itself.",
  },
  {
    name: "Homeowner",
    location: "Karnataka",
    quote:
      "Strong technical knowledge, practical suggestions, and dependable execution from start to handover.",
  },
  {
    name: "Villa owner",
    location: "Bengaluru",
    quote:
      "They explained everything clearly and delivered a home that feels thoughtful in every room.",
  },
  {
    name: "Commercial client",
    location: "Shimoga",
    quote: "The site coordination was excellent and the build quality was consistent from day one.",
  },
  {
    name: "Return client",
    location: "Karnataka",
    quote:
      "We chose them again because the process stayed honest, calm, and genuinely professional.",
  },
];

function CountUp({
  end,
  suffix = "",
  divisor = 1,
}: {
  end: number;
  suffix?: string;
  divisor?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        if (reduceMotion) {
          setValue(end);
          return;
        }
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - started) / 1200, 1);
          setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end]);

  const displayValue = divisor === 1 ? String(value) : (value / divisor).toFixed(1);
  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const workTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      message: String(formData.get("message")),
    };

    setSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      } else {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        setFormError(result?.error ?? "We couldn't send your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("We couldn't send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const scrollWork = (direction: number) =>
    workTrack.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.72, 720),
      behavior: "smooth",
    });
  const brandLogo = scrolled ? logoDark : logoLight;
  const [activeReview, setActiveReview] = useState(0);
  const nextReview = () => setActiveReview((current) => (current + 1) % testimonialReviews.length);
  const prevReview = () =>
    setActiveReview(
      (current) => (current - 1 + testimonialReviews.length) % testimonialReviews.length,
    );
  const reviewA = testimonialReviews[activeReview];
  const reviewB = testimonialReviews[(activeReview + 1) % testimonialReviews.length];

  return (
    <main className="page-enter overflow-hidden bg-background text-foreground">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a
          href="#home"
          className="brand-link"
          aria-label="KT Construction home"
          onClick={closeMenu}
        >
          <img src={brandLogo} alt="KT Construction" className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-cta">
          Start a project <ArrowRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id], index) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                <span>0{index + 1}</span>
                {label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu}>
              <span>07</span>Contact
            </a>
          </nav>
        )}
      </header>

      <section id="home" className="hero-section">
        <img
          src={heroImage}
          alt="KT Construction home exterior"
          width={1024}
          height={768}
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light hero-reveal hero-reveal-one">
            <span /> KT Construction · Builders & Engineers
          </p>
          <h1 className="hero-reveal hero-reveal-two">
            <span>Building your visions,</span>
            <br />
            <span>Creating reality.</span>
          </h1>
          <div className="hero-bottom" />
        </div>
        <aside className="hero-social" aria-label="Social media">
          <span className="hero-social-line" />
          <a
            href="https://www.instagram.com/ashokk1448/"
            target="_blank"
            rel="noreferrer"
            aria-label="KT Construction on Instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/ashok.mohan.3152"
            target="_blank"
            rel="noreferrer"
            aria-label="KT Construction on Facebook"
          >
            <Facebook />
          </a>
        </aside>
      </section>

      <section id="story" className="section story-section">
        <div className="section-tag">
          <span>01</span> Our story
        </div>
        <div className="story-heading" data-reveal>
          <p className="eyebrow">
            <span /> Built on engineering
          </p>
          <h2>
            Crafted with purpose.
            <br />
            <em>Built for life.</em>
          </h2>
        </div>
        <div className="story-copy" data-reveal>
          <p className="lead">
            KT Construction brings engineering precision and thoughtful craft together to create
            places that feel right—and endure.
          </p>
          <p>
            Founded by <strong>Ashok KT, B.E., M.E. Tech in Structures</strong>, our practice is
            grounded in a direct belief: quality construction starts with clear thinking. We listen
            carefully, plan responsibly, and build with respect for every material, timeline, and
            client.
          </p>
          <a href="#contact" className="text-link">
            Meet us with your idea <ArrowRight size={17} />
          </a>
        </div>
        <div className="story-statement" data-reveal>
          FROM A FIRST SKETCH
          <br />
          TO THE FINAL KEY.
        </div>
      </section>

      <section id="approach" className="section dark-section approach-section">
        <div className="section-tag inverse">
          <span>02</span> Our approach
        </div>
        <div className="approach-intro" data-reveal>
          <h2>
            A clear path
            <br />
            from idea to <em>place.</em>
          </h2>
          <p>
            No hidden turns. Just a considered process that keeps you informed from the first
            conversation to handover.
          </p>
        </div>
        <div className="process-grid">
          {process.map(({ number, icon: Icon, title, body }) => (
            <article key={number} className="process-item" data-reveal>
              <span className="process-number">{number}</span>
              <Icon className="process-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="section why-section">
        <div className="why-aside" data-reveal>
          <div className="section-tag">
            <span>03</span> Why us
          </div>
          <h2>
            Built right.
            <br />
            Not just
            <br />
            <em>built fast.</em>
          </h2>
          <div className="quality-list">
            <span>
              <Check size={15} /> Structural expertise
            </span>
            <span>
              <Check size={15} /> Honest coordination
            </span>
            <span>
              <Check size={15} /> Detail-led quality
            </span>
            <span>
              <Check size={15} /> One accountable team
            </span>
          </div>
        </div>
        <div className="why-main" data-reveal>
          <p className="why-lead">
            We combine structural intelligence with careful execution, so the finished space works
            beautifully long after handover.
          </p>
          <div className="metric-grid">
            <article>
              <strong>
                <CountUp end={1} suffix="×" />
              </strong>
              <h3>Engineer-led</h3>
              <p>Decisions are grounded in technical understanding—not guesswork.</p>
            </article>
            <article className="metric-accent">
              <ShieldCheck />
              <h3>Quality checked</h3>
              <p>Every key stage is reviewed against drawings and standards.</p>
            </article>
            <article>
              <strong>
                <CountUp end={100} suffix="%" />
              </strong>
              <h3>Clear ownership</h3>
              <p>A single team stays accountable from planning to completion.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="work-header" data-reveal>
          <div className="section-tag">
            <span>04</span> Selected work
          </div>
          <h2>
            Spaces with
            <br />
            lasting <em>value.</em>
          </h2>
          <p>Residential environments where structure, material, and daily life come together.</p>
        </div>
        <div className="work-controls" data-reveal>
          <p>Drag or scroll to explore</p>
          <div>
            <button type="button" aria-label="Previous projects" onClick={() => scrollWork(-1)}>
              <ChevronLeft />
            </button>
            <button type="button" aria-label="Next projects" onClick={() => scrollWork(1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          className="projects-track"
          ref={workTrack}
          tabIndex={0}
          aria-label="KT Construction project gallery"
        >
          {projects.map((project, index) => (
            <Link
              to="/projects/$projectId"
              params={{ projectId: project.id }}
              key={project.id}
              className="project-card-link"
              data-reveal
              style={
                {
                  "--delay": `${Math.min(index, 4) * 70}ms`,
                } as CSSProperties
              }
            >
              <figure
                className="project-card"
                style={
                  {
                    "--project-scale": String(project.zoom ?? 1),
                    "--project-position": project.position ?? "center center",
                    "--project-fit": project.fit ?? "cover",
                  } as CSSProperties
                }
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                />
                <figcaption>
                  <span>
                    <b>0{index + 1}</b>
                    <strong>{project.title}</strong>
                  </span>
                  <small>{project.type}</small>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
        <div className="gallery-link-row" data-reveal>
          <Link to="/projects" className="gallery-link">
            View all projects
          </Link>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="services-heading" data-reveal>
          <div className="section-tag inverse">
            <span>05</span> What we do
          </div>
          <h2>
            From ground
            <br />
            to <em>finish.</em>
          </h2>
        </div>
        <div className="services-list">
          {services.map(({ number, icon: Icon, title, body }) => (
            <a key={number} href="#contact" className="service-row" data-reveal>
              <span>{number}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section testimonials-section">
        <div className="testimonial-title" data-reveal>
          <div className="section-tag">
            <span>06</span> Testimonials
          </div>
          <h2>
            Built on
            <br />
            <em>trust.</em>
          </h2>
        </div>
        <div className="testimonial-grid" data-reveal>
          <article className="rating-card">
            <strong>
              <CountUp end={5} divisor={1} />
            </strong>
            <span>/ 5</span>
            <div className="stars">★★★★★</div>
            <p>Care, clarity, and craftsmanship at every step.</p>
          </article>
          <blockquote>
            <div className="quote-mark">“</div>
            <p>{reviewA.quote}</p>
            <footer>
              {reviewA.name} <span>· {reviewA.location}</span>
            </footer>
          </blockquote>
          <div className="testimonial-side">
            <blockquote className="dark-quote">
              <div className="quote-mark">“</div>
              <p>{reviewB.quote}</p>
              <footer>
                {reviewB.name} <span>· {reviewB.location}</span>
              </footer>
            </blockquote>
            <div className="testimonial-controls">
              <button type="button" aria-label="Previous testimonial" onClick={prevReview}>
                <ChevronLeft />
              </button>
              <button type="button" aria-label="Next testimonial" onClick={nextReview}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-top">
          <div>
            <div className="section-tag inverse">
              <span>07</span> Contact
            </div>
            <h2>
              Let’s build
              <br />
              something <em>lasting.</em>
            </h2>
          </div>
          <p>
            Tell us what you’re planning. We’ll start with a clear conversation about your site,
            scope, and next steps.
          </p>
        </div>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submit}>
            <div className="field-pair">
              <label>
                <span>Your name</span>
                <input name="name" required autoComplete="name" placeholder="Enter your name" />
              </label>
              <label>
                <span>Phone number</span>
                <input
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Your phone number"
                />
              </label>
            </div>
            <label>
              <span>Email address</span>
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              <span>Tell us about your project</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Type of project, location, and anything useful to know"
              />
            </label>
            <button className="submit-button" type="submit" disabled={submitting}>
              <span>
                {submitting ? "Sending..." : sent ? "Enquiry noted" : "Request a consultation"}
              </span>
              {sent ? <Check /> : <ArrowRight />}
            </button>
            {sent && (
              <p className="form-success" role="status">
                Thank you. Please call or email us to continue your enquiry.
              </p>
            )}
            {formError && (
              <p className="form-error" role="alert">
                {formError}
              </p>
            )}
          </form>
          <div className="contact-details">
            <div className="detail-block">
              <span>Call</span>
              <a href="tel:+919019937834">
                <Phone size={18} /> +91 90199 37834
              </a>
            </div>
            <div className="detail-block">
              <span>Email</span>
              <a href="mailto:ashokkt1994@gmail.com">
                <Mail size={18} /> ashokkt1994@gmail.com
              </a>
            </div>
            <div className="detail-block">
              <span>Visit</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mobile+mart%2C+60ft+road%2C+Vinobha+Nagara%2C+Shivamogga%2C+577204"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={18} /> Mobile mart, 60ft road,
                <br />
                Vinobha Nagara, Shivamogga 577204
              </a>
            </div>
            <div className="social-row">
              <a href="https://www.instagram.com/ashokk1448/" target="_blank" rel="noreferrer">
                <Instagram />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/ashok.mohan.3152" target="_blank" rel="noreferrer">
                <Facebook />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="KT Construction location in Vinobha Nagara, Shivamogga"
            src="https://www.google.com/maps?q=Mobile%20mart%2C%2060ft%20road%2C%20Vinobha%20Nagara%2C%20Shivamogga%2C%20577204&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Mobile+mart%2C+60ft+road%2C+Vinobha+Nagara%2C+Shivamogga%2C+577204"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <a href="#home" aria-label="Back to top">
            <img src={logoDark} alt="KT Construction" width="350" height="142" />
          </a>
          <p>
            Engineered with purpose.
            <br />
            Built with care.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h3>Navigate</h3>
          <a href="#home">Home</a>
          <a href="#story">About</a>
          <a href="#work">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-meta">
          <div className="social-links" aria-label="Social media">
            <a
              href="https://www.instagram.com/ashokk1448/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/ashok.mohan.3152"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
          <span>© 2026 KT Construction</span>
          <span>Shivamogga, Karnataka</span>
        </div>
      </footer>
    </main>
  );
}
