import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="text-center mt-5">Coded by Jordan Ashwood</footer>
      </div>
    </div>
  );
}
