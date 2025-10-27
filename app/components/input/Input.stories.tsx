import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';
import { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email'],
    },
    required: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: { action: 'changed' },
  },
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  value: '',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  type: 'email',
  value: 'invalid-email',
  error: 'Please enter a valid email address',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Password',
  type: 'password',
  value: '',
  helperText: 'Please enter a strong password',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Username',
  value: '',
  required: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  placeholder: 'Enter text here',
  value: '',
};