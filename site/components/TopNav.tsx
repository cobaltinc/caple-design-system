import Logo from "./Logo"

export default () => {
  return (
    <header>
      <Logo orientation="horizontal" height={36} />

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