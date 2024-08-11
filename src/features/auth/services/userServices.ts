import { IPatient } from "../../../types/user.types";
import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig";
import { IUserLogin } from "../components/Form";
import { loginUserToStore } from "../../../shared/stores/authStore";

export const loginUser = async (dataForm: IUserLogin) => {
    const requestLogin = await InstancesAxiosFetch.instanceLocalAPI.post(
        "/user/auth-user",
        dataForm
    );
    console.log(requestLogin);

    const tokenUser = requestLogin.data.token;
    console.log(tokenUser);

    /**
     * @message
     * Si no hay token devolverlo a otra ruta con un navigate
     */

    if (tokenUser) {
        loginUserToStore(tokenUser)
        location.assign("http://localhost:5173/app/dashboard");
    }

    console.log("token no recibido");
};

export const registerUser = async (dataForm: IPatient) => {
    console.log(dataForm);
    const registerNewUser = await InstancesAxiosFetch.instanceLocalAPI.post(
        "/user/create",
        dataForm
    );

    console.log(registerNewUser);
};
