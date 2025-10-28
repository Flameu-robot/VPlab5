import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент поля ввода с поддержкой меток, ошибок, вспомогательного текста и различных типов ввода.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email'],
      description: 'Тип поля ввода',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Обязательное поле',
    },
    label: {
      control: { type: 'text' },
      description: 'Метка поля',
    },
    error: {
      control: { type: 'text' },
      description: 'Текст ошибки',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Вспомогательный текст',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Подсказка в поле',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения значения',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Введите текст...',
    value: '',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Имя пользователя',
    placeholder: 'Введите ваше имя',
    value: '',
  },
};

export const Required: Story = {
  args: {
    label: 'Обязательное поле',
    value: '',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Введите корректный email адрес',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Телефон',
    value: '',
    helperText: 'В формате +7 (XXX) XXX-XX-XX',
  },
};

export const Password: Story = {
  args: {
    label: 'Пароль',
    type: 'password',
    value: '',
    placeholder: 'Введите пароль',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: '',
    placeholder: 'example@mail.com',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px' }}>
      <Input
        label="Обычное поле"
        placeholder="Введите текст"
        value=""
        onChange={() => {}}
      />
      <Input
        label="Обязательное поле"
        value=""
        required
        onChange={() => {}}
      />
      <Input
        label="Поле с ошибкой"
        value="неправильное значение"
        error="Это поле содержит ошибку"
        onChange={() => {}}
      />
      <Input
        label="Поле с подсказкой"
        value=""
        helperText="Это вспомогательный текст"
        onChange={() => {}}
      />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px' }}>
      <Input
        label="Текст"
        value=""
        type="text"
        placeholder="Обычный текст"
        onChange={() => {}}
      />
      <Input
        label="Пароль"
        value=""
        type="password"
        placeholder="Введите пароль"
        onChange={() => {}}
      />
      <Input
        label="Email"
        value=""
        type="email"
        placeholder="example@mail.com"
        onChange={() => {}}
      />
    </div>
  ),
};