import React from 'react';
import { Header, Text, Spacer } from '../src';

import * as Colors from '@caple-ui/colors';
import * as Icons from '@caple-ui/icons-react';

export default {
  title: 'Introduction|Styleguide',
};

export const Typography = () => {
  return (
    <div style={{ padding: 20 }}>
      <Header level={1} strong>
        DisplayXLarge
      </Header>
      <Spacer type="horizontal" size={30} />
      <Header level={2} strong>
        DisplayLarge
      </Header>
      <Spacer type="horizontal" size={30} />
      <Header level={3}>DisplayMedium</Header>
      <Spacer type="horizontal" size={30} />
      <Header level={4}>DisplaySmall</Header>
      <Spacer type="horizontal" size={30} />
      <Text size="large" strong>
        Heading
      </Text>
      <Spacer type="horizontal" size={30} />
      <Text size="small" strong>
        SubHeading
      </Text>
      <Spacer type="horizontal" size={30} />
      <Text size="normal" strong>
        TitleBody
      </Text>
      <Spacer type="horizontal" size={30} />
      <Text size="normal">Body</Text>
      <Spacer type="horizontal" size={30} />
      <Text size="small">Caption</Text>
    </div>
  );
};

export const Color = () => {
  const Palette = ({ name, color }: any) => (
    <div
      style={{
        display: 'inline-block',
        width: 150,
        height: 100,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #c4cdd5',
        overflow: 'hidden',
        fontSize: 12,
      }}
    >
      <div style={{ width: '100%', height: 60, backgroundColor: color, marginBottom: 6 }} />
      <div style={{ marginBottom: 2 }}>
        <Text strong size="small">
          {name}
        </Text>
      </div>
      <Text size="small">{color}</Text>
    </div>
  );
  return (
    <div style={{ padding: 20 }}>
      <Header level={4}>Indigo</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Indigo Lighter" color={Colors.IndigoLighter} />
        <Palette name="Indigo Light" color={Colors.IndigoLight} />
        <Palette name="Indigo" color={Colors.Indigo} />
        <Palette name="Indigo Dark" color={Colors.IndigoDark} />
        <Palette name="Indigo Darker" color={Colors.IndigoDarker} />
      </div>

      <Header level={4}>Red</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Red Lighter" color={Colors.RedLighter} />
        <Palette name="Red Light" color={Colors.RedLight} />
        <Palette name="Red" color={Colors.Red} />
        <Palette name="Red Dark" color={Colors.RedDark} />
        <Palette name="Red Darker" color={Colors.RedDarker} />
      </div>

      <Header level={4}>Blue</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Blue Lighter" color={Colors.BlueLighter} />
        <Palette name="Blue Light" color={Colors.BlueLight} />
        <Palette name="Blue" color={Colors.Blue} />
        <Palette name="Blue Dark" color={Colors.BlueDark} />
        <Palette name="Blue Darker" color={Colors.BlueDarker} />
      </div>

      <Header level={4}>Ink</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Ink Lightest" color={Colors.InkLightest} />
        <Palette name="Ink Lighter" color={Colors.InkLighter} />
        <Palette name="Ink Light" color={Colors.InkLight} />
        <Palette name="Ink" color={Colors.Ink} />
      </div>

      <Header level={4}>Sky</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Sky Lighter" color={Colors.SkyLighter} />
        <Palette name="Sky Light" color={Colors.SkyLight} />
        <Palette name="Sky" color={Colors.Sky} />
        <Palette name="Sky Dark" color={Colors.SkyDark} />
      </div>

      <Header level={4}>Pink</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Pink Lighter" color={Colors.PinkLighter} />
        <Palette name="Pink Light" color={Colors.PinkLight} />
        <Palette name="Pink" color={Colors.Pink} />
        <Palette name="Pink Dark" color={Colors.PinkDark} />
        <Palette name="Pink Darker" color={Colors.PinkDarker} />
      </div>

      <Header level={4}>Amber</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Amber Lighter" color={Colors.AmberLighter} />
        <Palette name="Amber Light" color={Colors.AmberLight} />
        <Palette name="Amber" color={Colors.Amber} />
        <Palette name="Amber Dark" color={Colors.AmberDark} />
        <Palette name="Amber Darker" color={Colors.AmberDarker} />
      </div>

      <Header level={4}>Incarnadine</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Incarnadine Lighter" color={Colors.IncarnadineLighter} />
        <Palette name="Incarnadine Light" color={Colors.IncarnadineLight} />
        <Palette name="Incarnadine" color={Colors.Incarnadine} />
        <Palette name="Incarnadine Dark" color={Colors.IncarnadineDark} />
        <Palette name="Incarnadine Darker" color={Colors.IncarnadineDarker} />
      </div>

      <Header level={4}>Lightgreen</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Lightgreen Lighter" color={Colors.LightgreenLighter} />
        <Palette name="Lightgreen Light" color={Colors.LightgreenLight} />
        <Palette name="Lightgreen" color={Colors.Lightgreen} />
        <Palette name="Lightgreen Dark" color={Colors.LightgreenDark} />
        <Palette name="Lightgreen Darker" color={Colors.LightgreenDarker} />
      </div>

      <Header level={4}>Cyan</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Cyan Lighter" color={Colors.CyanLighter} />
        <Palette name="Cyan Light" color={Colors.CyanLight} />
        <Palette name="Cyan" color={Colors.Cyan} />
        <Palette name="Cyan Dark" color={Colors.CyanDark} />
        <Palette name="Cyan Darker" color={Colors.CyanDarker} />
      </div>

      <Header level={4}>Purple</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Purple Lighter" color={Colors.PurpleLighter} />
        <Palette name="Purple Light" color={Colors.PurpleLight} />
        <Palette name="Purple" color={Colors.Purple} />
        <Palette name="Purple Dark" color={Colors.PurpleDark} />
        <Palette name="Purple Darker" color={Colors.PurpleDarker} />
      </div>

      <Header level={4}>Style</Header>
      <div style={{ padding: '20px 0' }}>
        <Palette name="Background" color={Colors.Background} />
        <Palette name="Border" color={Colors.Border} />
      </div>
    </div>
  );
};

export const Spacing = () => {
  const Box = ({ size }: { size: number }) => <div style={{ width: size, height: size, backgroundColor: Colors.RedDark }} />;
  return (
    <div style={{ padding: 20 }}>
      <Header level={3}>Tiny (8px)</Header>
      <Box size={8} />

      <Spacer size="normal" />

      <Header level={3}>Small (16px)</Header>
      <Box size={16} />

      <Spacer size="normal" />

      <Header level={3}>Normal (24px)</Header>
      <Box size={24} />
    </div>
  );
};

export const Motion = () => {
  return <div>Not yet</div>;
};

export const Icon = () => {
  const DisplayStand = ({ children, name }: any) => (
    <div
      style={{
        display: 'inline-block',
        width: 100,
        height: 88,
        margin: 10,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #c4cdd5',
        overflow: 'hidden',
        fontSize: 12,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 60,
          borderBottom: '1px solid #c4cdd6',
          marginBottom: 6,
        }}
      >
        {children}
      </div>
      <Text strong size="small">
        {name}
      </Text>
    </div>
  );

  return (
    <div style={{ padding: 20 }}>
      {Object.keys(Icons).map((key, index) => {
        const IconComponent = (Icons as any)[key];
        return (
          <DisplayStand name={key} key={index}>
            <IconComponent size={40} color="#212b36" />
          </DisplayStand>
        );
      })}
    </div>
  );
};
