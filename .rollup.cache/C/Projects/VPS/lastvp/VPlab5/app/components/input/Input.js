import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './Input.module.css';
const Input = ({ label, error, helperText, required = false, placeholder, value, onChange, type = 'text', }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    const wrapperClasses = [
        styles.inputWrapper,
        error ? styles.error : '',
        isFocused ? styles.focused : '',
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: styles.container, children: [label && (_jsxs("label", { className: styles.label, children: [label, required && _jsx("span", { className: styles.required, children: "*" })] })), _jsx("div", { className: wrapperClasses, children: _jsx("input", { className: styles.input, type: type, placeholder: placeholder, value: value, onChange: handleChange, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false) }) }), error && _jsx("div", { className: styles.errorMessage, children: error }), helperText && !error && (_jsx("div", { className: styles.helperText, children: helperText }))] }));
};
export default Input;
//# sourceMappingURL=Input.js.map