import React from 'react';
import { Grid } from "@caple-ui/react";
import Logo from './Logo';
import SideMenu from './SideMenu';

const {
  Row, Col
} = Grid;

interface Props {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  return (
    <div className="container">
      <Row>
        <Col span={4} style={{position: 'relative'}}>
          <aside>
            <Logo orientation="horizontal" height={50} />
            <nav>
              <SideMenu />
            </nav>
          </aside>
        </Col>
        <Col span={12}>
          <main>
            {children}
          </main>
        </Col>
      </Row>

      <style jsx>{`
        .container {
          max-width: 1250px;
          min-height: 100vh;
          margin: 0 auto;
          padding: 0 16px;
        }

        aside {
          position: fixed;
          top: 0;
          display: flex;
          width: 300px;
          height: 100vh;
          padding-top: 40px;
          align-items: start;
          flex-direction: column;
          box-sizing: border-box;
        }

        nav {
          width: 100%;
          height: auto;
        }

        nav:hover {
          overflow-y: auto;
        }

        main {
          height: 100vh;
          padding: 40px;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};