import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Input } from '../src/components/input/Input';
import { getByDataName } from '../utils/test-utils';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input />);
  });

  it('onChange is working', () => {
    const onChange = jest.fn();
    const { container } = render(<Input onChange={onChange} />);
    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'test' } });
    expect(onChange).toBeCalled();
  });

  it('can add className', () => {
    const { container } = render(<Input className="test" />);
    const input = container.querySelector('input');
    const hasClass = input?.classList.contains('test');
    expect(hasClass).toBe(true);
  });

  it('can add wrapperClasses', () => {
    const { container } = render(<Input wrapperClasses="test" />);

    // get by data-name
    const wrapper = getByDataName(container, 'input-wrapper') as HTMLElement;
    console.log(wrapper);
    // const hasClass = wrapper.classList.contains('test');
    // expect(hasClass).toBe(true);
  });
});
