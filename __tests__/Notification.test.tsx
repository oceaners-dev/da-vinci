/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount } from 'enzyme'
import { NotificationProvider } from '../src'

test('NotificationProvider should set allWrappersCreated to true when all notification wrappers are created', () => {
  const wrapper = mount(
    <NotificationProvider>
      <div />
    </NotificationProvider>,
  )
  wrapper.setState({
    bottomCenter: document.createElement('div'),
    bottomLeft: document.createElement('div'),
    bottomRight: document.createElement('div'),
    topCenter: document.createElement('div'),
    topLeft: document.createElement('div'),
    topRight: document.createElement('div'),
  })
  expect(wrapper.state('allWrappersCreated')).toBe(true)
})
