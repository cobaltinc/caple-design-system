import React from 'react';
import { FloatingLabelInput, Spacer } from '../src';

export default {
  title: 'Component|FloatingLabelInput',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <FloatingLabelInput.Text label="Title" />
    </div>
  );
};

export const InputText = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer type="vertical">
        <FloatingLabelInput.Text blocks={[4, 3, 3, 4]} delimiter="-" label="Blocks: [4, 3, 3, 4]" />
        <FloatingLabelInput.Text blocks={[4, 3, 3, 4]} delimiter="-" uppercase label="Blocks: [4, 3, 3, 4] with UPPERCASE" />
        <FloatingLabelInput.Text blocks={[4, 3, 3, 4]} delimiter="-" lowercase label="Blocks: [4, 3, 3, 4] with lowercase" />
      </Spacer>
    </div>
  );
};

export const InputEmail = () => {
  return (
    <div style={{ padding: 30 }}>
      <FloatingLabelInput.Email label="Email" />
    </div>
  );
};

export const InputPassword = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelInput.Password toggle label="Please enter your password." />
    </div>
  );
};

export const InputNumber = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Spacer type="vertical">
        <FloatingLabelInput.Number group="thousand" label="Thousand style" />
        <FloatingLabelInput.Number group="lakh" label="Lakh style" />
        <FloatingLabelInput.Number group="wan" label="Wan style" />
        <FloatingLabelInput.Number group="none" label="None style" />
      </Spacer>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelInput.Text label="Please enter your name." loading />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelInput.Text label="Disabled" disabled />
    </div>
  );
};

export const Readonly = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <FloatingLabelInput.Text label="Readonly" readonly />
    </div>
  );
};

export const Status = () => {
  return (
    <>
      <div style={{ padding: 20, maxWidth: 500 }}>
        <FloatingLabelInput.Text label="Error" status="error" />
      </div>
      <div style={{ padding: 20, maxWidth: 500 }}>
        <FloatingLabelInput.Text label="Invalid" status="invalid" />
      </div>
    </>
  );
};

export const Subfix = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Spacer type="vertical">
        <FloatingLabelInput.Text label="Title" subfix="SUBFIX" />
      </Spacer>
    </div>
  );
};
