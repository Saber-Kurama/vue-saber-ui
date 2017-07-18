import { play } from 'vue-play'
import Vue from 'vue'
import Button from '../packages/button/src'

Vue.component('Button', Button);

play('MyButton')
  // .add('with text', {
  //   template: `<button @click="$log('123')">Hello</button>`
  // })
  .add('with text', {
    template: `<Button @click="$log('123')">Hello</Button>`
  })
