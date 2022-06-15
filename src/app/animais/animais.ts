export interface Animal {
  allowComments: boolean;
  description: string;
  comments: number;
  postDate: Date;
  userID: number;
  likes: number;
  url: string;
  id: number;
}

export type Animais = Array<Animal>;
