import { mount } from '@vue/test-utils'
import VFormTel from '.'

describe('Molecule - VFormTel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(VFormTel, {
      propsData: {
        value: ''
      }
    })
  })

  test('Renders the label if passed', () => {
    expect(wrapper.find({ name: 'VLabel' }).exists()).toBe(false)

    wrapper.setProps({
      label: 'Enter your telephone number'
    })

    expect(wrapper.find({ name: 'VLabel' }).text()).toContain('Enter your telephone number')
  })

  test('Shows error message if available', () => {
    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toBe('')

    wrapper.setProps({
      errorMessages: 'Please enter your name',
      error: true
    })

    expect(wrapper.find({ name: 'VValidationMessages' }).text()).toContain('Please enter your name')
  })

  test('Renders the coreect classes', () => {
    wrapper.setProps({ disabled: true, error: true })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })
})
