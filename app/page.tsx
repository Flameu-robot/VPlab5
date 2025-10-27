'use client';

import React, { useState } from 'react';
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

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
    if (value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Component Examples</h1>

      <h2>Buttons</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Button variant="primary" size="sm" onClick={handleButtonClick}>
          Small Primary
        </Button>
        <Button variant="secondary" size="md" onClick={handleButtonClick}>
          Medium Secondary
        </Button>
        <Button variant="danger" size="lg" onClick={handleButtonClick}>
          Large Danger
        </Button>
        <Button variant="primary" size="md" disabled onClick={handleButtonClick}>
          Disabled
        </Button>
      </div>

      <h2>Inputs</h2>
      <Input
        label="Name"
        placeholder="Enter your name"
        value={inputValue}
        onChange={setInputValue}
        helperText="Please enter your full name"
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={emailValue}
        onChange={handleEmailChange}
        error={emailError}
        required
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={passwordValue}
        onChange={setPasswordValue}
        required
      />
    </div>
  );
}