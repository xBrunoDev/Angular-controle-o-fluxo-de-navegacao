export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string
  allorComents: boolean
  comments: number;
  userID: number;
}

export type Animais = Array<Animal>;
