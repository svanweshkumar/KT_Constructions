import { i as projects } from "./project-data-uQaQmEAh.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as ArrowLeft, g as ChevronLeft, h as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./projects._projectId-BCBm0LUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._projectId-CskraNec.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailPage() {
	const navigate = useNavigate();
	const { projectId } = Route.useParams();
	const projectIndex = projects.findIndex((project) => project.id === projectId);
	const project = projects[projectIndex];
	const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
	const nextProject = projects[(projectIndex + 1) % projects.length];
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "projects-page-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "projects-page-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects",
				className: "back-to-home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "View all projects"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "project-not-found",
			children: "Project not found."
		})]
	});
	const goToProject = (direction) => {
		const target = projects[(projectIndex + direction + projects.length) % projects.length];
		navigate({
			to: "/projects/$projectId",
			params: { projectId: target.id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "project-detail-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "project-detail-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects",
				className: "back-to-home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "All projects"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "project-detail-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "project-detail-visual",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.alt
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "project-detail-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "section-tag",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(projectIndex + 1).padStart(2, "0") }),
							" ",
							project.type
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: project.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "project-detail-description",
						children: "Original project photography presented at full scale for a closer look at the material palette, elevation, and overall architectural character."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "project-detail-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => goToProject(-1),
							"aria-label": "Previous project",
							className: "project-nav-button",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 }), "Prev"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => goToProject(1),
							"aria-label": "Next project",
							className: "project-nav-button primary",
							children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "project-detail-meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: String(projectIndex + 1).padStart(2, "0") })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: nextProject.title })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: prevProject.title })] })
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { ProjectDetailPage as component };
