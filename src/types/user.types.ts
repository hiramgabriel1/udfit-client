/// <reference types="vite/client" />

export type IUserLogin = {
    username: string;
    password: string;
  };
  
export interface IUser {
    username: string
    lastname: string
    email: string
    password: string
}

export enum roles {
    admin = "admin",
    doctor = "doctor",
    paciente = "paciente"
}

export interface IPatient {
    username: string
    lastname: string
    email: string
    password: string
    weight: number
    height: number
    age: number
    gender: string
    role: roles
} 
// id: '038fa0cc-b98b-4087-ba6e-1b0a92465ed8',
//     username: 'hiramgabriel',
//     email: 'rusty3031@gmail.com',
//     password: '$2b$10$48utlhcYWDIKSck3Lg0oXepOuWAuzmMDO35NH6xdGs3GBT.x1zOSy',
//     weight: 75,
//     height: 180,
//     age: 28,
//     gender: 'male',
//     role: 'doctor',
//     doctorId: null