import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-label">
                CONTACT ME
            </div>

            <div className="contact-content">
                <h2>
                    Let&apos;s build something
                    <span> meaningful.</span>
                </h2>

                <p>
                    Have a project, idea, or opportunity in mind?
                    I&apos;d love to hear about it.
                </p>

                <a
                    href="mailto:temitopeomotolani502@gmail.com"
                    className="button button-primary"
                >
                    Get in Touch
                </a>

                <div className="social-links">
                    <a
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/themytea"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="YOUR_INSTAGRAM_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="YOUR_X_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </section>
    );
}