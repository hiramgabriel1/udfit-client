import { UseFormRegister } from "react-hook-form";
import { IPatient } from "../../../types/user.types";

interface InputRegisterProps {
  register: UseFormRegister<IPatient>;
}

function InputRegister({ register }: InputRegisterProps) {
  return (
    <>
      <input
        type="number"
        min={20}
        className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
        placeholder="78kg"
        {...register("weight", { required: true })}
      />
      <input
        type="number"
        min={20}
        className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
        placeholder="1.70"
        {...register("height", { required: true })}
      />
      <input
        type="number"
        min={18}
        className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
        placeholder="18"
        {...register("age", { required: true })}
      />
      <input
        type="text"
        className="bg-color-primary-orange p-3 rounded-3xl text-center text-black hover:border-color-secondary opacity-75 input"
        placeholder="Mujer"
        {...register("gender", { required: true })}
      />
    </>
  );
}

export default InputRegister;
