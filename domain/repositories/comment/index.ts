import type {
  AddCommandInterface,
  DeleteCommandByIdInterface,
  editByIdComamndInterface,
  HideByUserIdInterface,
} from '../../commands';

export interface CommentRepositoryInterface {
  add(addCommentCommand: AddCommandInterface): void;
  deleteById(deleteByIdCommand: DeleteCommandByIdInterface): void;
  hideByUserId(hideByUserIdCommand: HideByUserIdInterface): void;
  editById(editByIdCommand: editByIdComamndInterface): boolean;
}