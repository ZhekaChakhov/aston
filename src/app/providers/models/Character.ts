export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

export interface CharacterData {
  results?: Character[];
}
