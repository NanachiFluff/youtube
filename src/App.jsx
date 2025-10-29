import "./App.css";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import Video from "./components/Video";

function App() {
  return (
    <div className="h-lvh">
      <Navbar />
      <div className="flex h-lvh">
        <div className="w-[70%]">
          <Video />
        </div>
        <div className="w-[30%]">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;
