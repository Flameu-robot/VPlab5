import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from './Button';
const meta = {
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
};
export default meta;
export const Primary = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary Button',
        disabled: false,
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Secondary Button',
    },
};
export const Danger = {
    args: {
        variant: 'danger',
        size: 'md',
        children: 'Danger Button',
    },
};
export const Small = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small Button',
    },
};
export const Large = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large Button',
    },
};
export const Disabled = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Disabled Button',
        disabled: true,
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '10px', alignItems: 'center' }, children: [_jsx(Button, { variant: "primary", size: "sm", onClick: () => { }, children: "Small" }), _jsx(Button, { variant: "primary", size: "md", onClick: () => { }, children: "Medium" }), _jsx(Button, { variant: "primary", size: "lg", onClick: () => { }, children: "Large" })] })),
};
export const Variants = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '10px', alignItems: 'center' }, children: [_jsx(Button, { variant: "primary", size: "md", onClick: () => { }, children: "Primary" }), _jsx(Button, { variant: "secondary", size: "md", onClick: () => { }, children: "Secondary" }), _jsx(Button, { variant: "danger", size: "md", onClick: () => { }, children: "Danger" })] })),
};
//# sourceMappingURL=Button.stories.js.map