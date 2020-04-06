import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Header, Text, Link } from '../src';

export default {
  title: 'Introduction|Quick View',
};

export const Default = () => {
  const components = [
    'Avatar',
    'Badge',
    'Breadcrumb',
    'Button',
    'Callout',
    'Card',
    'Checkbox',
    'Collapse',
    'Divider',
    'Grid',
    'Header',
    'Icon',
    'Input',
    'Link',
    'Modal',
    'Navigation',
    'Pagination',
    'Popover',
    'ProgressIndicator',
    'Select',
    'Skeleton',
    'Slider',
    'Spacer',
    'Spinner',
    'Stepper',
    'Switch',
    'Tab',
    'Table',
    'Text',
    'Toast',
    'Toggle',
    'Tooltip',
    'Upload',
  ];

  return (
    <div style={{ padding: 20 }}>
      <Header level={2}>Styleguide</Header>
      <Text paragraph>
        Caple Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines by
        Cobalt, Inc.
      </Text>
      <ul>
        <li>
          <Link onClick={linkTo('Introduction|Styleguide', 'Typography')}>Typography</Link>
        </li>
        <li>
          <Link onClick={linkTo('Introduction|Styleguide', 'Color')}>Color</Link>
        </li>
        <li>
          <Link onClick={linkTo('Introduction|Styleguide', 'Spacing')}>Spacing</Link>
        </li>
        <li>
          <Link onClick={linkTo('Introduction|Styleguide', 'Motion')}>Motion</Link>
        </li>
        <li>
          <Link onClick={linkTo('Introduction|Styleguide', 'Icon')}>Icon</Link>
        </li>
      </ul>

      <Header level={2}>Components</Header>
      <Text paragraph>Caple Design System UI for React components.</Text>
      <ul>
        {components.map((component, index) => (
          <li key={index}>
            <Link onClick={linkTo(`Component|${component}`)}>{component}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
