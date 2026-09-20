import heroAsset from "@/assets/HomeKT-clean.png";
import logoLightAsset from "@/assets/Logo_Trans.png";
import logoDarkAsset from "@/assets/Logo-Photoroom.png";
import buildOneAsset from "@/assets/Build1-1.png";
import buildOneAltAsset from "@/assets/Build1-2.png";
import buildTwoAsset from "@/assets/Build2.jpeg";
import buildThreeAsset from "@/assets/Build3.jpeg";
import buildFourAsset from "@/assets/Build4.jpeg";
import buildFiveAsset from "@/assets/Build5.png";
import buildSixAsset from "@/assets/Build6.png";

export const heroImage = heroAsset;
export const logoLight = logoLightAsset;
export const logoDark = logoDarkAsset;
export const siteUrl = import.meta.env["VITE_SITE_URL"] ?? "https://ktconstructions.netlify.app";
export const projects = [
  {
    id: "urban-residence-1",
    image: buildOneAsset,
    title: "Urban Residence",
    type: "Residential design",
    alt: "Three-storey contemporary residence with wood detailing",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
  {
    id: "urban-residence-2",
    image: buildOneAltAsset,
    title: "Urban Residence",
    type: "Alternate elevation",
    alt: "Alternate view of a contemporary three-storey residence",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
  {
    id: "garden-house",
    image: buildTwoAsset,
    title: "Garden House",
    type: "Residential design",
    alt: "Two-storey family home with brick and timber finishes",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
  {
    id: "white-house",
    image: buildSixAsset,
    title: "White House",
    type: "Residential design",
    alt: "Modern white residence illuminated at dusk",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
  {
    id: "vertical-house",
    image: buildFiveAsset,
    title: "Vertical House",
    type: "Residential design",
    alt: "Narrow multi-storey urban residence",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
  {
    id: "gaurav-arcade",
    image: buildThreeAsset,
    title: "Gaurav Arcade",
    type: "Commercial design",
    alt: "Contemporary mixed-use commercial building",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
  {
    id: "rakesh-arcade",
    image: buildFourAsset,
    title: "Rakesh Arcade",
    type: "Commercial design",
    alt: "Illuminated commercial arcade at night",
    zoom: 0.96,
    position: "center center",
    fit: "cover",
  },
] as const;

export const getProjectById = (projectId: string) =>
  projects.find((project) => project.id === projectId);
