import { Timestamp } from "firebase/firestore";

export type ArticleSummary = {
  documentId: string;
  title: string;
  postId: string;
  summary: string;
  tags: Array<string>;
  posted: Timestamp;
};
