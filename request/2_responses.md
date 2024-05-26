
# Exercices SQL

## Partie 1: Sélection de données

> Connectez vous à Mysql via votre terminal.
> Créer le modèle physique de votre BDD.
> Lancer vos requêtes via votre terminal.

1. Trouver tous les patients ayant un numéro de sécurité sociale commençant par '123':

```sql
SELECT *
FROM patients
WHERE num_secu LIKE '123%';

```

2. Obtenir le nom complet (prénom et nom) de tous les médecins qui travaillent la nuit :

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM doctors
WHERE permanence = 'nuit';

```

3. Afficher tous les diagnostics et leurs tarifs pour les consultations ayant eu lieu le 29 avril 2024:

```sql
SELECT diagnostic, rate
FROM consultations
WHERE DATE(date) = '2024-04-29';

```

4. Trouver le nombre total de consultations effectuées par chaque médecin :

```sql
SELECT CONCAT(d.first_name, ' ', d.last_name) AS doctor_name, COUNT(dc.doctors_id) AS total_consultations
FROM doctors_has_consultations dc
INNER JOIN doctors d ON dc.doctors_id = d.id
GROUP BY dc.doctors_id;

```

5. Calculer le montant total facturé pour chaque spécialité :

```sql
SELECT s.name AS speciality_name, SUM(c.rate) AS total_amount
FROM consultations c
INNER JOIN specialities s ON c.specialities_id = s.id
GROUP BY c.specialities_id;

```

6. Afficher tous les médecins et leurs spécialités, y compris ceux qui n'ont pas de spécialité : 

```sql
SELECT CONCAT(d.first_name, ' ', d.last_name) AS doctor_name, IFNULL(s.name, 'Aucune spécialité') AS speciality_name
FROM doctors d
RIGHT JOIN doctors_has_specialities ds ON d.id = ds.doctors_id
LEFT JOIN specialities s ON ds.specialities_id = s.id;

```

7. Calculer la moyenne des tarifs des consultations par médecin.

```sql
SELECT 
    CONCAT(d.first_name, ' ', d.last_name) AS doctor_name,
    AVG(c.rate) AS average_consultation_rate
FROM 
    doctors d
LEFT JOIN 
    doctors_has_consultations dc ON d.id = dc.doctors_id
LEFT JOIN 
    consultations c ON dc.consultations_id = c.id
GROUP BY 
    d.id;


```

8. Afficher la date de la dernière consultation pour chaque patient :

```sql
SELECT 
    CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
    MAX(c.date) AS last_consultation_date
FROM 
    patients p
LEFT JOIN 
    consultations c ON p.id = c.patient_id
GROUP BY 
    p.id;

```

9. Afficher la date de la dernière consultation pour chaque patient en formatant la date au format FR:

```sql
SELECT 
    CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
    DATE_FORMAT(MAX(c.date), '%d/%m/%Y %H:%i:%s') AS last_consultation_date
FROM 
    patients p
LEFT JOIN 
    consultations c ON p.id = c.patient_id
GROUP BY 
    p.id;

```

10. Afficher le nom du patient, la date de sa dernière consultation au format jour/mois/année heure:minute:seconde, le nom du médecin qui a effectué la consultation, ainsi que la spécialité du médecin pour chaque patient. :
    
```sql
SELECT 
    CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
    MAX(c.date) AS last_consultation_date,
    d.first_name AS doctor_first_name,
    d.last_name AS doctor_last_name,
    s.name AS doctor_speciality
FROM 
    patients p
LEFT JOIN 
    consultations c ON p.id = c.patient_id
LEFT JOIN 
    doctors_has_consultations dc ON c.id = dc.consultations_id
LEFT JOIN 
    doctors d ON dc.doctors_id = d.id
LEFT JOIN 
    doctors_has_specialities ds ON d.id = ds.doctors_id
LEFT JOIN 
    specialities s ON ds.specialities_id = s.id
GROUP BY 
    p.id, d.id;

```
