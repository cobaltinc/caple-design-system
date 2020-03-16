import React from 'react';
import {
  Grid,
  Header,
  Spacer
} from '../src';

export default {
  title: 'Grid',
};

const Container = ({ name = 'Col', height = 16, color = '#5c6ac4' }) => (
  <div style={{padding: `${height / 2}px 0`, textAlign: 'center', color: '#fff', backgroundColor: color, borderRadius: 8}}>
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
        <Col auto>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
      </Row>

      <Spacer size={40} />

      <Row>
        <Col span={7}>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
        <Col span={1}>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
        <Col auto>
          <Container />
        </Col>
      </Row>
    </div>
  )
};

export const Flex = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Row>
        <Col flex="200px">
          <Container name="200px" />
        </Col>
        <Col flex="auto">
          <Container name="Auto" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Row>
        <Col flex={3}>
          <Container name="3 / 10" />
        </Col>
        <Col flex={7}>
          <Container name="7 / 10" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Row>
        <Col flex="1 1 200px">
          <Container name="1 1 200px" />
        </Col>
        <Col flex="0 1 300px">
          <Container name="0 1 300px" />
        </Col>
      </Row>
    </div>
  )
};

export const Order = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Row>
        <Col span={1} order={3}>
          <Container name="Col-1, Order 3" />
        </Col>
        <Col span={2} order={1}>
          <Container name="Col-2, Order 1" />
        </Col>
        <Col span={3} order={5}>
          <Container name="Col-3, Order 5" />
        </Col>
        <Col span={4} order={2}>
          <Container name="Col-4, Order 2" />
        </Col>
        <Col span={6} order={4}>
          <Container name="Col-6, Order 4" />
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

export const Responsive = () => {
  const { Row, Col } = Grid;
  return (
    <div style={{padding: 30}}>
      <Row>
        <Col xs={1} sm={2} md={4} lg={7} xl={5} xxl={6}>
          <Container name="Col" />
        </Col>
        <Col xs={2} sm={3} md={4} lg={7} xl={5} xxl={1}>
          <Container name="Col" />
        </Col>
        <Col xs={3} sm={5} md={4} lg={1} xl={3} xxl={6}>
          <Container name="Col" />
        </Col>
        <Col xs={10} sm={6} md={4} lg={1} xl={3} xxl={3}>
          <Container name="Col" />
        </Col>
      </Row>

      <Spacer size={40} />

      <Row>
        <Col xs={{span: 1, order: 2}} span={4}>
          <Container name="Col" color="#a00" />
        </Col>
        <Col xs={{span: 2, order: 1}} span={4}>
          <Container name="Col" color="#0a0" />
        </Col>
        <Col xs={{span: 3, order: 4}} span={4}>
          <Container name="Col" color="#00a" />
        </Col>
        <Col xs={{span: 4, order: 3}} span={4}>
          <Container name="Col" />
        </Col>
      </Row>
    </div>
  )
};