import { DoctorConsultationLink } from "../../data/niv_2/DoctorConsultationLink"
import { Doctor } from "../../data/niv_2/Doctors"

export const getConsultByDoctor = (doctorConsultationLinks: DoctorConsultationLink[], doctors: Doctor[]): void => {
    const doctorsID = doctorConsultationLinks.reduce((acc: any, curr: any) => {
        acc[curr.doctorId] ? acc[curr.doctorId]++ : acc[curr.doctorId] = 1
        return acc
    }, {})

    for (let property in doctorsID){
        const doctor: any = doctors.find((doc) => doc.id === Number(property))
        //console.log(`${doctor?.firstName}: ${doctorsID[property]}`);
        const doctorName: any = doctor?.firstName
        delete Object.assign(doctorsID, { [doctorName]: doctorsID[doctor?.id] })[doctor?.id];
    }   
    return doctorsID
}