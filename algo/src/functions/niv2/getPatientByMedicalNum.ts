import { Patient } from "../../data/niv_2/Patient"

export const getPatientByMedicalNum = (patients: Patient[]): Patient[] => {
    return patients.filter((patient) => patient.numSecu.slice(0, 3) === '123')
}