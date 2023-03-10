import { FormEvent, useState } from "react";

// TODO: formPage - Form Handling (1)
// Pada bagian ini kita akan deklarasi type dari state yang ada pada form
type FormState = {
  isError: boolean;
  isSuccess: boolean;
};

const FormPage = () => {
  // TODO: formPage - Form Handling (2)
  // Pada bagian ini kita akan deklarasi state yang ada pada form
  const [formState, setFormState] = useState<FormState>({
    isError: false,
    isSuccess: false,
  });

  // TODO: formPage - Form Handling (3)
  // Pada bagian ini kita akan mencoba untuk membuat form submission handler
  const formOnSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.clear();

    // Ini menggunakan Uncontrolled components di dalam suatu form
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
      // ceritanya di sini kita ingin menggunakan event.target.reset() pada form
      reset: () => void;
    };

    // Sebenarnya cara terbaiknya tetap ada state yang dikhususkan untuk masing masing input
    const username = target.username.value;
    const password = target.password.value;

    if (username === "belajar" && password === "react-ts") {
      setFormState({
        isError: false,
        isSuccess: true,
      });

      localStorage.setItem("login", btoa(username + password));
    } else {
      setFormState({
        isSuccess: false,
        isError: true,
      });
    }

    target.reset();
  };

  return (
    <>
      <p>Ini adalah halaman Form</p>

      {/* TODO: formPage - Layouting (1) */}
      <form
        // TODO: formPage - Form Handling (4)
        // Pada bagian ini kita menambahkan onSubmit pada form
        onSubmit={formOnSubmitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          width: "50vw",
        }}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Lakukan Login</button>
      </form>

      {/* TODO: formPage - Form Handling (3) */}
      {/* Handle untuk logic Form Success */}
      {formState.isSuccess && (
        <p style={{ color: "#008744" }}>
          Login Berhasil, silahkan cek Local Storage
        </p>
      )}

      {/* TODO: formPage - Form Handling (4) */}
      {/* Handle untuk logic Form Error */}
      {formState.isError && <p style={{ color: "#D62D20" }}>Login Gagal</p>}
    </>
  );
};

export default FormPage;
