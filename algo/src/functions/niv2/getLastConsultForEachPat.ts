import { Consultation } from "../../data/niv_2/Consultation"
import { Patient } from "../../data/niv_2/Patient"

export const getLastConsultForEachPat = (consultations: Consultation[], patients: Patient[]): void => {
    const date: any = []
    
    const allConsultByPat = consultations.reduce((acc: any, curr: any) => {
        acc[curr.patientId] ? acc[curr.patientId] = [...acc[curr.patientId], new Date(curr.date)] : acc[curr.patientId] = [...date, new Date(curr.date)]
        return acc
    }, {})
   
    for(let property in allConsultByPat){
        allConsultByPat[property].sort((a: any, b: any) => a - b).reverse()
        allConsultByPat[property].splice(1)  
        const patient: any = patients.find((pat) => pat.id === Number(property))
        const patientName = patient?.firstName
        delete Object.assign(allConsultByPat, { [patientName]: allConsultByPat[patient?.id] })[patient?.id];
    }
    return allConsultByPat
}