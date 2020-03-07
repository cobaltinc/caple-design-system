import React from 'react';
import {
  Header,
  Text
} from '../src';

import * as Icons from '@caple-ui/icons-react';

export default {
  title: 'Styleguide',
};

export const Typography = () => {
  const Section = ({ children }: any) => (
    <div style={{margin: 30}}>
      {children}
    </div>
  )
  return (
    <>
      <Section>
        <Header level={1} strong>DisplayXLarge</Header>
      </Section>
      <Section>
        <Header level={2} strong>DisplayLarge</Header>
      </Section>
      <Section>
        <Header level={3}>DisplayMedium</Header>
      </Section>
      <Section>
        <Header level={4}>DisplaySmall</Header>
      </Section>
      <Section>
        <Text size="large" strong>Heading</Text>
      </Section>
      <Section>
        <Text size="small" strong>SubHeading</Text>
      </Section>
      <Section>
        <Text size="normal" strong>TitleBody</Text>
      </Section>
      <Section>
        <Text size="normal">Body</Text>
      </Section>
      <Section>
        <Text size="small">Caption</Text>
      </Section>
    </>
  );
};

export const Color = () => {
  const Palette = ({ name, color }: any) => (
    <div style={{display: 'inline-block', width: 100, height: 100, marginRight: 10, textAlign: 'center', borderRadius: 4, backgroundColor: '#fff', border: '1px solid #c4cdd5', overflow: 'hidden', fontSize: 12}}>
      <div style={{width: '100%', height: 60, backgroundColor: color, marginBottom: 6}} />
      <div style={{marginBottom: 2}}><strong>{name}</strong></div>
      {color}
    </div>
  );
  return (
    <div style={{padding: 20}}>
      <Header level={4}>Indigo</Header>
      <div style={{padding: '20px 0'}}>
        <Palette name="Indigo Lighter" color="#f4f5fa" />
        <Palette name="Indigo Light" color="#b3bcf5" />
        <Palette name="Indigo" color="#5c6ac4" />
        <Palette name="Indigo Dark" color="#404c9a" />
        <Palette name="Indigo Darker" color="#000639" />
      </div>

      <Header level={4}>Red</Header>
      <div style={{padding: '20px 0'}}>
        <Palette name="Red Lighter" color="#fbeae5" />
        <Palette name="Red Light" color="#fa9a88" />
        <Palette name="Red" color="#de3618" />
        <Palette name="Red Dark" color="#bf1d08" />
        <Palette name="Red Darker" color="#330202" />
      </div>

      <Header level={4}>Blue</Header>
      <div style={{padding: '20px 0'}}>
        <Palette name="Blue Lighter" color="#ebf5fa" />
        <Palette name="Blue Light" color="#b4e0fa" />
        <Palette name="Blue" color="#006fbb" />
        <Palette name="Blue Dark" color="#084e8a" />
        <Palette name="Blue Darker" color="#001429" />
      </div>

      <Header level={4}>Ink</Header>
      <div style={{padding: '20px 0'}}>
        <Palette name="Ink Lightest" color="#919eab" />
        <Palette name="Ink Lighter" color="#637381" />
        <Palette name="Ink Light" color="#454f5b" />
        <Palette name="Ink" color="#212b36" />
      </div>

      <Header level={4}>Sky</Header>
      <div style={{padding: '20px 0'}}>
        <Palette name="Sky Lighter" color="#f9fafb" />
        <Palette name="Sky Light" color="#f4f6f8" />
        <Palette name="Sky" color="#dfe3e8" />
        <Palette name="Sky Dark" color="#c4cdd5" />
      </div>
    </div>
  )
};

export const Spacing = () => {
  return (
    <div>
      Not yet
    </div>
  )
};

export const Motion = () => {
  return (
    <div>
      Not yet
    </div>
  )
};

export const Icon = () => {
  const DisplayStand = ({ children, name }: any) => (
    <div style={{display: 'inline-block', width: 100, height: 88, margin: 10, textAlign: 'center', borderRadius: 4, backgroundColor: '#fff', border: '1px solid #c4cdd5', overflow: 'hidden', fontSize: 12}}>
      <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 60, borderBottom: '1px solid #c4cdd6', marginBottom: 6}}>
        {children}
      </div>
      <strong>{name}</strong>
    </div>
  );

  return (
    <div style={{padding: 20}}>
      {
        Object.keys(Icons).map((key, index) => {
          const IconComponent = (Icons as any)[key];
          return (
            <DisplayStand name={key} key={index}>
              <IconComponent size={40} color="#212b36" />
            </DisplayStand>
          )
        })
      }
    </div>
  )
};