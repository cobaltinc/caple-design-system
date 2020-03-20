import React from 'react';
import { Card, Checkbox, Button, Input, Spacer, Header } from '../src';

export default {
  title: 'Card',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Card>
        <div style={{ textAlign: 'center', padding: 30 }}>Card Content</div>
      </Card>
    </div>
  );
};

export const CardHeader = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Card header="This is Header">
        <div style={{ textAlign: 'center', padding: 30 }}>Card Content</div>
      </Card>

      <Spacer type="horizontal" size={50} />

      <Card header={<Checkbox label="Custom Header" style={{ margin: 20 }} />}>
        <div style={{ textAlign: 'center', padding: 30 }}>Card Content</div>
      </Card>
    </div>
  );
};

export const CardFooter = () => {
  const footerButton = (
    <Button type="primary" style={{ margin: 10 }}>
      Save
    </Button>
  );

  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Card header="Form" footerStyle={{ textAlign: 'right' }} footer={footerButton}>
        <div style={{ textAlign: 'center', padding: 30 }}>
          <Input.Text block placeholder="Please enter your email." style={{ marginBottom: 10 }} />
          <Input.Password block placeholder="Please enter your password." />
        </div>
      </Card>
    </div>
  );
};

export const Collapse = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Card collapsible>
        <div style={{ textAlign: 'center', padding: 30 }}>
          <Header level={1}>Header 1</Header>
          <Header level={2}>Header 2</Header>
          <Header level={3}>Header 3</Header>
        </div>
      </Card>

      <Spacer type="horizontal" size={50} />

      <Card header="Animatable" collapsible={{ expand: true, animate: true }}>
        <div style={{ textAlign: 'center', padding: 30 }}>
          <Header level={1}>Header 1</Header>
          <Header level={2}>Header 2</Header>
          <Header level={3}>Header 3</Header>
        </div>
      </Card>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Card header="Loading..." loading>
        <div style={{ textAlign: 'center', padding: 30 }}>Card Content</div>
      </Card>
    </div>
  );
};
