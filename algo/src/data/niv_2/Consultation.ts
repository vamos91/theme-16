
export type Consultation = {
    id: number;
    date: string;
    diagnostic: string;
    rate: number;
    patientId: number;
    createdAt: string;
    updatedAt: string;
    specialityId: number;
};

export const consultations: Consultation[] = [
    { id: 1, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 1', rate: 100.00, patientId: 1, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 1 },
    { id: 2, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 2', rate: 150.00, patientId: 2, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 2 },
    { id: 3, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 3', rate: 200.00, patientId: 3, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 3 },
    { id: 4, date: '2024-04-17 10:55:55', diagnostic: 'Diagnostic 4', rate: 250.00, patientId: 4, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 4 },
    { id: 5, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 5', rate: 300.00, patientId: 5, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 5 },
    { id: 6, date: '2024-07-29 10:55:55', diagnostic: 'Diagnostic 6', rate: 350.00, patientId: 1, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 6 },
    { id: 7, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 7', rate: 400.00, patientId: 7, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 1 },
    { id: 8, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 8', rate: 450.00, patientId: 4, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 2 },
    { id: 9, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 9', rate: 500.00, patientId: 9, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 3 },
    { id: 10, date: '2024-04-25 10:55:55', diagnostic: 'Diagnostic 10', rate: 550.00, patientId: 10, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 4 },
    { id: 11, date: '2024-05-29 10:55:55', diagnostic: 'Diagnostic 11', rate: 600.00, patientId: 4, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 5 },
    { id: 12, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 12', rate: 650.00, patientId: 12, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 6 },
    { id: 13, date: '2024-04-21 10:55:55', diagnostic: 'Diagnostic 13', rate: 700.00, patientId: 13, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 1 },
    { id: 14, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic 14', rate: 750.00, patientId: 14, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 2 },
    { id: 15, date: '2024-04-22 10:55:55', diagnostic: 'Diagnostic 15', rate: 800.00, patientId: 15, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 3 },
    { id: 16, date: '2024-11-13 10:55:55', diagnostic: 'Diagnostic multi 1', rate: 200.00, patientId: 1, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 1 },
    { id: 17, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic multi 2', rate: 300.00, patientId: 17, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 2 },
    { id: 18, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic multi 3', rate: 400.00, patientId: 18, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 3 },
    { id: 19, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic multi 4', rate: 500.00, patientId: 19, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 4 },
    { id: 20, date: '2024-04-12 10:55:55', diagnostic: 'Diagnostic multi 5', rate: 600.00, patientId: 4, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 5 },
    { id: 21, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic multi 6', rate: 700.00, patientId: 21, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 6 },
    { id: 22, date: '2024-06-29 10:55:55', diagnostic: 'Diagnostic multi 7', rate: 800.00, patientId: 22, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 1 },
    { id: 23, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic multi 8', rate: 900.00, patientId: 23, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 2 },
    { id: 24, date: '2024-12-29 10:55:55', diagnostic: 'Diagnostic multi 9', rate: 1000.00, patientId: 24, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 3 },
    { id: 25, date: '2024-04-29 10:55:55', diagnostic: 'Diagnostic multi 10', rate: 1100.00, patientId: 25, createdAt: '2024-04-29', updatedAt: '2024-04-29', specialityId: 4 },
];