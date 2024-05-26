export type Doctor = {
    id: number;
    firstName: string;
    lastName: string;
    permanence: string;
    createdAt: string;
    updatedAt: string;
};

// Données des médecins
export const doctors: Doctor[] = [
    { id: 1, firstName: 'Dr. John', lastName: 'Doe', permanence: 'jour', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 2, firstName: 'Dr. Jane', lastName: 'Smith', permanence: 'nuit', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 3, firstName: 'Dr. Michael', lastName: 'Johnson', permanence: 'jour', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 4, firstName: 'Dr. Emily', lastName: 'Brown', permanence: 'nuit', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 5, firstName: 'Dr. David', lastName: 'Lee', permanence: 'jour', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 6, firstName: 'Dr. Sarah', lastName: 'Wilson', permanence: 'jour', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 7, firstName: 'Dr. James', lastName: 'Taylor', permanence: 'nuit', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 8, firstName: 'Dr. Emma', lastName: 'Martinez', permanence: 'jour', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 9, firstName: 'Dr. Christopher', lastName: 'Anderson', permanence: 'nuit', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
    { id: 10, firstName: 'Dr. Olivia', lastName: 'Thomas', permanence: 'nuit', createdAt: '2024-04-29', updatedAt: '2024-04-29' },
];