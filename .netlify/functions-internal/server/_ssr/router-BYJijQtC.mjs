import { r as __toESM } from "../_runtime.mjs";
import { a as siteUrl } from "./project-data-uQaQmEAh.mjs";
import { i as require_react } from "../_libs/@react-email/render+[...].mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route$4 } from "./projects._projectId-BCBm0LUU.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Resend } from "../_libs/resend.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BYJijQtC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-M_Z0pcby.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "KT Construction" },
			{
				name: "description",
				content: "Engineering-led construction in Shivamogga."
			},
			{
				name: "author",
				content: "KT Construction"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$1 = () => import("./routes-0hI-clmp.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "KT Construction — Building with Structure & Purpose" },
			{
				name: "description",
				content: "KT Construction delivers thoughtful residential construction, structural design, renovation, and project management in Shivamogga."
			},
			{
				property: "og:title",
				content: "KT Construction — Building with Structure & Purpose"
			},
			{
				property: "og:description",
				content: "Considered spaces, sound structures, and dependable construction in Shivamogga."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: `${siteUrl}/`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects-DSUI8_HW.mjs");
var Route$1 = createFileRoute("/projects")({
	head: () => ({
		meta: [{ title: "Projects — KT Construction" }, {
			name: "description",
			content: "Explore residential and commercial projects by KT Construction in Shivamogga."
		}],
		links: [{
			rel: "canonical",
			href: `${siteUrl}/projects`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function escapeHtml(text) {
	return text.replace(/[&<>"']/g, (character) => {
		return {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}[character] ?? character;
	});
}
var Route = createFileRoute("/api/send-enquiry")({ server: { handlers: { POST: ({ request }) => handlePost(request) } } });
function json(data, init) {
	const headers = new Headers(init?.headers);
	headers.set("content-type", "application/json");
	return new Response(JSON.stringify(data), {
		...init,
		headers
	});
}
async function handlePost(request) {
	try {
		const resendApiKey = process.env["RESEND_API_KEY"];
		if (!resendApiKey) return json({ error: "Missing RESEND_API_KEY configuration" }, { status: 500 });
		const fromEmail = process.env["RESEND_FROM_EMAIL"] ?? "enquiries@ktconstruction.com";
		const toEmail = process.env["RESEND_TO_EMAIL"] ?? "ashokkt1994@gmail.com";
		const resend = new Resend(resendApiKey);
		const body = await request.json().catch(() => null);
		if (!body || typeof body !== "object") return json({ error: "Invalid request body" }, { status: 400 });
		const { name, email, phone, message } = body;
		const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
		if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(phone) || !isNonEmptyString(message)) return json({ error: "Missing required fields" }, { status: 400 });
		const cleanName = name.trim();
		const cleanEmail = email.trim();
		const cleanPhone = phone.trim();
		const cleanMessage = message.trim();
		if (cleanName.length > 120 || cleanEmail.length > 254 || cleanPhone.length > 40 || cleanMessage.length > 5e3) return json({ error: "One or more fields are too long" }, { status: 400 });
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) return json({ error: "Invalid email address" }, { status: 400 });
		const data = await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			subject: `New Project Enquiry from ${cleanName}`,
			html: `
        <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #d97706; margin-bottom: 24px;">New Enquiry from KT Construction Website</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0;">
              <strong>Name:</strong> ${escapeHtml(cleanName)}
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong>Email:</strong> <a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a>
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong>Phone:</strong> <a href="tel:${escapeHtml(cleanPhone)}">${escapeHtml(cleanPhone)}</a>
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #333; margin-bottom: 12px;">Project Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">
              ${escapeHtml(cleanMessage)}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
          
          <p style="font-size: 12px; color: #888; margin: 0;">
            This enquiry was sent through the KT Construction website. 
            Please respond to the contact details above.
          </p>
        </div>
      `,
			reply_to: cleanEmail
		});
		if (data.error) {
			console.error("Resend error:", data.error);
			return json({ error: "Failed to send enquiry" }, { status: 500 });
		}
		return json({
			success: true,
			id: data.data?.id
		});
	} catch (error) {
		console.error("API error:", error);
		return json({ error: "Internal server error" }, { status: 500 });
	}
}
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$3
});
var ProjectsRoute = Route$1.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$3
});
var ApiSendEnquiryRoute = Route.update({
	id: "/api/send-enquiry",
	path: "/api/send-enquiry",
	getParentRoute: () => Route$3
});
var ProjectsRouteChildren = { ProjectsProjectIdRoute: Route$4.update({
	id: "/$projectId",
	path: "/$projectId",
	getParentRoute: () => ProjectsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	ProjectsRoute: ProjectsRoute._addFileChildren(ProjectsRouteChildren),
	ApiSendEnquiryRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
