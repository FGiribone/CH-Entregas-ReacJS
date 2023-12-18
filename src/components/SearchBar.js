import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(term);
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="is-flex is-justify-content-center">
      <form onSubmit={handleFormSubmit} className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            value={term}
            onChange={handleChange}
            placeholder="Buscar productos..."
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-danger is-light">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;