<template>
  <div class="input-prop" :class="{ 'focused': textFocus }">
    <textarea
      class="talk-text"
      type="text"
      :placeholder="(isReply) ? 'Say a Reply ...' : 'Start talking...'"
      @focus="textFocus = true"
      v-model="textareaText"
      ref="talkText"
    ></textarea>
    <div class="buttons">
      <div title="Bold" @click="editTextarea('<b>','</b>')"><b>B</b></div>
      <div title="Italic" @click="editTextarea('<i>','</i>')"><i>I</i></div>
      <div title="Underline" @click="editTextarea('<u>','</u>')"><u>U</u></div>
      <div title="Strikethrough" @click="editTextarea('<s>','</s>')"><s>S</s></div>
      <div title="Link" @click="editTextarea('<a href=&quot;#&quot;>','</a>')"><i class="link-icon">&nbsp;</i></div>
    </div>
  </div>
  <div class="user-prop">
    <div class="left">
      <img
        class="icontype"
        :src="require('@/assets/img/' + avatars[($store.state.prevNames && $store.state.notNewName) ? $store.state.prevNames[0][1] : $store.state.avatar])"
        alt="Fallenvy"
      />
      <button v-if="!($store.state.prevNames && $store.state.notNewName)" @click="avatarSelect = !avatarSelect" class="change-icon">
        <i class="arrow" :class="{'down': !avatarSelect, 'up': avatarSelect}"></i>
      </button>
      <div v-if="avatarSelect" class="icon-select">
        <div
          v-for="(avatarImg, i) in avatars"
          :key="i"
          class="icon-holder"
          @click="$store.state.avatar = i"
        >
          <img
            class="icontype"
            :src="require('@/assets/img/' + avatarImg)"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="talk-name-pre" :class="{ 'hideChoices': hideNames }" v-if="$store.state.prevNames && $store.state.notNewName">
        <button
          class="talk-name"
          @focus="textFocus = false"
          @click="hideNames = !hideNames"
        >
          {{ $store.state.prevNames[0][0] }}
          <i class="fas"
            :class="{ 'fa-caret-down': hideNames, 'fa-caret-up': !hideNames }"
          ></i>
        </button>
        <div class="talk-name-choices">
          <div v-for="(nameC, i) in $store.state.prevNames" :key="i" class="talk-name-choice">
            <div @click="chooseName(i)" class="cont">{{ nameC[0] }}</div>
            <div class="sep"></div>
          </div>
          <div class="talk-name-choice">
            <div @click="$store.state.notNewName = false" class="cont">-- New Name --</div>
          </div>
        </div>
      </div>
      <input v-else @focus="textFocus = false" class="talk-name" type="text" placeholder="Name" v-model="textName" />
      <div class="buttons">
        <button class="talk-out" @click="talkOut">{{ (isReply) ? 'Reply' : 'Talk Out'}} <i class="far fa-comment-dots"></i></button>
        <button v-if="$store.state.prevNames && !$store.state.notNewName" @click="$store.state.notNewName = true">Previous Name <i class="fas fa-caret-down"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['avatars', 'isReply', 'addTalk'],
  data () {
    return {
      textFocus: false,
      textareaText: '',
      avatarSelect: false,
      hideNames: true,
      textName: ''
    }
  },
  methods: {
    editTextarea (prefix, suffix) {
      const tt = this.$refs.talkText
      const startPos = tt.selectionStart
      const endPos = tt.selectionEnd
      this.textareaText = this.textareaText.substring(0, startPos) + prefix + this.textareaText.substring(startPos, endPos) + suffix + this.textareaText.substring(endPos)
    },
    chooseName (idX) {
      this.$store.commit('modifyNames', idX)
      this.hideNames = true
    },
    talkOut () {
      if ((!(this.$store.state.prevNames && this.$store.state.notNewName)) && (!this.textName.replace(/\s+/g, ''))) {
        alert('No name found')
        return
      }
      if (!this.textareaText.replace(/\s+/g, '')) {
        alert('No talking content found')
        return
      }
      this.addTalk(
        (this.$store.state.prevNames && this.$store.state.notNewName) ? this.$store.state.prevNames[0][0] : this.textName,
        (this.$store.state.prevNames && this.$store.state.notNewName) ? this.$store.state.prevNames[0][1] : this.$store.state.avatar,
        this.textareaText,
        this.isReply
      )
      this.textareaText = ''
      this.textFocus = false
    }
  },
  mounted () {
    const txtArea = this.$refs.talkText
    txtArea.setAttribute('style', 'height:' + txtArea.scrollHeight + 'px')
    txtArea.addEventListener('input', () => {
      txtArea.style.height = 'auto'
      txtArea.style.height = txtArea.scrollHeight + 'px'
    })
  }
}
</script>
