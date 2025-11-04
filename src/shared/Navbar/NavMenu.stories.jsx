import NavMenu from './NavMenu';

export default {
  title: 'Navbar/NavMenu',
  component: NavMenu,
};

export const Default = {
  args: {
    open: true,
    navItems: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  },
};

export const LargeMenu = {
  args: {
    open: true,
    navItems: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Item1', path: '/1' },
      { name: 'Item2', path: '/2' },
      { name: 'Item3', path: '/3' },
      { name: 'Item4', path: '/4' },
      { name: 'Item5', path: '/5' },
      { name: 'Item6', path: '/6' },
      { name: 'Item7', path: '/7' },
    ],
  },
};
