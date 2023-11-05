import {
  AddCommandInterface,
  DeleteCommandByIdInterface,
  editByIdComamndInterface,
  HideByUserIdInterface,
} from '../../domain/commands';
import { CommentRepositoryInterface } from '../../domain/repositories/comment';

// запросы по http, получение данных из LocalStorage и т.д.
export interface CommentServiceInterface {}

interface DataGetStartegyInterface<T> {
  read(): T[];
  write(data: T[]);
}

class LocalStorageStartegy implements DataGetStartegyInterface {
  storage: Storage;
  constructor(private readonly key: string) {
    this.storage = window.localStorage;
  }

  read() {
    return this.storage.getItem(this.key);
  }

  write(data: string) {
    this.storage.setItem(this.key, data);
  }
}

class DataGetterStartegy {
  strategy: DataGetStartegyInterface;
  setStrategy(dataGetStartegy: DataGetStartegyInterface) {
    this.strategy = dataGetStartegy;
  }
}

class CommentRepository implements CommentRepositoryInterface {
  add(addCommentCommand: AddCommandInterface) {}

  deleteById(deleteByIdCommand: DeleteCommandByIdInterface) {}

  hideByUserId(hideByUserIdCommand: HideByUserIdInterface) {}

  editById(editByIdCommand: editByIdComamndInterface) {
    return true;
  }
}
