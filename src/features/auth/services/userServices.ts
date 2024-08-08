import { IUser } from "../../../vite-env";
import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig";
import { IUserLogin } from "../components/Form";
import useAuthStore from "../../../shared/stores/authStore";

export const loginUser = async (dataForm: IUserLogin) => {
    const login = await InstancesAxiosFetch.instanceLocalAPI.post("/login-user", {
        dataForm,
    });

    const token: string | null = null;

    /**
     * @message
     * Si no hay token devolverlo a otra ruta con un navigate
     */
    token ? useAuthStore.getState().login(token) : "";

    return login.data;
};

export const registerUser = async (dataForm: IUser) => {
    const registerNewUser = await InstancesAxiosFetch.instanceLocalAPI.post(
        "/user/register",
        {
            dataForm,
        }
    );

    console.log(registerNewUser);
};
