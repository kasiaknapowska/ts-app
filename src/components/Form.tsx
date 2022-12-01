import React, { useState } from "react";
import { FormData } from "../utils/interfaces";

export default function Form() {
  const [checked, setChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    login: "",
    password: "",
    email: "",
    phone: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setErrors([]);
    const newErrors = [];

    if (!formData.email.includes("@")) {
      newErrors.push("Nieprawidłowy format adresu email");
    }
    if (!formData.phone || formData.phone.toString().length !== 9) {
        newErrors.push("Nieprawidłowy numer telefonu");
      }

    if (!checked) {
      newErrors.push("Wymagana akceptacja regulaminu");
    }



    if (newErrors.length > 0) {
        setErrors(newErrors);

      } else {
        console.log(formData)
        // try {
        //   const { user } = await createAuthUserWithEmailAndPassword(
        //     formData.email,
        //     formData.password
        //   );
        //   const displayName = formData.email;
  
        //   await createUserDocumentFromAuth(user, { displayName });
        //   await updateUserProfile({ displayName });
        //   dispatch(logIn());
        //   navigate(`/user/${user.uid}`);
        // } catch (error) {
        //   if (error.code === "auth/email-already-in-use") {
        //     alert("Cannot create a user, email already in use");
        //   }
        //   console.log("user creation encontered an error", error.message);
        // }
    //   }
    };

  };
  console.log(errors)
  return (
    <div className="form_container">
      <h1>Formularz rejestracyjny</h1>
      <form onSubmit={onSubmit}>
        <label>
          Login:
          <input type="text" value={formData.login} name="login" onChange={onChange}/>
        </label>
        <label>
          Hasło:
          <input type="text" value={formData.password} name="password" onChange={onChange}/>
        </label>
        <label>
          Email:
          <input type="text" value={formData.email} name="email" onChange={onChange}/>
        </label>
        <label>
          Numer telefonu:
          <input type="number" value={formData.phone} name="phone" onChange={onChange}/>
        </label>
        <label className="checkbox">
          <input type="checkbox" onClick={() => setChecked(!checked)} />
          <span></span>
          Akceptuję regulamin
        </label>
        <button className="btn btn_submit" type="submit">
          zapisz
        </button>
      </form>
    </div>
  );
}
