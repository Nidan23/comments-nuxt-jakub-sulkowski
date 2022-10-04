<template>
  <div id="author_field">
    <div id="avatar">
      <b-avatar size="3rem"></b-avatar>
    </div>
    <div>
      <div>
        <div>
          <v-text-field
            v-model="author"
            label="Autor"
            background-color="#FFFFFF"
            class="rounded-pill"
            outlined></v-text-field>
        </div>
        <v-textarea
          outlined
          v-model="message"
          background-color="#FFFFFF"
          class="rounded-xl"
          label="Komentarz"
        ></v-textarea>
      </div>
      <div style="display: flex; justify-content: end">
        <button id="send-button" @click="addCommentSubmit">Dodaj</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {BackendConnectorService} from '~/helper/backend-connector.service'
import {AddCommentModel} from '~/model/add-comment.model'
import {ref} from 'vue'

const backendConnectorService = BackendConnectorService.getInstance()
let author = ref()
let message = ref()

async function addCommentSubmit() {
  await backendConnectorService.addComment(new AddCommentModel(message.value, author.value))
  window.location.reload()
}
</script>
<style scoped>
@media only screen and (max-width: 1200px) {
  #avatar {
    display: none;
    visibility: hidden;
  }
}

@media only screen and (min-width: 1200px) {
  #author_field {
    display: grid;
    grid-template-columns: 1fr 10fr;
    grid-gap: 20px;
  }
}

#send-button {
  color: white;
  padding: 12px 35px;
  border-radius: 25px;
  background-image: linear-gradient(to right, #1670c9, #19aaf2);
}

.v-text-field--outlined >>> fieldset {
  border-color: #1670c9;
}
</style>
