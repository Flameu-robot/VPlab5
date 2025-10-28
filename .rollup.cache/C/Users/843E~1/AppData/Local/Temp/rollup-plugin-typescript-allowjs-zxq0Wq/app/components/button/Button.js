import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Button.module.css';
const Button = ({ variant = 'primary', size = 'md', disabled = false, onClick, children, type = 'button', }) => {
    const buttonClass = [
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : '',
    ].filter(Boolean).join(' ');
    return (_jsx("button", { className: buttonClass, onClick: onClick, disabled: disabled, type: type, children: children }));
};
export default Button;
//# sourceMappingURL=Button.js.map