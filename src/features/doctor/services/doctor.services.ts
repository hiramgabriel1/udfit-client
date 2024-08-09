import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig";

export const renderMyPatients = async () => {
    try {
        const patientsRequest = await InstancesAxiosFetch.instanceLocalAPI.get('')

        console.log(patientsRequest);
        
    } catch (error) {
        console.log(error)
    }   
}