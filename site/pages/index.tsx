import NextLink from 'next/link'
import EmptyLayout from 'layouts/EmptyLayout';
import Logo from '@components/Logo';

import { 
  Button,
  Header,
  Text,
  Divider,
  Link,
  Icon
} from '@caple-ui/react';

const Page = () => {
  return (
    <div className="container">
      <Logo height={300} />
      <Header level={1} style={{marginTop: 20}}>Caple Design System</Header>
      <Text paragraph style={{marginTop: 20}}>Caple Design System is an open-source design system built by <Link href="http://cobalt.run">Cobalt, Inc.</Link></Text>
      <Divider />
      

      <div className="buttons">
        <NextLink href="/introduction">
          <a>
            <Button type="primary" size="xlarge" style={{marginRight: 20}}>Getting Started</Button>
          </a>
        </NextLink>
        <a href="https://github.com/cobaltinc/caple-design-system" target="_blank">
          <Button size="xlarge">GitHub</Button>
        </a>
      </div>

      <footer>
        <Text paragraph size="small">Released under the MIT License</Text>
        <Text paragraph size="small">Made with ❤️ by Cobalt, Inc.</Text>
      </footer>

      <style jsx>{`
        .container {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 600px;
          margin: 0 auto;
          transform: translate(-50%, -70%);
          text-align: center;
        }

        .buttons {
          margin-top: 50px;
        }

        footer {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

Page.Layout = EmptyLayout;

export default Page;