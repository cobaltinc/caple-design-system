interface Props {
  orientation: 'vertical' | 'horizontal';
  height: number;
}

export default ({ orientation, height }: Props) => {
  return <img src={`/svgs/logo_${orientation}.svg`} style={{ height }} />;
};
