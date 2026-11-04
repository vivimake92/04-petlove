import "./pet-list.css";

import PetCard from "../PetCard";

export default function PetList({ pets }) {
  return (
    <section>
      <h2>Esperando por você</h2>

      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          name={pet.name}
          specie={pet.specie}
          age={pet.age}
          size={pet.size}
          emoji={pet.emoji}
        />
      ))}
    </section>
  );
}
