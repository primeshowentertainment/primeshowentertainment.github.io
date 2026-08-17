import PrimeHub from "@/components/hub/PrimeHub";
import { hubContent, hubNavigation } from "@/content/hub";
import { createMetadata } from "@/lib/seo";

export const metadata=createMetadata({title:"Primeverse — Movies, Stories & Behind the Scenes",description:"Enter Primeverse by PrimeShow Entertainment for movie stories, behind-the-scenes content, quizzes, galleries, upcoming projects, awards and exclusive cinema features.",path:"/prime-hub"});
export default function PrimeHubPage(){return <PrimeHub content={hubContent} navigation={hubNavigation}/>}
