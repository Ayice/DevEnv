import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/login/Button.vue'

// import HelloWorld from '@/components/HelloWorld.vue'
// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })

describe('Button', () => {
  it('Should render props.btntext when passed', () => {
    const btntext = 'click me'
    const wrapper = shallowMount(Button, {
      propsData: { btntext },
    })
    expect(wrapper.text()).to.include(btntext)
  })
})
