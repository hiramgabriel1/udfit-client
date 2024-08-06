import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../services/loginServices";

export type IUserLogin = {
  username: string;
  password: string;
};

function FormAuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();
  const onSubmit: SubmitHandler<IUserLogin> = async (dataForm: IUserLogin) => {
    const fetchServiceLogin = await loginUser(dataForm)

    console.log(fetchServiceLogin);
  };

  useEffect(() => {
    if (
      errors.username?.type === "required" ||
      errors.password?.type === "required"
    )
      toast.error("Escribe algo pto");
  }, [errors.username, errors.password]);

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
                  type="password"
                  className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-color-secondary-light text-white py-2 px-4 rounded-3xl w-200">
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormAuthLogin;
