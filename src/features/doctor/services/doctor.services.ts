import { InstancesAxiosFetch } from "../../../shared/common/axiosConfig";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJWTPayload extends JwtPayload {
  userId: string;
}

export const renderMyPatients = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No se encontró ningún token en el almacenamiento local.");
      return null;
    }

    let doctorData;
    try {
      doctorData = jwtDecode<CustomJWTPayload>(token);
      console.log(doctorData);

    } catch (decodeError) {
      console.error("Error al decodificar el token:", decodeError);
      return null;
    }

    const patientsRequest = await InstancesAxiosFetch.instanceLocalAPI.get(
      `/doctor/my-profile/${doctorData.userId}`
    );

    if (patientsRequest.status === 200) {
      return {
        profile: doctorData,
        data: patientsRequest
      }
    } else {
      console.error("Error al obtener los datos de los pacientes:", patientsRequest.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error durante la solicitud a la API:", error);
    return null;
  }
};
