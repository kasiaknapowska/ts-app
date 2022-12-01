import React from "react";

type Props = {};

export default function Form({}: Props) {
  return (
    <div className="form_container">
      <h1>Formularz rejestracyjny</h1>
      <form>
        <label>
          Login:
          <input />
        </label>
        <label>
          Hasło:
          <input />
        </label>
        <label>
          Email:
          <input />
        </label>
        <label>
          Numer telefonu:
          <input />
        </label>
        <label className="checkbox_label"><input className="checkbox" type="checkbox" /> Akceptuję regulamin</label>
        <button className="btn btn_submit" type="submit">zapisz</button>
      </form>
    </div>
  );
}
