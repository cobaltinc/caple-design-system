import React from 'react';
import { Modal, Button, Header, Input, Spacer, Grid } from '../src';

const { Row, Col } = Grid;

export default {
  title: 'Component|Modal',
};

interface ModalContentProps {
  onSubmit(): void;
}

const ModalContent = ({ onSubmit }: ModalContentProps) => {
  const { useState } = React;
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmit();
    }, 1000);
  };

  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Form</Header>
      <Spacer size={30} />
      <Input.Text placeholder="Please enter your email." />
      <Spacer size={10} />
      <Input.Password placeholder="Please enter your password." />
      <Spacer size={10} />
      <Row justify="end">
        <Col>
          <Button type="core" onClick={handleSubmit} loading={loading}>
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export const Default = () => {
  const { useState } = React;
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    setVisible(false);
  };

  return (
    <div style={{ padding: 30 }}>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <ModalContent onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};
