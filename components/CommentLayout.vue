<template>
  <div class="comment">
    <div class="">
      <b-avatar size="3rem"></b-avatar>
    </div>
    <div class="">
      <div class="title">
        <p id="author" >{{ author }}</p>
        <p id="createdAt" >{{ howLongAgo }} ago</p>
      </div>
      <div id="message">
        {{ message }}
      </div>
      <div id="links" class="">
        <a>Odpowiedz</a>
        <div class="separator">|</div>
        <a>Edytuj</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import {ref} from 'vue'

const props = defineProps({
  commentId: {
    required: true,
  },
  message: {
    required: true
  },
  author: {
    required: true
  },
  createdAt: {
    required: true
  }
})
dayjs.extend(relativeTime)
const howLongAgo = ref(dayjs(new Date()).from(props.createdAt, true))
</script>

<style scoped>
.comment {
  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-gap: 20px;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 15px 0;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px #dcdcdc;
}

.title {
  padding-top: 6px;
}

#author, #createdAt {
  margin-bottom: 5px;
  display: block
}

#author {
  font-weight: bold;
}

#createdAt {
  font-size: 12px;
}

#message {
  font-size: 12px;
  font-weight: bold;
  padding-top: 20px;
}

.separator {
  height: 5px;
  width: 1px;
  background-color: #EFEFEF;
  color: #EFEFEF;
  display: inline;
  margin: 0 15px;
}

#links {
  display: flex;
  justify-content: end;
  margin-top: 5px;
}

#links > a {
  font-size: 13px;
  color: cornflowerblue;
}
</style>
