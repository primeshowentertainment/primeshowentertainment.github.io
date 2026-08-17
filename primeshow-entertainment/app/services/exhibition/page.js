import { DivisionPage } from "@/components/services/ServicesExperience";
import { serviceNavigation, servicesContent } from "@/content/services";
import JsonLd from "@/components/JsonLd";import {breadcrumbSchema,createMetadata} from "@/lib/seo";

export const metadata=createMetadata({title:"Film Exhibition & Theatre Partnerships",description:"Explore PrimeShow Entertainment's film exhibition ecosystem, theatre planning, release coordination and audience-focused cinema partnerships across India.",path:"/services/exhibition",image:"/images/exhibition-hero.webp"});
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Film Exhibition", provider: { "@type": "Organization", name: "PrimeShow Entertainment" }, areaServed: "India" };
export default function ExhibitionPage(){return <><DivisionPage division="exhibition" content={servicesContent.exhibition} navigation={serviceNavigation}/><JsonLd data={[schema,breadcrumbSchema([{name:"Home",path:"/"},{name:"Features",path:"/services"},{name:"Film Exhibition",path:"/services/exhibition"}]) ]}/></>}
