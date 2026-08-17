import { ServicesLanding } from "@/components/services/ServicesExperience";
import { serviceNavigation, servicesContent } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export const metadata=createMetadata({title:"Film Production, Distribution & Exhibition Services",description:"Explore PrimeShow Entertainment's integrated film production, distribution and exhibition capabilities for Indian cinema, from development and production to theatrical release.",path:"/services",image:"/images/production-hero.webp"});

export default function ServicesPage() { return <ServicesLanding content={servicesContent.landing} navigation={serviceNavigation} />; }
