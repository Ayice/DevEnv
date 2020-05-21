import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Hovedkategori from '@/components/Hovedkategori.vue'

describe('Hovedkategori', () => {
  const kategori = { title: 'Test', id: 'testId' }
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Hovedkategori, {
      propsData: { kategori },
    })
  })

  it('Should render props when given', done => {
    expect(wrapper.text()).to.include(kategori.title)
    done()
  })

  it('Should contain an href from the props', done => {
    expect(wrapper.attributes('to')).equal(kategori.id)
    done()
  })
})
