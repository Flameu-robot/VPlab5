import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
describe('Input', () => {
    test('отображает поле ввода', () => {
        render(_jsx(Input, { value: "", onChange: () => { } }));
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
    test('показывает метку, если передана', () => {
        render(_jsx(Input, { label: "\u0418\u043C\u044F", value: "", onChange: () => { } }));
        expect(screen.getByText('Имя')).toBeInTheDocument();
    });
    test('вызывает onChange при вводе', () => {
        const handleChange = jest.fn();
        render(_jsx(Input, { value: "", onChange: handleChange }));
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'тест' } });
        expect(handleChange).toHaveBeenCalledWith('тест');
    });
    test('показывает сообщение об ошибке', () => {
        render(_jsx(Input, { value: "", error: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E", onChange: () => { } }));
        expect(screen.getByText('Неверно')).toBeInTheDocument();
    });
    test('отображает placeholder', () => {
        render(_jsx(Input, { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435...", value: "", onChange: () => { } }));
        expect(screen.getByPlaceholderText('Введите...')).toBeInTheDocument();
    });
    test('показывает helperText, если нет ошибки', () => {
        render(_jsx(Input, { helperText: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430", value: "", onChange: () => { } }));
        expect(screen.getByText('Подсказка')).toBeInTheDocument();
    });
    test('скрывает helperText при наличии ошибки', () => {
        render(_jsx(Input, { helperText: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430", error: "\u041E\u0448\u0438\u0431\u043A\u0430", value: "", onChange: () => { } }));
        expect(screen.queryByText('Подсказка')).not.toBeInTheDocument();
    });
    test('добавляет звёздочку при required', () => {
        render(_jsx(Input, { label: "\u041F\u043E\u043B\u0435", required: true, value: "", onChange: () => { } }));
        expect(screen.getByText('*')).toBeInTheDocument();
    });
    test('добавляет класс focused при фокусе', () => {
        render(_jsx(Input, { value: "", onChange: () => { } }));
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        expect(input.parentElement).toHaveClass('focused');
        fireEvent.blur(input);
        expect(input.parentElement).not.toHaveClass('focused');
    });
    test('добавляет класс error при ошибке', () => {
        render(_jsx(Input, { error: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E", value: "", onChange: () => { } }));
        expect(screen.getByRole('textbox').parentElement).toHaveClass('error');
    });
});
//# sourceMappingURL=Input.test.js.map