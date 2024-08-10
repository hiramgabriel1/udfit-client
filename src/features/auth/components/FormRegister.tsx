import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from "../services/userServices";
import { IPatient, roles } from "../../../types/user.types";
import InputRegister from "./InputRegister";
import "react-toastify/dist/ReactToastify.css";

function FormRegister() {
  const [isChecked, setCheckedState] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPatient>();

  const onSubmit: SubmitHandler<IPatient> = async (dataForm: IPatient) => {
    try {
      console.log(dataForm);
      const role = isChecked ? roles.paciente : roles.doctor;
      if (isChecked) {
        const extendData = {
          ...dataForm,
          weight: dataForm.weight,
          height: dataForm.height,
          age: dataForm.age,
          gender: dataForm.gender,
          role: role,
        };

        await registerUser(extendData);
      }

      await registerUser(dataForm);

      toast.success("Registro exitoso");
      reset();
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      toast.error("Oops, hubo un error");
    }
  };

  useEffect(() => {
    if (Object.values(errors).length > 0)
      toast.error("Completa los campos necesarios");
  }, [errors]);

  return (
    <>
      <ToastContainer position="top-center" theme="dark" />

      <section className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-3xl shadow-2xl py-10 md:w-1/3">
          <div className="text-center mb-10 md:w-1/2 m-auto">
            <h1 className="text-color-secondary font-principal text-2xl pt-10 text-center md:text-5xl">
              Bienvenido
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-5">
            <div className="text-center">
              <div className="flex flex-col py-5 px-10 space-y-4">
                <input
                  type="text"
                  className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
                  placeholder="Nombre de usuario"
                  {...register("username", { required: true })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                <input
                  type="email"
                  className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
                  placeholder="jafet@gmail.com"
                  {...register("email", { required: true })}
                />
                <input
                  type="password"
                  className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
                  placeholder="******"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="bg-color-secondary-light text-white py-2 px-4 rounded-3xl w-200"
              >
                Registrarse
              </button>
              <label htmlFor="doctor" className="ml-2">
                Soy doctor
              </label>
              <input
                type="checkbox"
                name="doctor"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCheckedState(event.target.checked);
                }}
                checked={isChecked}
              />
              {isChecked && <InputRegister register={register} />}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormRegister;
