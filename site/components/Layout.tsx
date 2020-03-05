import React from 'react';
import { Grid } from '@caple-ui/react';
import Logo from './Logo';
import SideMenu from './SideMenu';
import TopNav from './TopNav';

const { Row, Col } = Grid;

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <div className="container">
      <TopNav />
      <div className="content">
        <Row>
          <Col style={{ position: 'relative', maxWidth: 300 }}>
            <aside>
              <nav>
                <SideMenu />
              </nav>
            </aside>
          </Col>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          min-height: 100vh;
        }

        .content {
          position: relative;
          padding-top: 56px;
          box-sizing: border-box;
        }

        aside {
          position: fixed;
          top: 0;
          display: flex;
          width: 300px;
          height: 100vh;
          margin-top: 56px;
          align-items: start;
          flex-direction: column;
          background-color: white;
          box-sizing: border-box;
        }

        nav {
          width: 100%;
          height: auto;
          overflow-y: hidden;
        }

        nav:hover {
          overflow-y: auto;
        }

        main {
          padding: 20px;
          margin: 0 auto;
          max-width: 1000px;
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
