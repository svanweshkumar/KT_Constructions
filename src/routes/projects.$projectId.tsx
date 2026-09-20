import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, siteUrl } from "@/lib/project-data";

export const Route = createFileRoute("/projects/$projectId")({
  head: ({ params }) => {
    const project = projects.find((item) => item.id === params.projectId);
    const title = project ? `${project.title} — KT Construction` : "Project — KT Construction";
    const description = project
      ? `${project.title}, a ${project.type.toLowerCase()} project by KT Construction in Shivamogga.`
      : "Explore a KT Construction project in Shivamogga.";

    return {
      meta: [{ title }, { name: "description", content: description }],
      links: [{ rel: "canonical", href: `${siteUrl}/projects/${params.projectId}` }],
    };
  },
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = projects.find((item) => item.id === params.projectId);
    if (!project) {
      throw new Error("Project not found");
    }
    return { project };
  },
});

function ProjectDetailPage() {
  const navigate = useNavigate();
  const { projectId } = Route.useParams();
  const projectIndex = projects.findIndex((project) => project.id === projectId);
  const project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <main className="projects-page-shell">
        <header className="projects-page-header">
          <Link to="/projects" className="back-to-home">
            <ArrowLeft size={16} />
            View all projects
          </Link>
        </header>
        <div className="project-not-found">Project not found.</div>
      </main>
    );
  }

  const goToProject = (direction: number) => {
    const target = projects[(projectIndex + direction + projects.length) % projects.length];
    navigate({ to: "/projects/$projectId", params: { projectId: target.id } });
  };

  return (
    <main className="project-detail-shell">
      <header className="project-detail-header">
        <Link to="/projects" className="back-to-home">
          <ArrowLeft size={16} />
          All projects
        </Link>
      </header>

      <article className="project-detail-card">
        <div className="project-detail-visual">
          <img src={project.image} alt={project.alt} />
        </div>

        <div className="project-detail-content">
          <p className="section-tag">
            <span>{String(projectIndex + 1).padStart(2, "0")}</span> {project.type}
          </p>
          <h1>{project.title}</h1>
          <p className="project-detail-description">
            Original project photography presented at full scale for a closer look at the material
            palette, elevation, and overall architectural character.
          </p>

          <div className="project-detail-actions">
            <button
              type="button"
              onClick={() => goToProject(-1)}
              aria-label="Previous project"
              className="project-nav-button"
            >
              <ChevronLeft size={18} />
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToProject(1)}
              aria-label="Next project"
              className="project-nav-button primary"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="project-detail-meta">
            <div>
              <span>Current</span>
              <strong>{String(projectIndex + 1).padStart(2, "0")}</strong>
            </div>
            <div>
              <span>Next</span>
              <strong>{nextProject.title}</strong>
            </div>
            <div>
              <span>Previous</span>
              <strong>{prevProject.title}</strong>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
