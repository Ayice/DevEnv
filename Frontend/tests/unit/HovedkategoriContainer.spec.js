import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HovedkategoriContainer from '@/views/HovedkategoriContainer.vue'
import Hovedkategori from '@/components/Hovedkategori.vue'

describe('HovedkategoriContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HovedkategoriContainer)
  })

  it('Should contain hovedkategori component', () => {
    console.log(wrapper)
    expect(wrapper.find(Hovedkategori).exists()).to.be.true
  })
})
