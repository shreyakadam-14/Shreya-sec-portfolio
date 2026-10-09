
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
    "KADAM//SHREYA terminal v1.0",
    "Type 'help' to view available commands.",
  ]);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function runCommand(event) {
    event.preventDefault();
    const cmd = command.trim().toLowerCase();

    const responses = {
      help: "Commands: help, whoami, skills, projects, clear",
      whoami: "Visitor connected to KADAM//SHREYA portfolio.",
      skills: "VAPT | Web Security | Networking | Linux | Burp Suite",
      projects: "Mobile Pentesting | Cloud Pentesting | Security Labs",
    };

    if (cmd === "clear") {
      setHistory([]);
    } else {
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
        <h2>WHO AM I?</h2>
        <p>
          I'm Shreya, a cybersecurity learner interested in
          penetration testing, application security, and network security.
        </p>
        <p className="muted">
          Curious mind. Security-focused. Always learning.
        </p>
      </>
    ),
    projects: (
      <>
        <h2>PROJECT ARCHIVE</h2>
        <div className="project">
          <span className="green">01 / MOBILE SECURITY</span>
          <p>Android static and dynamic analysis using Android Studio and ADB.</p>
          <small>ANDROID · ADB · SECURITY TESTING</small>
        </div>
        <div className="project">
          <span className="green">02 / CLOUD SECURITY</span>
          <p>Hands-on cloud penetration-testing practice with AWSGoat.</p>
          <small>AWS · BURP SUITE · KALI LINUX</small>
        </div>
        <div className="project">
          <span className="green">03 / WEB SECURITY</span>
          <p>Web security and VAPT learning labs.</p>
          <small>WEB · VAPT · BURP SUITE</small>
        </div>
      </>
    ),
    skills: (
      <>
        <h2>SKILL MATRIX</h2>
        {[
          "Web Application Security",
          "Mobile Application Testing",
          "Cloud Security Fundamentals",
          "Networking",
          "Linux & Kali Linux",
          "Burp Suite",
        ].map((skill) => (
          <div className="skill" key={skill}>
            <span>{skill}</span>
            <span className="green">[ LEARNING / PRACTICING ]</span>
          </div>
        ))}
      </>
    ),
    terminal: (
      <>
        <h2>INTERACTIVE TERMINAL</h2>
        <div className="terminal-output">
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <form className="command-line" onSubmit={runCommand}>
          <label htmlFor="command">visitor@kadam-sec:~$</label>
          <input
            id="command"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            autoComplete="off"
            autoFocus
            aria-label="Terminal command"
          />
        </form>
      </>
    ),
    contact: (
      <>
        <h2>ESTABLISH CONNECTION</h2>
        <p>Interested in cybersecurity opportunities or collaboration?</p>
        <p className="muted">
          Add your professional email and LinkedIn URL here.
        </p>
        <p className="green">STATUS: OPEN TO OPPORTUNITIES</p>
      </>
    ),
  };

  return (
    <main className="desktop">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setActiveApp("")}>
          KADAM<span>//</span>SEC
        </a>
        <div className="system-status">
          <span className="status-dot" /> SYSTEM ONLINE
        </div>
        <div className="window-controls">
          <span>_</span><span>□</span><span>×</span>
        </div>
      </header>

      {!booted ? (
        <section className="boot-screen">
          <div className="boot-logo">K//S</div>
          <p>INITIALIZING SECURITY ENVIRONMENT...</p>
          <div className="progress"><span /></div>
          <small>LOADING PORTFOLIO MODULES</small>
        </section>
      ) : (
        <>
          <section className="hero">
            <div className="eyebrow">
              <span className="status-dot" /> PERSONAL CYBERSPACE / 001
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
              <span>▣</span> EXPLORE MY WORK <span>↗</span>
            </button>
          </section>

          <section className="workspace">
            <div className="section-label">
              <span>DESKTOP / APPLICATIONS</span>
              <span>05 MODULES AVAILABLE</span>
            </div>
            <div className="app-grid">
              {apps.map((app) => (
                <button
                  className={`app-icon ${activeApp === app.id ? "selected" : ""}`}
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                >
                  <span className="app-symbol">{app.icon}</span>
                  <span>{app.label}</span>
                </button>
              ))}
            </div>

            {activeApp && (
              <section className="app-window">
                <div className="app-titlebar">
                  <span>{activeApp.toUpperCase()}.EXE</span>
                  <button
                    className="close-button"
                    onClick={() => setActiveApp("")}
                    aria-label="Close window"
                  >
                    ×
                  </button>
                </div>
                <div className="app-content">{content[activeApp]}</div>
              </section>
            )}
          </section>

          <footer>
            <span>KADAM//SHREYA — PERSONAL PORTFOLIO</span>
            <span>UNAUTHORIZED ACCESS IS NOT THE OBJECTIVE.</span>
            <span>© 2026</span>
          </footer>
        </>
      )}
    </main>
  );
}

export default App;