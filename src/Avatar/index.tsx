import Avatar from './avatar';
import Group from './group';

export * from './interface';
import './style';
type AvatarComponentType = typeof Avatar & {
  Group: typeof Group;
};

const AvatarComponent = Avatar as AvatarComponentType;

export default AvatarComponent;
