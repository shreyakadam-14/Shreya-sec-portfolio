
import { useEffect, useState } from "react";
import "./App.css";

const apps = [
  { id: "about", label: "ABOUT.EXE", icon: "◈" },
  { id: "projects", label: "PROJECTS.EXE", icon: "▣" },
  { id: "skills", label: "SKILLS.EXE", icon: "⌘" },
  { id: "terminal", label: "TERMINAL.EXE", icon: ">_" },
  { id: "contact", label: "CONTACT.EXE", icon: "✉" },
];

function App() {
  const [activeApp, setActiveApp] = useState("");
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    "SHREYA//SEC terminal v1.0",
    "Type 'help' to view available commands.",
  ]);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  function runCommand(event) {
    event.preventDefault();
    const cmd = command.trim().toLowerCase();

    const responses = {
      help: "Commands: help, whoami, skills, projects, clear",
      whoami: "Visitor connected to SHREYA//KADAM portfolio.",
      skills:
        "VAPT | Web Security | Networking | Linux | Burp Suite",
      projects:
        "Mobile Pentesting | Cloud Pentesting | Security Labs",
    };

    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd) {
      setHistory((old) => [
        ...old,
        `visitor@shreya-sec:~$ ${command}`,
        responses[cmd] || "Command not found. Type 'help'.",
      ]);
    }

    setCommand("");
  }

  const content = {
    about: (
      <>
        <div className="content-index">PROFILE / 001</div>
        <h1 className="module-heading">
          WHO AM <span className="green">I?</span>
        </h1>
        <p>
          I'm Shreya, a cybersecurity learner interested in
          penetration testing, application security, and network
          security.
        </p>
        <p>
          I enjoy understanding how systems work, identifying
          security weaknesses in authorized labs, and learning
          how to protect applications and infrastructure.
        </p>
        <div className="info-card">
          <span className="green">CURRENT FOCUS</span>
          <p>Cybersecurity · Application Security · VAPT</p>
        </div>
        <div className="info-card">
          <span className="green">MINDSET</span>
          <p>Curious mind. Security-focused. Always learning.</p>
        </div>
      </>
    ),

    projects: (
      <>
        <div className="content-index">PROJECT ARCHIVE / 003</div>
        <h1 className="module-heading">
          SELECTED <span className="green">WORK.</span>
        </h1>

        <article className="project">
          <span className="green">01 / MOBILE SECURITY</span>
          <h3>Mobile Application Pentesting</h3>
          <p>
            Practiced static and dynamic analysis of an Android
            application in a Windows-based lab.
          </p>
          <div className="tech-tags">ANDROID STUDIO · ADB</div>
        </article>

        <article className="project">
          <span className="green">02 / CLOUD SECURITY</span>
          <h3>Cloud Penetration Testing</h3>
          <p>
            Practiced cloud security testing using AWSGoat in a
            controlled learning environment.
          </p>
          <div className="tech-tags">AWSGOAT · BURP SUITE · KALI LINUX</div>
        </article>

        <article className="project">
          <span className="green">03 / APPLICATION SECURITY</span>
          <h3>Web Security Labs</h3>
          <p>
            Learning web application testing, vulnerability
            identification, and VAPT methodology.
          </p>
          <div className="tech-tags">VAPT · WEB SECURITY · BURP SUITE</div>
        </article>
      </>
    ),

    skills: (
      <>
        <div className="content-index">CAPABILITY MATRIX / 002</div>
        <h1 className="module-heading">
          SKILL <span className="green">MATRIX.</span>
        </h1>

        {[
          ["Web Application Security", "PRACTICING"],
          ["Mobile Application Testing", "PRACTICING"],
          ["Cloud Security Fundamentals", "LEARNING"],
          ["Networking Fundamentals", "LEARNING"],
          ["Linux & Kali Linux", "PRACTICING"],
          ["Burp Suite", "PRACTICING"],
          ["Android Debug Bridge (ADB)", "PRACTICING"],
          ["VAPT Methodology", "LEARNING"],
        ].map(([skill, level]) => (
          <div className="skill" key={skill}>
            <span>{skill}</span>
            <span className="skill-level">[ {level} ]</span>
          </div>
        ))}

        <p className="muted small-note">
          Skills shown reflect current learning and lab practice.
        </p>
      </>
    ),

    terminal: (
      <>
        <div className="content-index">SHELL / SIMULATION</div>
        <h1 className="module-heading">
          SYSTEM <span className="green">TERMINAL.</span>
        </h1>

        <div className="terminal-box">
          {history.map((line, index) => (
            <div className="terminal-line" key={index}>
              {line}
            </div>
          ))}

          <form className="command-line" onSubmit={runCommand}>
            <label htmlFor="terminal-command">
              visitor@shreya-sec:~$
            </label>
            <input
              id="terminal-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              autoComplete="off"
              spellCheck="false"
              aria-label="Enter a simulated terminal command"
            />
            <button type="submit" className="terminal-submit">
              RUN
            </button>
          </form>
        </div>

        <p className="muted small-note">
          This is a simulated terminal. Commands do not run on
          your computer.
        </p>
      </>
    ),

    contact: (
      <>
        <div className="content-index">COMMUNICATIONS / 004</div>
        <h1 className="module-heading">
          LET'S <span className="green">CONNECT.</span>
        </h1>

        <p>
          Interested in cybersecurity opportunities, internships,
          or professional collaboration?
        </p>

        <div className="info-card">
          <span className="green">STATUS</span>
          <p>OPEN TO OPPORTUNITIES</p>
        </div>

        <div className="info-card">
          <span className="green">EMAIL</span>
          <p>Add your professional email before publishing.</p>
        </div>

        <div className="info-card">
          <span className="green">LINKEDIN</span>
          <p>Add your LinkedIn profile URL before publishing.</p>
        </div>
      </>
    ),
  };

  function goHome() {
    setActiveApp("");
  }

  return (
    <main className="desktop">
      <header className="topbar">
        <button className="brand" onClick={goHome}>
          SHREYA<span>//KADAM</span>
        </button>

        <div className="system-status">
          <span className="status-dot" />
          SYSTEM ONLINE
        </div>

        <div className="window-controls" aria-hidden="true">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </div>
      </header>

      {!booted ? (
        <section className="boot-screen">
          <div className="boot-logo">S//S</div>
          <p>INITIALIZING SECURITY ENVIRONMENT...</p>
          <div className="progress">
            <span />
          </div>
          <small>LOADING PORTFOLIO MODULES</small>
        </section>
      ) : (
        <>
          <div className="main-layout">
            <section className="main-panel" key={activeApp || "home"}>
              {!activeApp ? (
                <div className="hero">
                  <div className="eyebrow">
                    <span className="status-dot" />
                    PERSONAL CYBERSPACE / 001
                  </div>

                  <h1>
                    THINK<span className="green">.</span>
                    <br />
                    TEST<span className="green">.</span>
                    <br />
                    <span className="outline">SECURE.</span>
                  </h1>

                  <p className="intro">
                    Welcome to my digital workspace.
                    <br />
                    Exploring systems. Learning security. Building skills.
                  </p>

                  <button
                    className="enter-button"
                    onClick={() => setActiveApp("projects")}
                  >
                    <span>▣</span>
                    EXPLORE MY WORK
                    <span>↗</span>
                  </button>

                  <div className="hero-meta">
                    <span>CYBERSECURITY</span>
                    <span>APPLICATION SECURITY</span>
                    <span>VAPT</span>
                  </div>
                </div>
              ) : (
                <section className="module-view">
                  <div className="module-topbar">
                    <span>
                      <span className="status-dot" />{" "}
                      SHREYA//KADAM / {activeApp.toUpperCase()}
                    </span>

                    <button
                      className="close-button"
                      onClick={goHome}
                      aria-label="Return to home screen"
                      title="Return home"
                    >
                      ×
                    </button>
                  </div>

                  <div className="module-body">
                    {content[activeApp]}
                  </div>
                </section>
              )}
            </section>

            <aside className="app-sidebar">
              <div className="sidebar-heading">
                DESKTOP / APPLICATIONS
              </div>

              <div className="sidebar-subheading">
                05 MODULES AVAILABLE
              </div>

              {apps.map((app) => (
                <button
                  className={`app-icon ${
                    activeApp === app.id ? "selected" : ""
                  }`}
                  key={app.id}
                  onClick={() =>
                    setActiveApp((current) =>
                      current === app.id ? "" : app.id
                    )
                  }
                  aria-pressed={activeApp === app.id}
                >
                  <span className="app-symbol">{app.icon}</span>
                  <span>{app.label}</span>
                </button>
              ))}
            </aside>
          </div>

          <footer>
            <span>SHREYA//SEC — PERSONAL PORTFOLIO</span>
            <span>LEARN. TEST. SECURE.</span>
            <span>© 2026</span>
          </footer>
        </>
      )}
    </main>
  );
}

export default App;