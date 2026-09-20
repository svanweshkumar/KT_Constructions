import { i as projects } from "./project-data-uQaQmEAh.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DSUI8_HW.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsGalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "projects-page-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "projects-page-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "back-to-home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "Back home"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "projects-gallery-grid",
			"aria-label": "Project gallery",
			children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects/$projectId",
				params: { projectId: project.id },
				className: "gallery-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.alt,
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-card-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: project.type })] })]
				})]
			}, project.id))
		})]
	});
}
//#endregion
export { ProjectsGalleryPage as component };
