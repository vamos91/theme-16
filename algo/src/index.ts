import { patients } from "./data/niv_2/Patient"
import { doctors } from "./data/niv_2/Doctors"
import { consultations } from "./data/niv_2/Consultation"
import { specialities } from "./data/niv_2/Speciality"
import { doctorConsultationLinks } from "./data/niv_2/DoctorConsultationLink"
import { getPatientByMedicalNum } from "./functions/niv2/getPatientByMedicalNum"
import { getDoctorsByDuty } from "./functions/niv2/getDoctorsByDuty"
import { getConsultByDate } from "./functions/niv2/getConsultByDate"
import { getConsultByDoctor } from './functions/niv2/getConsultByDoctor'
import { getAmountBySpeciality } from './functions/niv2/getAmountBySpeciality'
import { getAverageRateByDoctor } from "./functions/niv2/getAverageRateByDoctor"
import { getLastConsultForEachPat } from "./functions/niv2/getLastConsultForEachPat"

//Trouver tous les patients ayant un numéro de sécurité sociale commençant par '123'
const patientByMedicalNum = getPatientByMedicalNum(patients)
//console.log("🚀 ~ patientByMedicalNum", patientByMedicalNum)

//Obtenir le nom complet(prénom et nom) de tous les médecins qui travaillent la nuit
const doctorsByDuty = getDoctorsByDuty(doctors)
//console.log("🚀 ~ doctorsByDuty", doctorsByDuty)

//Afficher tous les diagnostics et leurs tarifs pour les consultations ayant eu lieu le 29 avril 2024
const consultByDate = getConsultByDate(consultations, '29 avril 2024')
//console.log("🚀 ~ consultByDate", consultByDate)

//Trouver le nombre total de consultations effectuées par chaque médecin
const consultByDoctor = getConsultByDoctor(doctorConsultationLinks, doctors)
//console.log("🚀 ~ consultByDoctor", consultByDoctor)

//Calculer le montant total facturé pour chaque spécialité
const amountBySpeciality = getAmountBySpeciality(consultations, specialities)
//console.log('🚀 ~ amountBySpeciality', amountBySpeciality)

//Calculer la moyenne des tarifs des consultations par médecin.
const AverageRateByDoctor = getAverageRateByDoctor(doctors, consultations, doctorConsultationLinks)
//console.log('🚀 ~ AverageRateByDoctor', AverageRateByDoctor)

//Afficher la date de la dernière consultation pour chaque patient
const lastConsultForEachPat = getLastConsultForEachPat(consultations, patients)
//console.log('🚀 ~ lastConsultForEachPat', lastConsultForEachPat)