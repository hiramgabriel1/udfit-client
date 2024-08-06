import { IUser } from "./registerService";
import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig";
import { IUserLogin } from "../components/Form";

export const loginUser = async (dataForm: IUserLogin) => {
    const login = InstancesAxiosFetch.instanceLocalAPI.post("/login-user", {
        dataForm,
    });

    console.log(await login);
};

export const registerUser = async (dataForm: IUser) => {
    const registerNewUser = InstancesAxiosFetch.instanceLocalAPI.post(
        "/user/register",
        {
            dataForm,
        }
    );

    console.log(await registerNewUser);
};
