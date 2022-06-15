export interface Comentario {
  userName: string
  text: string;
  date: Date,
}

export type Comentarios = Array<Comentario>;
