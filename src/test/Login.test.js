import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should display error message for empty email input', () => {
    const form = wrapper.find('form');
    form.simulate('submit');

    const emailError = wrapper.find('.error').at(0);
    expect(emailError.text()).toBe('Ingrese un correo electrónico válido');
  });

  it('should display error message for empty password inptu', () => {
    const form = wrapper.find('form');
    form.simulate('submit');

    const passwordError = wrapper.find('.error').at(1);
    expect(passwordError.text()).toBe('Ingrese una contraseña válida');
  });

  it('should display error message for invalid email format', () => {
    const emailInput = wrapper.find('input[type="email"]');
    emailInput.simulate('change', { target: { value: 'ari@gmail.com' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    const emailError = wrapper.find('.error').at(0);
    expect(emailError.text()).toBe('Ingrese un correo electrónico válido');
  });
});
