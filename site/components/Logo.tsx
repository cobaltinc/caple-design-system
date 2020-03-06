import { Text } from "@caple-ui/react";

interface Props {
  height: number;
  showText?: boolean;
}

export default ({ height, showText = false }: Props) => {
  const imageStyle: React.CSSProperties = {
    height,
    verticalAlign: 'middle'
  };

  const textStyle: React.CSSProperties = {
    marginLeft: 10
  }

  return (
    <>
      <img src={require('@assets/images/logo.png')} style={imageStyle} />
      {showText ? <Text strong size="large" color="#fff" style={textStyle}>Caple Design System</Text> : null}
    </>
  );
};
