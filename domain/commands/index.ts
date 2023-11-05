import type { CommentInterface } from '../entities/comment/Comment';

export interface AddCommandInterface {
  comment: CommentInterface;
  target: CommentInterface;
  comments: CommentInterface[];
}

export interface DeleteCommandByIdInterface {
  comment: CommentInterface;
  comments: CommentInterface[];
}

export interface HideByUserIdInterface {
  comment: CommentInterface;
  comments: CommentInterface[];
}

export interface editByIdComamndInterface {
  comment: CommentInterface;
  comments: CommentInterface[];
}
