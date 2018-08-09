<template>
  <div class="dropdown" v-bind:class="openClass" ref="dropdown">
    <slot name="button" >
      <div>
        button
      </div>
    </slot>
    <slot name="body">
      Body
    </slot>
  </div>
</template>
<script>
// Reference from https://github.com/davidnotplay/vue-my-dropdown/blob/master/src/vue-my-dropdown.vue
export default {
  name: 'mydropdown',
  props: {
  },
  data () {
    return {
      openClass: ''
    }
  },
  methods: {
    toogle () {
      if (this.openClass) {
        this.openClass = ''
        window.document.removeEventListener('click', this.clickOutEvent)
      } else {
        this.openClass = 'open'
        setTimeout(() => {
          window.document.addEventListener('click', this.clickOutEvent)
        }, 10)
      }
    },
    clickOutEvent (evt) {
      this.toogle()
      // console.log("Evt",evt.target)
      // var $dd = this.$el.children[1]
      // if (evt.target !== $dd && !$dd.contains(evt.target)) {
      //   console.log("kkool")
      //   this.$emit('clickout', evt)
      // }
    }
  },
  mounted () {
  },
  beforeDestroy () {
    // prevent duplicated event
    document.removeEventListener('click', this.clickOutEvent)
  }
}
</script>
