<template>
  <h1>{{ message }}</h1>
  <HelloWorld />
</template>

<script>
// 경로 별칭을 통해 상대경로를 사용하지 않아도
// 절대 경로로 사용할 수 있다.
import HelloWorld from '~/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!!!'
    } 
  }
}
</script>
