import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('отображает кнопку с текстом', () => {
        render(
          <Button variant="primary" size="md" onClick={() => {}}>
              Нажми меня
          </Button>
        );
        expect(screen.getByText('Нажми меня')).toBeInTheDocument();
    });

    test('вызывает onClick при клике', () => {
        const handleClick = jest.fn();
        render(
          <Button variant="primary" size="md" onClick={handleClick}>
              Кнопка
          </Button>
        );
        fireEvent.click(screen.getByText('Кнопка'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('кнопка отключена при disabled=true', () => {
        render(
          <Button variant="primary" size="md" disabled onClick={() => {}}>
              Кнопка
          </Button>
        );
        expect(screen.getByText('Кнопка')).toBeDisabled();
    });

    test('применяет классы вариантов (primary/secondary/danger)', () => {
        const { rerender } = render(
          <Button variant="primary" size="md" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveClass('primary');

        rerender(
          <Button variant="secondary" size="md" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveClass('secondary');

        rerender(
          <Button variant="danger" size="md" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveClass('danger');
    });

    test('применяет классы размеров (sm/md/lg)', () => {
        const { rerender } = render(
          <Button variant="primary" size="sm" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveClass('sm');

        rerender(
          <Button variant="primary" size="md" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveClass('md');

        rerender(
          <Button variant="primary" size="lg" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveClass('lg');
    });

    test('использует правильный type кнопки', () => {
        const { rerender } = render(
          <Button variant="primary" size="md" type="submit" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');

        rerender(
          <Button variant="primary" size="md" type="reset" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });

    test('кнопка активна по умолчанию', () => {
        render(
          <Button variant="primary" size="md" onClick={() => {}}>
              Кн
          </Button>
        );
        expect(screen.getByRole('button')).not.toBeDisabled();
    });
});