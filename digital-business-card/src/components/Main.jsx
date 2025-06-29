import { EmailButton, LinkedInButton } from "./Buttons"

export default function Main() {
    return (
        <main className="main">
            <div className="person-info">
                <h1 className="name">Vanya Smith</h1>
                <h2 className="profession">Frontend Developer</h2>
                <a className="website" href="#">wwww.website.com</a>
            </div>

            <div className="btn-link-container">
                <EmailButton />
                <LinkedInButton />
            </div>

            <div className="about-section">
                <h3 className="about-section-title">About</h3>
                <p className="about-section-info">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>

            <div className="interests-section">
                <h3 className="about-section-title">Interests</h3>
                <p className="about-section-info">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </main>
    )
}