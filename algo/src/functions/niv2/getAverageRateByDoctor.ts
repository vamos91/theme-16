import { Doctor } from "../../data/niv_2/Doctors"
import { Consultation } from "../../data/niv_2/Consultation"
import { DoctorConsultationLink } from "../../data/niv_2/DoctorConsultationLink"

export const getAverageRateByDoctor = (doctors: Doctor[], consultations: Consultation[], doctorConsultationLinks: DoctorConsultationLink[]): Doctor[] => {
    const consultId: any = []
    const resultat = doctorConsultationLinks.reduce((acc: any, curr: any) => {
        acc[curr.doctorId] ? acc[curr.doctorId] = [...acc[curr.doctorId], curr.consultationId] : acc[curr.doctorId] = [...consultId, curr.consultationId] 
        return acc
    }, {})
    for (const property in resultat) {
        let sum = 0
        const doctor: any = doctors.find((doc) => doc.id === Number(property))
        resultat[property].forEach((element: any) => {
            const consultation = consultations.find((consult) => consult.id === element)
            sum += Number(consultation?.rate)
        });
        
        let average = sum / resultat[property].length
        const doctorName: any = doctor?.firstName
        delete Object.assign(resultat, { [doctorName]: average })[doctor?.id];
    }

    return resultat
}