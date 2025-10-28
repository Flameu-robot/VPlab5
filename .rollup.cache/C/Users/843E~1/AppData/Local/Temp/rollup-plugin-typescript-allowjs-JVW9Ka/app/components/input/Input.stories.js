import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Input from './Input';
const meta = {
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
export const Default = {
    args: {
        placeholder: 'Введите текст...',
        value: '',
    },
};
export const WithLabel = {
    args: {
        label: 'Имя пользователя',
        placeholder: 'Введите ваше имя',
        value: '',
    },
};
export const Required = {
    args: {
        label: 'Обязательное поле',
        value: '',
        required: true,
    },
};
export const WithError = {
    args: {
        label: 'Email',
        value: 'invalid-email',
        error: 'Введите корректный email адрес',
    },
};
export const WithHelperText = {
    args: {
        label: 'Телефон',
        value: '',
        helperText: 'В формате +7 (XXX) XXX-XX-XX',
    },
};
export const Password = {
    args: {
        label: 'Пароль',
        type: 'password',
        value: '',
        placeholder: 'Введите пароль',
    },
};
export const Email = {
    args: {
        label: 'Email',
        type: 'email',
        value: '',
        placeholder: 'example@mail.com',
    },
};
export const AllStates = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px' }, children: [_jsx(Input, { label: "\u041E\u0431\u044B\u0447\u043D\u043E\u0435 \u043F\u043E\u043B\u0435", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442", value: "", onChange: () => { } }), _jsx(Input, { label: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435", value: "", required: true, onChange: () => { } }), _jsx(Input, { label: "\u041F\u043E\u043B\u0435 \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439", value: "\u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", error: "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0448\u0438\u0431\u043A\u0443", onChange: () => { } }), _jsx(Input, { label: "\u041F\u043E\u043B\u0435 \u0441 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u043E\u0439", value: "", helperText: "\u042D\u0442\u043E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", onChange: () => { } })] })),
};
export const AllTypes = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px' }, children: [_jsx(Input, { label: "\u0422\u0435\u043A\u0441\u0442", value: "", type: "text", placeholder: "\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", onChange: () => { } }), _jsx(Input, { label: "\u041F\u0430\u0440\u043E\u043B\u044C", value: "", type: "password", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", onChange: () => { } }), _jsx(Input, { label: "Email", value: "", type: "email", placeholder: "example@mail.com", onChange: () => { } })] })),
};
//# sourceMappingURL=Input.stories.js.map