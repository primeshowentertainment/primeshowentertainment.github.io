import CinematicHome from "@/components/home/CinematicHome";
import { homeContent } from "@/content/home";
import { createMetadata } from "@/lib/seo";
export const metadata=createMetadata({title:"Film Production, Distribution & Exhibition",description:"PrimeShow Entertainment is an Indian film company creating, producing, distributing and exhibiting ambitious cinema for audiences across India and worldwide.",path:"/"});

export default function HomePage() {
  return <CinematicHome content={homeContent} />;
}
