import { Consultation } from "../../data/niv_2/Consultation";

export const getConsultByDate = (consultations: Consultation[], date: string) => {
    const months = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre'
    ]
    const consults = consultations.filter((consultation) => {
        const dateFormat = date.split(' ').reverse()
        const monthIndex = months.indexOf(dateFormat[1]) + 1
        const dateFormated = `${dateFormat[0]}-${monthIndex < 10 ? 0 : 1}${String(monthIndex)}-${dateFormat[2]}` 
        return consultation.date.split(' ')[0] === dateFormated
    })
    const result = consults.map(({diagnostic: any, rate} ) => ({diagnostic: any, rate: any}))
    return result
}