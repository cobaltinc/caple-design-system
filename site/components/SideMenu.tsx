import { useRouter } from 'next/router';
import { Menu, Header } from '@caple-ui/react';
import menus from '@assets/menus.json';

export default () => {
  const router = useRouter();

  return (
    <>
      <Menu>
        {menus.introduction.map((menu, index) => (
          <Menu.Item active={router.pathname.includes(menu.title.toLowerCase())} title={menu.title} onClick={() => router.push(menu.path)} key={index} />
        ))}
      </Menu>

      <Header level={4} style={{marginLeft: 16, marginTop: 24, marginBottom: 8}}>Styleguide</Header>
      <Menu>
        {menus.styleguide.map((menu, index) => (
          <Menu.Item active={router.pathname.includes(menu.title.toLowerCase())} title={menu.title} onClick={() => router.push(menu.path)} key={index} />
        ))}
      </Menu>

      <Header level={4} style={{marginLeft: 16, marginTop: 24, marginBottom: 8}}>Components</Header>
      <Menu>
        {menus.components.map((menu, index) => (
          <Menu.Item active={router.pathname.includes(menu.title.toLowerCase())} title={menu.title} onClick={() => router.push(menu.path)} key={index} />
        ))}
      </Menu>
    </>
  );
};
