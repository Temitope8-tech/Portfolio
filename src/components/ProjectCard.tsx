import Image from "next/image";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  linkText?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  image,
  link,
  linkText = "View project →",
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-number">{number}</div>

      {image && (
        <Image
          src={image}
          alt={`${title} project screenshot`}
          width={800}
          height={450}
          className="project-image"
        />
      )}

      <div className="project-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {linkText}
          </a>
        )}
      </div>
    </article>
  );
}