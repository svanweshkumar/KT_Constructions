import { r as __toESM } from "../_runtime.mjs";
import { i as projects, n as logoDark, r as logoLight, t as heroImage } from "./project-data-uQaQmEAh.mjs";
import { i as require_react } from "../_libs/@react-email/render+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Check, a as Menu, c as Instagram, d as Hammer, f as Facebook, g as ChevronLeft, h as ChevronRight, i as MessageSquareText, l as HardHat, m as Compass, n as ShieldCheck, o as MapPin, p as DraftingCompass, r as Phone, s as Mail, t as X, u as Handshake, v as Building2, y as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0hI-clmp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	["Story", "story"],
	["Approach", "approach"],
	["Why us", "why-us"],
	["Work", "work"],
	["Services", "services"],
	["Testimonials", "testimonials"]
];
var services = [
	{
		number: "01",
		icon: Building2,
		title: "Residential construction",
		body: "Complete homes built with exacting workmanship, from ground preparation to the final finish."
	},
	{
		number: "02",
		icon: DraftingCompass,
		title: "Structural design",
		body: "Clear, efficient structural systems shaped by engineering knowledge and real site experience."
	},
	{
		number: "03",
		icon: Compass,
		title: "Renovation & interiors",
		body: "Thoughtful transformations that improve flow, function, durability, and everyday comfort."
	},
	{
		number: "04",
		icon: HardHat,
		title: "Project management",
		body: "Coordinated teams, materials, schedules, and quality checks—handled from one dependable point."
	}
];
var process = [
	{
		number: "01",
		icon: MessageSquareText,
		title: "Listen",
		body: "We understand your site, priorities, budget, and how you want to live."
	},
	{
		number: "02",
		icon: Compass,
		title: "Plan",
		body: "We align structure, design, schedule, and cost before construction begins."
	},
	{
		number: "03",
		icon: Hammer,
		title: "Build",
		body: "Our team executes with measured quality control and clear communication."
	},
	{
		number: "04",
		icon: Handshake,
		title: "Handover",
		body: "We inspect every detail and deliver a space ready for its next chapter."
	}
];
var testimonialReviews = [
	{
		name: "Residential client",
		location: "Shivamogga",
		quote: "The team made each stage feel organised and transparent. The quality of finish speaks for itself."
	},
	{
		name: "Homeowner",
		location: "Karnataka",
		quote: "Strong technical knowledge, practical suggestions, and dependable execution from start to handover."
	},
	{
		name: "Villa owner",
		location: "Bengaluru",
		quote: "They explained everything clearly and delivered a home that feels thoughtful in every room."
	},
	{
		name: "Commercial client",
		location: "Shimoga",
		quote: "The site coordination was excellent and the build quality was consistent from day one."
	},
	{
		name: "Return client",
		location: "Karnataka",
		quote: "We chose them again because the process stayed honest, calm, and genuinely professional."
	}
];
function CountUp({ end, suffix = "", divisor = 1 }) {
	const ref = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			observer.disconnect();
			if (reduceMotion) {
				setValue(end);
				return;
			}
			const started = performance.now();
			const tick = (now) => {
				const progress = Math.min((now - started) / 1200, 1);
				setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
				if (progress < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .5 });
		observer.observe(node);
		return () => observer.disconnect();
	}, [end]);
	const displayValue = divisor === 1 ? String(value) : (value / divisor).toFixed(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [displayValue, suffix]
	});
}
function Index() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)("");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const workTrack = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const targets = document.querySelectorAll("[data-reveal]");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			targets.forEach((target) => target.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8%"
		});
		targets.forEach((target) => observer.observe(target));
		return () => observer.disconnect();
	}, []);
	const submit = async (event) => {
		event.preventDefault();
		if (submitting) return;
		const form = event.currentTarget;
		const formData = new FormData(form);
		const data = {
			name: String(formData.get("name")),
			email: String(formData.get("email")),
			phone: String(formData.get("phone")),
			message: String(formData.get("message"))
		};
		setSubmitting(true);
		setFormError("");
		try {
			const response = await fetch("/api/send-enquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			});
			if (response.ok) {
				setSent(true);
				form.reset();
				setTimeout(() => setSent(false), 4e3);
			} else {
				const result = await response.json().catch(() => null);
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
	const scrollWork = (direction) => workTrack.current?.scrollBy({
		left: direction * Math.min(window.innerWidth * .72, 720),
		behavior: "smooth"
	});
	const brandLogo = scrolled ? logoDark : logoLight;
	const [activeReview, setActiveReview] = (0, import_react.useState)(0);
	const nextReview = () => setActiveReview((current) => (current + 1) % testimonialReviews.length);
	const prevReview = () => setActiveReview((current) => (current - 1 + testimonialReviews.length) % testimonialReviews.length);
	const reviewA = testimonialReviews[activeReview];
	const reviewB = testimonialReviews[(activeReview + 1) % testimonialReviews.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `site-header ${scrolled ? "site-header-scrolled" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "brand-link",
						"aria-label": "KT Construction home",
						onClick: closeMenu,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: brandLogo,
							alt: "KT Construction",
							className: "brand-logo"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "desktop-nav",
						"aria-label": "Main navigation",
						children: navItems.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${id}`,
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "header-cta",
						children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "menu-toggle",
						type: "button",
						"aria-label": menuOpen ? "Close menu" : "Open menu",
						"aria-expanded": menuOpen,
						onClick: () => setMenuOpen((value) => !value),
						children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					}),
					menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mobile-nav",
						"aria-label": "Mobile navigation",
						children: [navItems.map(([label, id], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${id}`,
							onClick: closeMenu,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }), label]
						}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							onClick: closeMenu,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "07" }), "Contact"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				className: "hero-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroImage,
						alt: "KT Construction home exterior",
						width: 1024,
						height: 768,
						className: "hero-image"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow light hero-reveal hero-reveal-one",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " KT Construction · Builders & Engineers"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-reveal hero-reveal-two",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Building your visions," }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Creating reality." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-bottom" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "hero-social",
						"aria-label": "Social media",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-social-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/ashokk1448/",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "KT Construction on Instagram",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.facebook.com/ashok.mohan.3152",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "KT Construction on Facebook",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "story",
				className: "section story-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-tag",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " Our story"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "story-heading",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Built on engineering"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Crafted with purpose.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Built for life." })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "story-copy",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "KT Construction brings engineering precision and thoughtful craft together to create places that feel right—and endure."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Founded by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ashok KT, B.E., M.E. Tech in Structures" }),
								", our practice is grounded in a direct belief: quality construction starts with clear thinking. We listen carefully, plan responsibly, and build with respect for every material, timeline, and client."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "text-link",
								children: ["Meet us with your idea ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "story-statement",
						"data-reveal": true,
						children: [
							"FROM A FIRST SKETCH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"TO THE FINAL KEY."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "approach",
				className: "section dark-section approach-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-tag inverse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " Our approach"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "approach-intro",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"A clear path",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"from idea to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "place." })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No hidden turns. Just a considered process that keeps you informed from the first conversation to handover." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "process-grid",
						children: process.map(({ number, icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "process-item",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "process-number",
									children: number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "process-icon",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })
							]
						}, number))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "why-us",
				className: "section why-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "why-aside",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-tag",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " Why us"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Built right.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Not just",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "built fast." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "quality-list",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Structural expertise"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Honest coordination"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Detail-led quality"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " One accountable team"] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "why-main",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "why-lead",
						children: "We combine structural intelligence with careful execution, so the finished space works beautifully long after handover."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "metric-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									end: 1,
									suffix: "×"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Engineer-led" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Decisions are grounded in technical understanding—not guesswork." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Quality checked" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every key stage is reviewed against drawings and standards." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									end: 100,
									suffix: "%"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Clear ownership" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A single team stays accountable from planning to completion." })
							] })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "work",
				className: "section work-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "work-header",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-tag",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " Selected work"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Spaces with",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"lasting ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "value." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Residential environments where structure, material, and daily life come together." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "work-controls",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Drag or scroll to explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous projects",
							onClick: () => scrollWork(-1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next projects",
							onClick: () => scrollWork(1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "projects-track",
						ref: workTrack,
						tabIndex: 0,
						"aria-label": "KT Construction project gallery",
						children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects/$projectId",
							params: { projectId: project.id },
							className: "project-card-link",
							"data-reveal": true,
							style: { "--delay": `${Math.min(index, 4) * 70}ms` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "project-card",
								style: {
									"--project-scale": String(project.zoom ?? 1),
									"--project-position": project.position ?? "center center",
									"--project-fit": project.fit ?? "cover"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: project.alt,
									width: 1200,
									height: 900,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["0", index + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.title })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: project.type })] })]
							})
						}, project.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gallery-link-row",
						"data-reveal": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "gallery-link",
							children: "View all projects"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "services",
				className: "section services-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "services-heading",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-tag inverse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " What we do"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"From ground",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "finish." })
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "services-list",
					children: services.map(({ number, icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "service-row",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: number }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })
						]
					}, number))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "testimonials",
				className: "section testimonials-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "testimonial-title",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-tag",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "06" }), " Testimonials"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Built on",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "trust." })
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "testimonial-grid",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rating-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									end: 5,
									divisor: 1
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/ 5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "stars",
									children: "★★★★★"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Care, clarity, and craftsmanship at every step." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "quote-mark",
								children: "“"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: reviewA.quote }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
								reviewA.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", reviewA.location] })
							] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "testimonial-side",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "dark-quote",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "quote-mark",
										children: "“"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: reviewB.quote }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
										reviewB.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", reviewB.location] })
									] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "testimonial-controls",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Previous testimonial",
									onClick: prevReview,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Next testimonial",
									onClick: nextReview,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contact",
				className: "contact-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-tag inverse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "07" }), " Contact"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Let’s build",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"something ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "lasting." })
						] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tell us what you’re planning. We’ll start with a clear conversation about your site, scope, and next steps." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "contact-form",
							onSubmit: submit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field-pair",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										required: true,
										autoComplete: "name",
										placeholder: "Enter your name"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "phone",
										required: true,
										autoComplete: "tel",
										inputMode: "tel",
										placeholder: "Your phone number"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									required: true,
									type: "email",
									autoComplete: "email",
									placeholder: "you@example.com"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tell us about your project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									rows: 4,
									placeholder: "Type of project, location, and anything useful to know"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "submit-button",
									type: "submit",
									disabled: submitting,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: submitting ? "Sending..." : sent ? "Enquiry noted" : "Request a consultation" }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								}),
								sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "form-success",
									role: "status",
									children: "Thank you. Please call or email us to continue your enquiry."
								}),
								formError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "form-error",
									role: "alert",
									children: formError
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-details",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "detail-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+919019937834",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }), " +91 90199 37834"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "detail-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:ashokkt1994@gmail.com",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), " ashokkt1994@gmail.com"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "detail-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.google.com/maps/search/?api=1&query=Mobile+mart%2C+60ft+road%2C+Vinobha+Nagara%2C+Shivamogga%2C+577204",
										target: "_blank",
										rel: "noreferrer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }),
											" Mobile mart, 60ft road,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Vinobha Nagara, Shivamogga 577204"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "social-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.instagram.com/ashokk1448/",
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.facebook.com/ashok.mohan.3152",
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Facebook" })]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "map-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "KT Construction location in Vinobha Nagara, Shivamogga",
							src: "https://www.google.com/maps?q=Mobile%20mart%2C%2060ft%20road%2C%20Vinobha%20Nagara%2C%20Shivamogga%2C%20577204&output=embed",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "map-link",
							href: "https://www.google.com/maps/search/?api=1&query=Mobile+mart%2C+60ft+road%2C+Vinobha+Nagara%2C+Shivamogga%2C+577204",
							target: "_blank",
							rel: "noreferrer",
							children: ["Open in Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							"aria-label": "Back to top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logoDark,
								alt: "KT Construction",
								width: "350",
								height: "142"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Engineered with purpose.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Built with care."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "footer-nav",
						"aria-label": "Footer navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Navigate" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#home",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#story",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								children: "Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "social-links",
								"aria-label": "Social media",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/ashokk1448/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/ashok.mohan.3152",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Facebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 KT Construction" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shivamogga, Karnataka" })
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
