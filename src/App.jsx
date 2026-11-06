import "./App.css";

import Header from "./components/Header";
import PetList from "./components/PetList";
import AdoptionForm from "./components/AdoptionForm";

import pets from "./data/pets";

function App() {
  return (
    <>
      <Header />

      <PetList pets={pets} />

      <AdoptionForm pets={pets} />
    </>
  );
}

export default App;
