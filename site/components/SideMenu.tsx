import { useRouter } from 'next/router';
import { Menu } from '@caple-ui/react';
import menus from '@assets/menus.json';

interface Props {
  children: React.ReactNode;
}

export default () => {
  const router = useRouter();

  return (
    <Menu>
      {menus.components.map((menu, index) => (
        <Menu.Item active={router.pathname.includes(menu.title.toLowerCase())} title={menu.title} onClick={() => router.push(menu.path)} key={index} />
      ))}
    </Menu>
  );
};
