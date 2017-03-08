import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('최초 #myButton의 문자열은 msgHello와 같다', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    const msgHello = vm.msgHello
    expect(vm.$el.querySelector('#myButton').textContent)
      .to.equal(msgHello)
  })

  it('#myButton을 클릭하면 msgBye를 출력하고 1초 후 msgHello 로 변경한다', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    const msgBye = vm.msgBye
    const myButton = vm.$el.querySelector('#myButton')
    myButton.click()
    vm.$nextTick(() => {
      expect(myButton.textContent).to.equal(msgBye)
    })
    setTimeout(() => {
      expect(myButton.textContent).to.equal(msgHello)
    }, 1000)
  })

  it('clickBtn 메소드는 발생 후 1초후 원래 값으로 되돌아와야한다', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.loading).to.equal(false)
    vm.clickBtn()
    expect(vm.loading).to.equal(true)
    setTimeout(() => {
      expect(vm.loading).to.equal(false)
    }, 1000)
  })
})
