function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Finder Chrome Extension</h1>
        <p>
          Discover the power of AI Finder, a Chrome extension that helps you
          quickly find mentions of Artificial Intelligence on any webpage.
        </p>
        <Features />
        <CallToAction />
      </header>
    </div>
  );
}

function Features() {
  return (
    <div className="features">
      <h2>Features</h2>
      <ul>
        <li>
          Instantly search any webpage for mentions of AI and Artificial
          Intelligence.
        </li>
        <li>Simple and user-friendly interface.</li>
        <li>Supports multiple languages and search terms.</li>
        <li>Free to use and lightweight.</li>
      </ul>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="cta">
      <h2>Get Started</h2>
      <p>
        Click the button below to install AI Finder and enhance your browsing
        experience today!
      </p>
      <button onClick={handleInstallClick} className="install-button">
        Install AI Finder
      </button>
    </div>
  );
}
