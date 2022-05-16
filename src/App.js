import { Exercises } from "./components/Exercises";
import { Featured } from "./components/Featured";
import { Gallery } from "./components/Gallery";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Featured />
      <Exercises />
      <Gallery />
    </>
  );
}

export default App;
