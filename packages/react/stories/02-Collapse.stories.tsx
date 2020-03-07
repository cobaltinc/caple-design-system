import React from 'react';
import {
  Collapse,
  Table
} from '../src';

export default {
  title: 'Collapse',
};

export const Default = () => {
  return (
    <div style={{padding: 30, maxWidth: 600}}>
      <Collapse title="User List">
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
      </Collapse>
    </div>
  )
};

export const DefaultExpand = () => {
  return (
    <div style={{padding: 30, maxWidth: 600}}>
      <Collapse title="User List" defaultExpand>
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
      </Collapse>
    </div>
  )
};

export const Animate = () => {
  return (
    <div style={{padding: 30, maxWidth: 600}}>
      <Collapse title="Animation" animate>
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
      </Collapse>

      <Collapse title="Non Animation" animate={false}>
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
      </Collapse>
    </div>
  )
};

export const CaretText = () => {
  return (
    <div style={{padding: 30, maxWidth: 600}}>
      <Collapse title="User List" caretText={{openText: 'Open', closeText: 'Close'}}>
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
      </Collapse>
    </div>
  )
};

export const Color = () => {
  return (
    <div style={{padding: 30, maxWidth: 600}}>
      <Collapse title="User List" caretText={{openText: 'Open', closeText: 'Close'}} caretTextColor="green" titleColor="red" caretColor="blue">
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
      </Collapse>
    </div>
  )
};
