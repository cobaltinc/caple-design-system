import React from 'react';
import { Header, Text, Spacer, Input, Icon } from '../src';

export default {
  title: 'Input',
};

export const Default = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text />
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text size="tiny" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="small" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="normal" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="large" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="xlarge" placeholder="Please enter your name." />
    </div>
  );
};

export const BorderType = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text borderType="border" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="underline" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="none" placeholder="Please enter your name." />
    </div>
  );
};

export const PrefixSubfix = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text prefix="PREFIX" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text subfix="SUBFIX" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text prefix="PREFIX" subfix="SUBFIX" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text subfix={<Icon type="reload" />} placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="underline" prefix={<Icon.Feather type="github" />} subfix="SUBFIX" placeholder="Please enter your name." />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="none" prefix={<Icon.Feather type="github" />} subfix="SUBFIX" placeholder="Please enter your name." />
    </div>
  );
};

export const InputText = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text blocks={[4, 3, 3, 4]} delimiter="-" placeholder="Blocks: [4, 3, 3, 4]" />
      <Spacer type="horizontal" size={20} />
      <Input.Text blocks={[4, 3, 3, 4]} delimiter="-" uppercase placeholder="Blocks: [4, 3, 3, 4] with UPPERCASE" />
      <Spacer type="horizontal" size={20} />
      <Input.Text blocks={[4, 3, 3, 4]} delimiter="-" lowercase placeholder="Blocks: [4, 3, 3, 4] with lowercase" />
    </div>
  );
};

export const InputPassword = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Password toggle placeholder="Please enter your password." />
    </div>
  );
};

export const InputNumber = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Number group="thousand" placeholder="Thousand style" />
      <Spacer type="horizontal" size={20} />
      <Input.Number group="lakh" placeholder="Lakh style" />
      <Spacer type="horizontal" size={20} />
      <Input.Number group="wan" placeholder="Wan style" />
      <Spacer type="horizontal" size={20} />
      <Input.Number group="none" placeholder="None style" />
    </div>
  );
};

export const InputTextarea = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Textarea rows={3} placeholder="Please tell me your story." />
      <Spacer type="horizontal" size={20} />
      <Input.Textarea autoSize placeholder="Please tell me your story. (AutoSize)" />
      <Spacer type="horizontal" size={20} />
      <Input.Textarea autoSize borderType="underline" placeholder="Please tell me your story. (AutoSize)" />
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text size="tiny" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="small" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="normal" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="large" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Text size="xlarge" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="underline" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="none" placeholder="Please enter your name." loading />
      <Spacer type="horizontal" size={20} />
      <Input.Textarea rows={4} placeholder="Please tell me your story." loading />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text borderType="border" defaultValue="This is value" disabled />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="underline" defaultValue="This is value" disabled />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="none" defaultValue="This is value" disabled />
      <Spacer type="horizontal" size={20} />
      <Input.Textarea rows={4} placeholder="Please tell me your story." disabled />
    </div>
  );
};

export const Error = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text borderType="border" defaultValue="This is value" error />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="underline" defaultValue="This is value" error />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="none" defaultValue="This is value" error />
      <Spacer type="horizontal" size={20} />
      <Input.Textarea rows={4} placeholder="Please tell me your story." error />
    </div>
  );
};

export const Label = () => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <Input.Text borderType="border" defaultValue="This is value" label="Label" />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="underline" defaultValue="This is value" label="Label" labelColor="#5c6ac4" />
      <Spacer type="horizontal" size={20} />
      <Input.Text borderType="none" defaultValue="This is value" label="Label" />
      <Spacer type="horizontal" size={20} />
      <Input.Textarea rows={4} placeholder="Please tell me your story." label="Label" />
    </div>
  );
};
