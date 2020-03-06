import Link from 'next/link';
import Logo from "./Logo"

export default () => {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo height={36} showText />
        </a>
      </Link>

      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          width: 100%;
          height: 56px;
          padding-left: 16px;
          align-items: center;
          background-color: #2A357C;
          z-index: 100;
          box-sizing: border-box;
        }
      `}</style>
    </header>
  );
};