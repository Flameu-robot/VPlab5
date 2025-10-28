import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
describe('Button', () => {
    test('отображает кнопку с текстом', () => {
        render(_jsx(Button, { variant: "primary", size: "md", onClick: () => { }, children: "\u041D\u0430\u0436\u043C\u0438 \u043C\u0435\u043D\u044F" }));
        expect(screen.getByText('Нажми меня')).toBeInTheDocument();
    });
    test('вызывает onClick при клике', () => {
        const handleClick = jest.fn();
        render(_jsx(Button, { variant: "primary", size: "md", onClick: handleClick, children: "\u041A\u043D\u043E\u043F\u043A\u0430" }));
        fireEvent.click(screen.getByText('Кнопка'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('кнопка отключена при disabled=true', () => {
        render(_jsx(Button, { variant: "primary", size: "md", disabled: true, onClick: () => { }, children: "\u041A\u043D\u043E\u043F\u043A\u0430" }));
        expect(screen.getByText('Кнопка')).toBeDisabled();
    });
    test('применяет классы вариантов (primary/secondary/danger)', () => {
        const { rerender } = render(_jsx(Button, { variant: "primary", size: "md", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveClass('primary');
        rerender(_jsx(Button, { variant: "secondary", size: "md", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveClass('secondary');
        rerender(_jsx(Button, { variant: "danger", size: "md", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveClass('danger');
    });
    test('применяет классы размеров (sm/md/lg)', () => {
        const { rerender } = render(_jsx(Button, { variant: "primary", size: "sm", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveClass('sm');
        rerender(_jsx(Button, { variant: "primary", size: "md", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveClass('md');
        rerender(_jsx(Button, { variant: "primary", size: "lg", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveClass('lg');
    });
    test('использует правильный type кнопки', () => {
        const { rerender } = render(_jsx(Button, { variant: "primary", size: "md", type: "submit", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
        rerender(_jsx(Button, { variant: "primary", size: "md", type: "reset", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
    test('кнопка активна по умолчанию', () => {
        render(_jsx(Button, { variant: "primary", size: "md", onClick: () => { }, children: "\u041A\u043D" }));
        expect(screen.getByRole('button')).not.toBeDisabled();
    });
});
//# sourceMappingURL=Button.test.js.map