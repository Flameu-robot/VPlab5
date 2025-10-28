import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
    test('отображает поле ввода', () => {
        render(<Input value="" onChange={() => {}} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('показывает метку, если передана', () => {
        render(<Input label="Имя" value="" onChange={() => {}} />);
        expect(screen.getByText('Имя')).toBeInTheDocument();
    });

    test('вызывает onChange при вводе', () => {
        const handleChange = jest.fn();
        render(<Input value="" onChange={handleChange} />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'тест' } });
        expect(handleChange).toHaveBeenCalledWith('тест');
    });

    test('показывает сообщение об ошибке', () => {
        render(<Input value="" error="Неверно" onChange={() => {}} />);
        expect(screen.getByText('Неверно')).toBeInTheDocument();
    });

    test('отображает placeholder', () => {
        render(<Input placeholder="Введите..." value="" onChange={() => {}} />);
        expect(screen.getByPlaceholderText('Введите...')).toBeInTheDocument();
    });

    test('показывает helperText, если нет ошибки', () => {
        render(<Input helperText="Подсказка" value="" onChange={() => {}} />);
        expect(screen.getByText('Подсказка')).toBeInTheDocument();
    });

    test('скрывает helperText при наличии ошибки', () => {
        render(<Input helperText="Подсказка" error="Ошибка" value="" onChange={() => {}} />);
        expect(screen.queryByText('Подсказка')).not.toBeInTheDocument();
    });

    test('добавляет звёздочку при required', () => {
        render(<Input label="Поле" required value="" onChange={() => {}} />);
        expect(screen.getByText('*')).toBeInTheDocument();
    });

    test('добавляет класс focused при фокусе', () => {
        render(<Input value="" onChange={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);
        expect(input.parentElement).toHaveClass('focused');
        fireEvent.blur(input);
        expect(input.parentElement).not.toHaveClass('focused');
    });

    test('добавляет класс error при ошибке', () => {
        render(<Input error="Неверно" value="" onChange={() => {}} />);
        expect(screen.getByRole('textbox').parentElement).toHaveClass('error');
    });
});