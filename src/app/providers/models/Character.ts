export interface Character {
  _id: number;
  name: string;
  imageUrl: string;
}

export interface CharacterData {
  data?: Character[];
}
