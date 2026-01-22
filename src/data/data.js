// ✅ Données simulées pour tester l'application

export const regions = [
  { id: 1, nom: "Rabat-Salé-Kénitra", population: 4500000, total: 0 },
  { id: 2, nom: "Casablanca-Settat", population: 7000000, total: 0 },
];

export const villes = [
  { code: 101, nom: "Rabat", region: 1, total: 0 },
  { code: 102, nom: "Salé", region: 1, total: 0 },
  { code: 201, nom: "Casablanca", region: 2, total: 0 },
];

export const quartiers = [
  { code: 1, nom: "Agdal", ville: 101, population: 120000, total: 0 },
  { code: 2, nom: "Ryad", ville: 101, population: 80000, total: 0 },
  { code: 3, nom: "Maarif", ville: 201, population: 150000, total: 0 },
];

export const biens = [
  {
    code: 1,
    adresse: "Rue Zerktouni",
    num_enregistrement: 12345,
    superficie: 120,
    type: "villa",
    quartier: 2,
    date_construction: "2010-05-12",
  },
  {
    code: 2,
    adresse: "Avenue Hassan II",
    num_enregistrement: 67890,
    superficie: 80,
    type: "appartement",
    quartier: 1,
    date_construction: "2015-09-20",
  },
];

export const syndics = [
  {
    code: "123",
    nom: "El Amrani",
    prenom: "Zakaria",
    telephone: "0612345678",
    mot_de_passe: "admin",
  },
  {
    code: "1234",
    nom: "Chater",
    prenom: "Anas",
    telephone: "0666666666",
    mot_de_passe: "syndic",
  },
];

export const contrats = [
  {
    num: 1,
    date: "2024-01-01",
    prix_mensuel: 5000,
    bien: 1,
    syndic: "123",
    etat: "en cours",
  },
  {
    num: 2,
    date: "2023-06-15",
    prix_mensuel: 3000,
    bien: 2,
    syndic: "123",
    etat: "résilié",
  },
];
