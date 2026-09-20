import { a as siteUrl, i as projects } from "./project-data-uQaQmEAh.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._projectId-BCBm0LUU.js
var $$splitComponentImporter = () => import("./projects._projectId-CskraNec.mjs");
var Route = createFileRoute("/projects/$projectId")({
	head: ({ params }) => {
		const project = projects.find((item) => item.id === params.projectId);
		const title = project ? `${project.title} — KT Construction` : "Project — KT Construction";
		const description = project ? `${project.title}, a ${project.type.toLowerCase()} project by KT Construction in Shivamogga.` : "Explore a KT Construction project in Shivamogga.";
		return {
			meta: [{ title }, {
				name: "description",
				content: description
			}],
			links: [{
				rel: "canonical",
				href: `${siteUrl}/projects/${params.projectId}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const project = projects.find((item) => item.id === params.projectId);
		if (!project) throw new Error("Project not found");
		return { project };
	}
});
//#endregion
export { Route as t };
