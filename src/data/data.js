// ✅ Données simulées – Région Orientale & Nord du Maroc

export const regions = [
  { id: 1, nom: "Oriental", population: 2300000, total: 0 },
  { id: 2, nom: "Tanger-Tétouan-Al Hoceima", population: 3800000, total: 0 },
];

export const villes = [
  { code: 101, nom: "Berkane", region: 1, total: 0 },
  { code: 102, nom: "Oujda", region: 1, total: 0 },
  { code: 103, nom: "Nador", region: 1, total: 0 },
  { code: 201, nom: "Al Hoceima", region: 2, total: 0 },
];

export const quartiers = [
  { code: 1, nom: "Ras El Ma", ville: 101, population: 60000, total: 0 },
  { code: 2, nom: "Saïdia", ville: 101, population: 90000, total: 0 },
  { code: 3, nom: "Centre Ville", ville: 102, population: 120000, total: 0 },
  { code: 4, nom: "Selouane", ville: 103, population: 70000, total: 0 },
  { code: 5, nom: "Imzouren", ville: 201, population: 85000, total: 0 },
];

export const biens = [
  {
    code: 1,
    adresse: "Boulevard Mohammed V",
    num_enregistrement: 445566,
    superficie: 110,
    type: "appartement",
    quartier: 1,
    date_construction: "2018-03-10",
  },
  {
    code: 2,
    adresse: "Corniche Saïdia",
    num_enregistrement: 778899,
    superficie: 140,
    type: "villa",
    quartier: 2,
    date_construction: "2012-07-22",
  },
  {
    code: 3,
    adresse: "Quartier Administratif",
    num_enregistrement: 112233,
    superficie: 90,
    type: "appartement",
    quartier: 5,
    date_construction: "2016-11-05",
  },
];

export const syndics = [
  {
    code: "123",
    nom: "Chater",
    prenom: "Anas",
    telephone: "0666666666",
    mot_de_passe: "anas",
  },
  {
    code: "1234",
    nom: "el alaoui",
    prenom: "Anas",
    telephone: "0666666666",
    mot_de_passe: "anas",
  },
];

export const contrats = [
  {
    num: 1,
    date: "2024-02-01",
    prix_mensuel: 2800,
    bien: 1,
    syndic: "Chater",
    etat: "en cours",
  },
  {
    num: 2,
    date: "2023-05-10",
    prix_mensuel: 4500,
    bien: 2,
    syndic: "Chater",
    etat: "en cours",
  },
  {
    num: 3,
    date: "2022-09-15",
    prix_mensuel: 2500,
    bien: 3,
    syndic: "Chater",
    etat: "résilié",
  },
];
