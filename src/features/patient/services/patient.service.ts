import { jwtDecode, JwtPayload } from "jwt-decode";
import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig";

interface CustomJWTPayload extends JwtPayload {
    userId: string;
}

export const profileData = async () => {
    const token = localStorage.getItem("authToken");
    const profile = jwtDecode<CustomJWTPayload>(token || "");
    console.log(profile.userId);

    try {
        const query = await InstancesAxiosFetch.instanceLocalAPI.get(
            `user/view-profile/${profile?.userId}`
        );

        console.log(query.data);
        return query.data
    } catch (error) {
        console.log(error);
        throw new Error("");
    }
};
