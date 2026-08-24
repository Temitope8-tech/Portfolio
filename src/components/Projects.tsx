import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="content-section projects-section">
      <div className="section-label">
        SELECTED WORK
      </div>

      <div className="projects-heading">
        <h2>What I&apos;ve built.</h2>

        <p>
          A selection of my projects exploring software, web development,
          and technology.
        </p>
      </div>

      <div className="projects-grid">
        <ProjectCard
          number="01"
          title="Student Course Management"
          description="A Java-based system for managing courses, students, and academic information."
          link="https://github.com/Temitope8-tech/StudentCourseManagement"
          linkText="View project →"
        />

        <ProjectCard
          number="02"
          title="Personal Portfolio"
          description="A clean, responsive portfolio built with Next.js, React, and TypeScript."
          image="/images/portfolio.png"
        />

        <ProjectCard
          number="03"
          title="Cybersecurity Project"
          description="A cybersecurity-focused project currently in development."
        />
      </div>
    </section>
  );
}