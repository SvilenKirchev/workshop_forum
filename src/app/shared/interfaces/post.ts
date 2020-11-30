import {IUser} from './user';
import {ITheme} from './theme';
import {IBase} from './base';

export interface IPost extends IBase{
  likes: string[];
  text: string;
  userId: IUser;
  themeId: ITheme;

}
