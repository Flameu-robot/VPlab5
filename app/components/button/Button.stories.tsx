import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Универсальный компонент кнопки с поддержкой различных стилей, размеров и состояний.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'Стиль кнопки',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Отключена ли кнопка',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Тип кнопки',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Danger Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Button variant="primary" size="sm" onClick={() => {}}>
        Small
      </Button>
      <Button variant="primary" size="md" onClick={() => {}}>
        Medium
      </Button>
      <Button variant="primary" size="lg" onClick={() => {}}>
        Large
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Button variant="primary" size="md" onClick={() => {}}>
        Primary
      </Button>
      <Button variant="secondary" size="md" onClick={() => {}}>
        Secondary
      </Button>
      <Button variant="danger" size="md" onClick={() => {}}>
        Danger
      </Button>
    </div>
  ),
};