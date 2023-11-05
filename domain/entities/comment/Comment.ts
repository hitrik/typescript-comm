import type { NavigationInterface } from '../navigation/Navigation';
import type { ReactionInterface } from '../reaction/Reaction';
import type { UserInterface } from '../user/User';

export interface CommentInterface {
  id: UniqueId;
  user: UserInterface;
  content: Content;
  reactions: ReactionInterface[];
  navigation: NavigationInterface;
}
