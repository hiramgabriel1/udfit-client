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