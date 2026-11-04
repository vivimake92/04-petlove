import "./adoption-form.css";

export default function Adoptionform() {
  return (
    <form>
      <h2>Quero adotar a Nina</h2>

      <div>
        <label htmlFor="petId">Animal</label>
        <select name="name" id="petId">
          <option value="">Escolha um animal</option>
        </select>
      </div>
    </form>
  );
}
