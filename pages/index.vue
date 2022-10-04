<template>
  <div id="page" class="align-content-center justify-content-center">
    <div></div>
    <div>
      <h5>Dodaj komentarz</h5>
      <AddComment />
      <h5>Komentarze wspierających &#9312;</h5>
      <div v-for="comment in comments">
        <CommentLayout :commentId="comment.id" :message="comment.message" :author="comment.author" :createdAt="comment.createdAt" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from 'vue'
import {BackendConnectorService} from '~/helper/backend-connector.service'

const backendConnectorService = BackendConnectorService.getInstance()
const comments = ref()

onBeforeMount( async () => {
  comments.value = await backendConnectorService.getComments()
})
</script>
<style>
body {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}

#page {
  margin: 0 8px;
}

@media only screen and (min-width: 1200px) {
  #page {
    display: grid;
    grid-template-columns: 28% 44% 28%;
  }
}

h5 {
  margin: 20px 0;
}
</style>
