import { useParams } from "react-router";
import { CharacterDetails } from "src/widgets/CharacterDetails";

const CharacterPage = () => {
  const params = useParams();
  return <CharacterDetails id={+params.id!} />;
};

export default CharacterPage;
