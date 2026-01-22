const data = {
  regions: [
    { id: 1, nom: "Rabat-Salé-Kénitra" },
    { id: 2, nom: "Casablanca-Settat" },
  ],
  villes: [
    { id: 1, nom: "Rabat", regionId: 1 },
    { id: 2, nom: "Salé", regionId: 1 },
    { id: 3, nom: "Casablanca", regionId: 2 },
  ],
  quartiers: [
    { id: 1, nom: "Agdal", villeId: 1 },
    { id: 2, nom: "Hay Riad", villeId: 1 },
    { id: 3, nom: "Maarif", villeId: 3 },
  ],
  biens: [
    { id: 1, type: "Appartement", quartierId: 1, prix: 800000 },
    { id: 2, type: "Villa", quartierId: 2, prix: 2500000 },
    { id: 3, type: "Studio", quartierId: 3, prix: 500000 },
  ],
  contrats: [
    { id: 1, bienId: 1, client: "Ali", date: "2024-01-10", montant: 800000 },
    { id: 2, bienId: 2, client: "Sara", date: "2024-02-15", montant: 2500000 },
    {
      id: 3,
      bienId: 3,
      client: "Youssef",
      date: "2024-03-20",
      montant: 500000,
    },
  ],
};
export default data;