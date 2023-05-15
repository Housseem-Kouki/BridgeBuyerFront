import { ReactComment } from "./ReactComment.interface";

export interface Comment {
  idComment: number;
  content: string;
  reactComment: ReactComment[];
}