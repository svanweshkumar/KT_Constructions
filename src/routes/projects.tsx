import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, siteUrl } from "@/lib/project-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — KT Construction" },
      {
        name: "description",
        content: "Explore residential and commercial projects by KT Construction in Shivamogga.",
      },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/projects` }],
  }),
  component: ProjectsGalleryPage,
});

function ProjectsGalleryPage() {
  return (
    <main className="projects-page-shell">
      <header className="projects-page-header">
        <Link to="/" className="back-to-home">
          <ArrowLeft size={16} />
          Back home
        </Link>
      </header>

      <section className="projects-gallery-grid" aria-label="Project gallery">
        {projects.map((project, index) => (
          <Link
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            key={project.id}
            className="gallery-card"
          >
            <img src={project.image} alt={project.alt} loading="lazy" />
            <div className="gallery-card-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{project.title}</strong>
                <small>{project.type}</small>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
