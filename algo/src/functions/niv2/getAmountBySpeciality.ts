import { Consultation } from '../../data/niv_2/Consultation'
import { Speciality } from '../../data/niv_2/Speciality'

export const getAmountBySpeciality = (consultations: Consultation[], specialities: Speciality[]): void => {
    const resultat = consultations.reduce((acc: any, curr: any) => {
        acc[curr.specialityId] ? acc[curr.specialityId] += curr.rate : acc[curr.specialityId] = curr.rate
        return acc
    }, {})
    for (const property in resultat) {
        const speciality: any = specialities.find((spec) => spec.id === Number(property))
        const specName: any = speciality?.name
        delete Object.assign(resultat, { [specName]: resultat[speciality?.id] })[speciality?.id];
    }
    return resultat
}