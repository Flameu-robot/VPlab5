'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '@/app/components/button/Button';
import Input from '@/app/components/input/Input';
export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleButtonClick = () => {
        alert('Button clicked!');
    };
    const handleEmailChange = (value) => {
        setEmailValue(value);
        if (value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setEmailError('Please enter a valid email address');
        }
        else {
            setEmailError('');
        }
    };
    return (_jsxs("div", { style: { padding: '2rem', maxWidth: '600px', margin: '0 auto' }, children: [_jsx("h1", { children: "Component Examples" }), _jsx("h2", { children: "Buttons" }), _jsxs("div", { style: { display: 'flex', gap: '1rem', marginBottom: '2rem' }, children: [_jsx(Button, { variant: "primary", size: "sm", onClick: handleButtonClick, children: "Small Primary" }), _jsx(Button, { variant: "secondary", size: "md", onClick: handleButtonClick, children: "Medium Secondary" }), _jsx(Button, { variant: "danger", size: "lg", onClick: handleButtonClick, children: "Large Danger" }), _jsx(Button, { variant: "primary", size: "md", disabled: true, onClick: handleButtonClick, children: "Disabled" })] }), _jsx("h2", { children: "Inputs" }), _jsx(Input, { label: "Name", placeholder: "Enter your name", value: inputValue, onChange: setInputValue, helperText: "Please enter your full name" }), _jsx(Input, { label: "Email", type: "email", placeholder: "Enter your email", value: emailValue, onChange: handleEmailChange, error: emailError, required: true }), _jsx(Input, { label: "Password", type: "password", placeholder: "Enter your password", value: passwordValue, onChange: setPasswordValue, required: true })] }));
}
//# sourceMappingURL=page.js.map