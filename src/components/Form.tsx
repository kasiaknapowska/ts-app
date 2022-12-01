import React, { useState } from "react";
import { FormData } from "../utils/interfaces";

enum FormError {
  email = "Nieprawidłowy format adresu email",
  phone = "Nieprawidłowy numer telefonu",
  checkbox = "Wymagana akceptacja regulaminu",
}

export default function Form() {
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    login: "",
    password: "",
    email: "",
    phone: "",
    checkbox: false,
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    if (name === "email") {
      setErrors((prevState) => {
        return prevState.filter((e) => e !== FormError.email);
      });
    }
    if (name === "phone") {
      setErrors((prevState) => {
        return prevState.filter((e) => e !== FormError.phone);
      });
    }
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        checkbox: !formData.checkbox,
      };
    });
    setErrors((prevState) => {
      return prevState.filter((e) => e !== FormError.checkbox);
    });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setErrors([]);
    const newErrors = [];

    if (!formData.email.includes("@")) {
      newErrors.push(FormError.email);
    }
    if (!formData.phone || formData.phone.toString().length !== 9) {
      newErrors.push(FormError.phone);
    }
    if (!formData.checkbox) {
      newErrors.push(FormError.checkbox);
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);

      fetch("https://example/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          setSuccessMessage("Formularz wysłany pomyślnie");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="form_container">
      <h1>Formularz rejestracyjny</h1>
      <form onSubmit={onSubmit}>
        <label>
          Login:
          <input
            type="text"
            value={formData.login}
            name="login"
            onChange={onInputChange}
          />
        </label>
        <label>
          Hasło:
          <input
            type="text"
            value={formData.password}
            name="password"
            onChange={onInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={onInputChange}
            style={
              errors.includes(FormError.email)
                ? { borderColor: "#FF0000" }
                : { borderColor: "black" }
            }
          />
          {errors.includes(FormError.email) && (
            <div className="error_message">{FormError.email}</div>
          )}
        </label>
        <label>
          Numer telefonu:
          <input
            type="number"
            value={formData.phone}
            name="phone"
            onChange={onInputChange}
            style={
              errors.includes(FormError.phone)
                ? { borderColor: "#FF0000" }
                : { borderColor: "black" }
            }
          />
          {errors.includes(FormError.phone) && (
            <div className="error_message">{FormError.phone}</div>
          )}
        </label>
        <label className="checkbox">
          <input type="checkbox" name="checkbox" onChange={onCheckboxChange} />
          <span
            style={
              errors.includes(FormError.checkbox)
                ? { borderColor: "#FF0000" }
                : { borderColor: "black" }
            }
          ></span>
          Akceptuję regulamin
          {errors.includes(FormError.checkbox) && (
            <div className="error_checkbox error_message">
              {FormError.checkbox}
            </div>
          )}
        </label>
        <button className="btn btn_submit" type="submit">
          zapisz
        </button>
      </form>
      {successMessage && (
        <div className="success_message">{successMessage}</div>
      )}
    </div>
  );
}
