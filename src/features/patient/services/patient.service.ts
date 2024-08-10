import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig"
import { jwtDecode } from "jwt-decode";
import cookie from "js-cookie"

export const profileData = async () => {
    try {
        const query = await InstancesAxiosFetch.instanceLocalAPI.get(`view-profile/${}`)
        console.log(query);
        
    } catch (error) {
        console.log(error);
        throw new Error('')
    }
}