import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/login/Button.vue'

describe('Button', () => {
  it('Should render props.btntext when passed', () => {
    const btntext = 'click me'
    const wrapper = shallowMount(Button, {
      propsData: { btntext },
    })
    expect(wrapper.text()).to.include(btntext)
  })
})
