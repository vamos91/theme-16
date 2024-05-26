export type Speciality = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    specialityTypeId: number;
};


export const specialities: Speciality[] = [
    { id: 1, name: 'Spécialité 1', createdAt: '2024-04-29 10:55:55', updatedAt: '2024-04-29 10:55:55', specialityTypeId: 1 },
    { id: 2, name: 'Spécialité 2', createdAt: '2024-04-29 10:55:55', updatedAt: '2024-04-29 10:55:55', specialityTypeId: 2 },
    { id: 3, name: 'Spécialité 4', createdAt: '2024-04-29 10:55:55', updatedAt: '2024-04-29 10:55:55', specialityTypeId: 4 },
    { id: 4, name: 'Spécialité 5', createdAt: '2024-04-29 10:55:55', updatedAt: '2024-04-29 10:55:55', specialityTypeId: 1 },
    { id: 5, name: 'Spécialité 6', createdAt: '2024-04-29 10:55:55', updatedAt: '2024-04-29 10:55:55', specialityTypeId: 2 },
    { id: 6, name: 'Spécialité 7', createdAt: '2024-04-29 10:55:55', updatedAt: '2024-04-29 10:55:55', specialityTypeId: 1 },

];