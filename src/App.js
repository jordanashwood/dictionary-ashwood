import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="welcome" />
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/jordan-ashwood/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jordan Ashwood
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/jordanashwood/dictionary-ashwood"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-ashwood.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
