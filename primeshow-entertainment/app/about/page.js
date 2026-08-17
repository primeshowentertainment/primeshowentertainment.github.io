import AboutExperience from "@/components/about/AboutExperience";
import { aboutContent } from "@/content/about";
import { createMetadata } from "@/lib/seo";

export const metadata=createMetadata({title:"About PrimeShow Entertainment",description:"Learn about PrimeShow Entertainment, an Indian film production, distribution and exhibition company building ambitious cinema for audiences across India and worldwide.",path:"/about",image:"/images/about-studio.webp"});

export default function AboutPage() {
  return <AboutExperience content={aboutContent} />;
}
