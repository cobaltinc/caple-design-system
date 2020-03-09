import React from 'react';
import {
  Grid,
  Header,
  Spacer
} from '../src';

export default {
  title: 'Grid',
};

const Container = ({ name = 'Col', height = 16 }) => (
  <div style={{padding: `${height / 2}px 0`, textAlign: 'center', color: '#fff', backgroundColor: '#5c6ac4', borderRadius: 8}}>
    {name}
  </div>
);

export const Default = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Row>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>
    </div>
  )
};

export const AutoWidth = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Row>
        <Col>
          <Container />
        </Col>
        <Col>
          <Container />
        </Col>
        <Col>
          <Container />
        </Col>
        <Col>
          <Container />
        </Col>
        <Col>
          <Container />
        </Col>
      </Row>
    </div>
  )
};


export const Gutter = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Header level={3} style={{marginBottom: 10}}>Horizontal Gutter</Header>
      <Row gutter={20}>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Vertical Gutter</Header>
      <Row gutter={[0, 20]}>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={8}>
          <Container name="Col-8" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Both</Header>
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Container name="Col-12" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>
    </div>
  )
};

export const Justify = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Header level={3} style={{marginBottom: 10}}>Start</Header>
      <Row justify="start">
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>End</Header>
      <Row justify="end">
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Center</Header>
      <Row justify="center">
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Space Around</Header>
      <Row justify="space-around">
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Space Between</Header>
      <Row justify="space-between">
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
        <Col span={4}>
          <Container name="Col-4" />
        </Col>
      </Row>
    </div>
  )
};

export const Align = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Header level={3} style={{marginBottom: 10}}>Top</Header>
      <Row align="top" gutter={20} style={{height: 100, backgroundColor: '#dfe3e8'}}>
        <Col span={4}>
          <Container name="Col-4" height={20} />
        </Col>
        <Col span={4}>
          <Container name="Col-4" height={40} />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Middle</Header>
      <Row align="middle" gutter={20} style={{height: 100, backgroundColor: '#dfe3e8'}}>
        <Col span={4}>
          <Container name="Col-4" height={20} />
        </Col>
        <Col span={4}>
          <Container name="Col-4" height={40} />
        </Col>
      </Row>

      <Spacer size={40} />

      <Header level={3} style={{marginBottom: 10}}>Bottom</Header>
      <Row align="bottom" gutter={20} style={{height: 100, backgroundColor: '#dfe3e8'}}>
        <Col span={4}>
          <Container name="Col-4" height={20} />
        </Col>
        <Col span={4}>
          <Container name="Col-4" height={40} />
        </Col>
      </Row>

      <Spacer size={40} />
    </div>
  )
};