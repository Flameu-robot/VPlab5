import React, { useState } from 'react';
import styles from './Input.module.css';

export interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email';
}

const Input: React.FC<InputProps> = ({
label,
error,
helperText,
required = false,
placeholder,
value,
onChange,
type = 'text',}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const wrapperClasses = [
    styles.inputWrapper,
    error ? styles.error : '',
    isFocused ? styles.focused : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={wrapperClasses}>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
      {helperText && !error && (
        <div className={styles.helperText}>{helperText}</div>
      )}
    </div>
  );
};

export default Input;