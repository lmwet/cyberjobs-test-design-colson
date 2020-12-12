import React from "react";
import { Grid, Container } from "@material-ui/core";
import JobProfile from "./JobProfile";
import BreadCrumbs from "./BreadCrumbs";
import ApplyRow from "./ApplyRow";
import Otherjobs from "./OtherJobs";

import BookingDateRow from "./BookingDateRow";
import ChatRow from "./ChatRow";

const CandidatePage = () => {
  const data = {
    jobProfile: {
      titles: {
        jobTitle: "Coordinateur service informatique",
        companyTitle: "la Marine Nationale",
      },

      pills: [
        { info: "Non renseigné", icon: "bookmark" },
        { info: "CDD - Disponible dans 1 à 3 mois", icon: "map_marker" },
        { info: "Maisons Lafitte (78)", icon: "house" },
        { info: "1500 à 3000€/Prime", icon: "money" },
        { info: "Aucune", icon: "alarm" },
      ],
    },

    applyRow: {
      imgUrl: "/images/logo-marine.png",
      company: "la Marine Nationale",
      companyDescription:
        "La Marine nationale est une des composantes des forces armées et dépend du ministère des armées. Elle est engagée en permanence sur toutes les mers du monde.",
      jobDescription: {
        jobName: "Coordinateur service informatique",
        profileRecherche:
          "Profil recherché - Master 1 ou 2 dans l’informatique générale ; - Maitrise d’outils bureautiques sous WINDOWS avec utilisation des outils métiers tels que : DIADEME (ticketing) – SCCM (system center configuration manager) – SVI (serveur vocal interactif)",
        offre:
          "La Direction Interarmées des Réseaux d’Infrastructure et des Systèmes d’Information (DIRISI) est l’opérateur des systèmes d’information et de communication (SIC) des Armées. Le Service Desk (SDK) est le point d'entrée unique des demandes de service (incident et/ou demande de catalogue) des abonnés du ministère des Armées. Répartie physiquement sur quatre sites géographiques (Maisons-Laffitte, Metz, Rennes et Toulon), cette entité unique et globale dispose d’une capacité de traitement sur l’ensemble de la métropole et s’appuie sur des centres de services DIRISI « physiques », multi-localisés sur le territoire national. Le SDK assure un service en H24, 7j/7 et met tout en oeuvre pour améliorer la qualité de service offerte par la DIRISI aux différentes directions et services du ministère. Activités principales : Le titulaire est responsable de la cellule conduite-coordination du SDK Ile de France situé à Maisons-Laffitte, il assure un rôle transverse tout en veillant à la coordination avec l’ensemble des acteurs internes et externes. En charge de l'animation du briefing quotidien, il assure : - Le pilotage transverse entre les FO (Front Office) et BO (Back Office) ; - La bonne application des directives internes et celles liées au SMS (système de management de la sécurité) ; - La coordination avec les autres SDK ainsi qu’avec les autres acteurs industriels ou techniciens de la DIRISI (CNMO « centre nationaux de mise en oeuvre » ; COD « centre opérationnel de la DIRISI », CIRISI « centre interarmées des réseaux d’infrastructure et des systèmes d’information », …). Responsable de la gestion des indicateurs locaux avec le back office, il veille au contrôle qualité des procédures.",
      },
    },

    bookingDateRow: {
      jobImages: [
        {
          alt: "imagesGridMarine",
          imgUrl: "/images/imagesGridMarine.png",
          imgTitle: "Job a la marine",
        },
        {
          alt: "imagesGrid",
          imgUrl: "/images/imagesGrid.png",
          imgTitle: "instants a la marine",
        },
        {
          alt: "logo",
          imgUrl: "/images/logo-marine.png",
          imgTitle: "Job a la marine",
        },
        {
          alt: "marine",
          imgUrl: "/images/marine.png",
          imgTitle: "Logo marine",
        },
      ],
      company: "la Marine Nationale",
      jobDescription: {
        jobName: "Coordinateur service informatique",
        profileRecherche:
          "Profil recherché - Master 1 ou 2 dans l’informatique générale ; - Maitrise d’outils bureautiques sous WINDOWS avec utilisation des outils métiers tels que : DIADEME (ticketing) – SCCM (system center configuration manager) – SVI (serveur vocal interactif)",
        offre:
          "La Direction Interarmées des Réseaux d’Infrastructure et des Systèmes d’Information (DIRISI) est l’opérateur des systèmes d’information et de communication (SIC) des Armées. Le Service Desk (SDK) est le point d'entrée unique des demandes de service (incident et/ou demande de catalogue) des abonnés du ministère des Armées. Répartie physiquement sur quatre sites géographiques (Maisons-Laffitte, Metz, Rennes et Toulon), cette entité unique et globale dispose d’une capacité de traitement sur l’ensemble de la métropole et s’appuie sur des centres de services DIRISI « physiques », multi-localisés sur le territoire national. Le SDK assure un service en H24, 7j/7 et met tout en oeuvre pour améliorer la qualité de service offerte par la DIRISI aux différentes directions et services du ministère. Activités principales : Le titulaire est responsable de la cellule conduite-coordination du SDK Ile de France situé à Maisons-Laffitte, il assure un rôle transverse tout en veillant à la coordination avec l’ensemble des acteurs internes et externes. En charge de l'animation du briefing quotidien, il assure : - Le pilotage transverse entre les FO (Front Office) et BO (Back Office) ; - La bonne application des directives internes et celles liées au SMS (système de management de la sécurité) ; - La coordination avec les autres SDK ainsi qu’avec les autres acteurs industriels ou techniciens de la DIRISI (CNMO « centre nationaux de mise en oeuvre » ; COD « centre opérationnel de la DIRISI », CIRISI « centre interarmées des réseaux d’infrastructure et des systèmes d’information », …). Responsable de la gestion des indicateurs locaux avec le back office, il veille au contrôle qualité des procédures.",
      },
    },

    otherJobs: [
      {
        title: "Bourse Cyber",
        icon: "bookmark",
        caption: "CDD - Disponible dans 1 à 3 mois",
        imgUrl: "/images/marine.png",
      },
      {
        title: "Some other job",
        icon: "building",
        caption: "CDD - Disponible dans 1 à 3 mois",
        imgUrl: "/images/logo-marine.png",
      },
      {
        title: "Great Job",
        icon: "bookmark",
        caption: "CDD - Disponible dans 1 à 3 mois",
        imgUrl: "/images/imagesGrid.png",
      },
      {
        title: "Cyber Security Job",
        icon: "alarm",
        caption: "CDD - Disponible dans 1 à 3 mois",
        imgUrl: "/images/imagesGrid.png",
      },
      {
        title: "IT expert",
        icon: "bookmark",
        caption: "CDD - Disponible dans 1 à 3 mois",
        imgUrl: "/images/imagesGrid.png",
      },
      {
        title: "Navy Job",
        icon: "house",
        caption: "CDD - Disponible dans 1 à 3 mois",
        imgUrl: "/images/imagesGrid.png",
      },
    ],
  };

  return (
    <React.Fragment>
      <BreadCrumbs />
      <Container maxWidth="xl">
        <JobProfile jobProfile={data.jobProfile} />
        <ApplyRow applyRow={data.applyRow} />
        <BookingDateRow bookingDateRow={data.bookingDateRow} />
        <ChatRow />
        <Otherjobs otherJobs={data.otherJobs} />
      </Container>
    </React.Fragment>
  );
};

export default CandidatePage;
