import Greet from "./components/greet";
import DownloadBtn from "./components/DownloadBtn";
import Navbar from "./components/NavBar";
import Showbox from "./components/showbox";

function App() {
  return (
    <main>
      <div className="container_2">
        <nav className="navbar">
          <Navbar />
        </nav>
        <Greet />
        <DownloadBtn />
      </div>
      <div>
        <Showbox />
      </div>
    </main>
  );
}

export default App;
