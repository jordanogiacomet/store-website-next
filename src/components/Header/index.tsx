import { HeaderRoot } from './HeaderRoot';
import { LogoLink } from '../LogoLink';
import { HeaderContainer } from './HeaderContainer';
import { HeaderMenu } from './HeaderMenu';
import { MenuLink } from '../MenuLink';


export const Header = {
  Root: HeaderRoot,
  Container: HeaderContainer,
  Menu: HeaderMenu,
  MenuLinkRoot : MenuLink.Root,
  MenuLinkAnchor: MenuLink.Anchor,
  MenuLinkIcon: MenuLink.Icon,
  LinkRoot: LogoLink.Root,
  LinkAnchor: LogoLink.Anchor,
};
