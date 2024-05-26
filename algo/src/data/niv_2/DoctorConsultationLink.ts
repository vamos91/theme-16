export type DoctorConsultationLink = {
    doctorId: number;
    consultationId: number;
    specialityId: number;
    createdAt: string;
};


export const doctorConsultationLinks: DoctorConsultationLink[] = [
    { doctorId: 1, consultationId: 10, specialityId: 2, createdAt: '2024-04-29 11:05:51' },
    { doctorId: 2, consultationId: 9, specialityId: 1, createdAt: '2024-04-29 11:05:53' },
    { doctorId: 2, consultationId: 22, specialityId: 1, createdAt: '2024-04-29 11:05:53' },
    { doctorId: 3, consultationId: 14, specialityId: 1, createdAt: '2024-04-29 11:05:32' },
    { doctorId: 4, consultationId: 10, specialityId: 2, createdAt: '2024-04-29 11:05:45' },
    { doctorId: 5, consultationId: 1, specialityId: 1, createdAt: '2024-04-29 11:05:51' },
    { doctorId: 6, consultationId: 8, specialityId: 1, createdAt: '2024-04-29 11:05:51' },
    { doctorId: 7, consultationId: 5, specialityId: 1, createdAt: '2024-04-29 11:05:32' },
    { doctorId: 7, consultationId: 24, specialityId: 1, createdAt: '2024-04-29 11:05:32' },
    { doctorId: 8, consultationId: 9, specialityId: 2, createdAt: '2024-04-29 11:05:45' },
    { doctorId: 9, consultationId: 25, specialityId: 1, createdAt: '2024-04-29 11:05:45' },
    { doctorId: 10, consultationId: 2, specialityId: 1, createdAt: '2024-04-29 11:05:53' },

];
