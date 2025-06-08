import { useParams } from "react-router-dom";
import { titleCase } from "../../utils/customFunctions";
import { TitleBanner } from "../../components";

export default function CollectionType() {
  const { collectionName } = useParams();
  
  const nameOfCollection = titleCase(collectionName);
  
  return (
    <>
      <TitleBanner name={nameOfCollection}/>
    </>
  )
}
