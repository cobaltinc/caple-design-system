import React from 'react';
import { Table } from '../src';

export default {
  title: 'Component|Table',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 600 }}>
      <Table>
        <Table.Head>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Age</Table.Cell>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>lgross195@ssorgyesdnil.com</Table.Cell>
            <Table.Cell>Lindsey Gross</Table.Cell>
            <Table.Cell>24</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>abuchanan670@nanahcubaerdna.org</Table.Cell>
            <Table.Cell>Andrea Buchanan</Table.Cell>
            <Table.Cell>52</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>dgraham788@mahargaleinad.com</Table.Cell>
            <Table.Cell>Daniela Graham</Table.Cell>
            <Table.Cell>37</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>krichards933@sdrahcirardnassak.net</Table.Cell>
            <Table.Cell>Kassandra Richards</Table.Cell>
            <Table.Cell>20</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>csingh363@hgnisronoc.com</Table.Cell>
            <Table.Cell>Conor Singh</Table.Cell>
            <Table.Cell>42</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
