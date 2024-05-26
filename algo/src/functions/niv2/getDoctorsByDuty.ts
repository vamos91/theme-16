import { Doctor } from "../../data/niv_2/Doctors"

export const getDoctorsByDuty = (doctors: Doctor[]): Doctor[] => {
    return doctors.filter((doctor) => doctor.permanence == 'nuit')
}