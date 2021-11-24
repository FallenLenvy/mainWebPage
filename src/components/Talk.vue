<template>
  <!-- Talks -->
  <section class="talks">
    <div class="talks-container">
      <h2>Lets talk <sup v-if="talkLoaded">({{computedTalks.length}})</sup></h2>
      <TalkInput
        :avatars="avatars"
        isReply=""
        :addTalk="addTalk"
      />

      <p class="loading" v-if="!talkLoaded"> T </p>
      <button class="show-talks top" v-if="talkLoaded && computedTalks.length > 0 && !talkShow" @click="talkShow = true">Show Talks <i class="fas fa-caret-down"></i></button>
      <div class="talks-wrapper" v-if="talkShow">
        <div class="talk-holder"
          v-for="talk in computedTalks"
          :key="talk.id"
          :class="{ 'reply': talk.reply, 'reply-reply': talk.replyReply }"
        >
          <div class="talk">
            <div class="left">
              <img
                class="icontype"
                :src="require('@/assets/' + talk.avatar)"
                :alt="talk.name"
              />
            </div>
            <div class="right">
              <h4>
                {{ talk.name }} <span class="said">said -</span>
                <span class="when left-dot">{{ timeDiff(talk.time) }}</span>
              </h4>
              <p v-html="talk.text"></p>
              <div class="talk-foot">
                <a :title="talk_ups(talk.id)" @click="talkUp(talk.id, true)">{{ ( talk.ups && Object.keys(talk.ups).length > 0 ) ? Object.keys(talk.ups).length : '' }} <i class="arrow up"></i></a>&nbsp;|
                <a @click="talkUp(talk.id, false)"><i class="arrow down"></i></a>
                <a v-if="!talk.replyReply" @click="alterReply(talk.id)" class="left-dot">Reply</a>
                <a class="left-dot">Share</a>
              </div>
            </div>
          </div>

          <TalkInput
            v-if="replies[talk.id]"
            :avatars="avatars"
            :isReply="talk.id"
            :addTalk="addTalk"
          />
        </div>
      </div>

      <button class="show-talks bottom" v-if="talkLoaded && computedTalks.length > 0 && talkShow" @click="talkShow = false">Hide Talks <i class="fas fa-caret-up"></i></button>
    </div>
  </section>
</template>

<script>
import db from '@/firebase/firebaseinit'
import { ref, set, remove, onValue, serverTimestamp } from 'firebase/database'
import TalkInput from '@/components/TalkInput'

export default {
  props: ['pageName'],
  data () {
    return {
      avatars: [
        'AnonymousScrewhead.png',
        'CrossScrew.png',
        'RedScrewdriver.png',
        'SlantedScrew.png',
        'StraightScrew.png',
        'YellowScrewdriver.png'
      ],
      talks: {},
      talkShow: false,
      talkLoaded: false,
      replies: {}
    }
  },
  components: { TalkInput },
  computed: {
    computedTalks () {
      const unroll = []
      function addToUnroll (theRoll, prevId, depth, thoseAvatars) {
        if (!theRoll) return
        const theKeys = Object.keys(theRoll)
        for (let i = 0; i < theKeys.length; i++) {
          const unrollTalk = { ...theRoll[theKeys[i]] }
          unrollTalk.id = prevId + '-' + theKeys[i].toString()
          unrollTalk.reply = depth === 1
          unrollTalk.replyReply = depth >= 2
          unrollTalk.replyInput = false
          if (unrollTalk.avatar >= 0 && unrollTalk.avatar < thoseAvatars.length) {
            unrollTalk.avatar = 'img/' + thoseAvatars[unrollTalk.avatar]
          } else if (unrollTalk.avatar === -1) {
            unrollTalk.avatar = 'svg/logo.svg'
          } else {
            unrollTalk.avatar = 'img/' + thoseAvatars[0]
          }
          delete unrollTalk.replies
          unroll.push(unrollTalk)
          if (depth < 2) {
            addToUnroll(theRoll[theKeys[i]].replies, unrollTalk.id, depth + 1, thoseAvatars)
          }
        }
      }
      const thoseAvatars = this.avatars
      addToUnroll(this.talks, '', 0, thoseAvatars)
      return unroll
    }
  },
  methods: {
    createTalkObj (nameStr, avatarNum, textStr) {
      return {
        name: nameStr,
        avatar: avatarNum,
        time: serverTimestamp(),
        text: textStr
      }
    },
    addTalk (nameStr, avatarNum, textStr, talkId) {
      if (!this.talkLoaded) {
        alert('Unable to connect')
        return
      }
      if (talkId) {
        const repTalk = this.getTalkFromId(talkId)
        if (repTalk) {
          let repId = 0
          if (repTalk.replies) repId = Object.keys(repTalk.replies).length
          // else repTalk.replies = {}
          // repTalk.replies[repId] = this.createTalkObj(nameStr, avatarNum, textStr)
          let relPath = ''
          talkId.split('-').filter(i => i).forEach(eleId => {
            relPath += eleId + '/replies/'
          })
          set(ref(db, 'talks/' + this.pageName + '/' + relPath + repId.toString()),
            this.createTalkObj(nameStr, avatarNum, textStr)
          ).then(() => {
            this.$store.commit('addToPrevNames', nameStr)
            alert('Reply added successful')
          }).catch((error) => {
            alert('An error occured\nCheck console log for details')
            console.log(error)
          })
          this.alterReply(talkId)
        }
      } else {
        let talkDBId = 0
        talkDBId = Object.keys(this.talks).length
        // this.talks[talkDBId] = this.createTalkObj(nameStr, avatarNum, textStr)
        set(ref(db, 'talks/' + this.pageName + '/' + talkDBId.toString()),
          this.createTalkObj(nameStr, avatarNum, textStr)
        ).then(() => {
          this.$store.commit('addToPrevNames', nameStr)
          alert('Talk added successful')
        }).catch((error) => {
          alert('An error occured\nCheck console log for details')
          console.log(error)
        })
      }
    },
    alterReply (talkId) {
      if (this.replies[talkId]) {
        delete this.replies[talkId]
      } else {
        for (var rep in this.replies) delete this.replies[rep]
        this.replies[talkId] = true
      }
    },
    getTalkFromId (talkId) {
      const idxList = talkId.split('-').filter(i => i)
      let reqTalk = null
      let curObj = this.talks
      for (let i = 0; i < idxList.length; i++) {
        if (!curObj) break
        const idX = parseInt(idxList[i])
        // if (idX > -1 && idX < curArray.length) reqTalk = curArray[idX]
        if (Object.prototype.hasOwnProperty.call(curObj, idX)) reqTalk = curObj[idX]
        else break
        curObj = reqTalk.replies
      }
      return reqTalk
    },
    talkUp (talkId, up) {
      let upObj = this.getTalkFromId(talkId).ups
      if (!upObj) upObj = {}
      if (this.$store.state.prevNames && this.$store.state.notNewName) {
        let relPath = ''
        const idxList = talkId.split('-').filter(i => i)
        for (let i = 0; i < idxList.length; i++) {
          if (i !== 0) relPath += 'replies/'
          relPath += idxList[i] + '/'
        }
        relPath += 'ups/'
        const upHas = Object.prototype.hasOwnProperty.call(upObj, this.$store.state.prevNames[0][0])
        if (!upHas && up) {
          // upObj[this.$store.state.prevNames[0][0]] = 1
          set(ref(db, 'talks/' + this.pageName + '/' + relPath + '/' + this.$store.state.prevNames[0][0]), 1)
        } else if (upHas && !up) {
          // delete upObj[this.$store.state.prevNames[0][0]]
          remove(ref(db, 'talks/' + this.pageName + '/' + relPath + '/' + this.$store.state.prevNames[0][0]))
        }
      } else {
        alert('No user found\nTalk atleast once to become a user')
      }
    },
    talk_ups (talkId) {
      let retStr = ''
      let upList = this.getTalkFromId(talkId).ups
      if (!upList) return retStr
      else upList = Object.keys(upList)
      for (let i = 0; i < upList.length; i++) {
        if (i !== 0) retStr += ', '
        retStr += upList[i]
      }
      return retStr
    },
    timeDiff (timeStamp) {
      const diff = new Date().getTime() - timeStamp
      const msMin = 60 * 1000
      const msHour = msMin * 60
      const msDay = msHour * 24
      const msMon = msDay * 30
      const msYr = msDay * 365
      if (diff < msMin) {
        return Math.round(diff / 1000) + ' seconds ago'
      } else if (diff < msHour) {
        const val = Math.round(diff / msMin)
        if (val > 1) return val + ' minutes ago'
        else return 'a minute ago'
      } else if (diff < msDay) {
        const val = Math.round(diff / msHour)
        if (val > 1) return val + ' hours ago'
        else return 'an hour ago'
      } else if (diff < msMon) {
        const val = Math.round(diff / msDay)
        if (val > 1) return val + ' days ago'
        else return 'a day ago'
      } else if (diff < msYr) {
        const val = Math.round(diff / msMon)
        if (val > 1) return val + ' months ago'
        else return 'a month ago'
      } else {
        const val = Math.round(diff / msYr)
        if (val > 1) return val + ' years ago'
        else return 'a year ago'
      }
    }
  },
  mounted () {
    this.$store.commit('updateNamesFromLocal')

    // this.$store.commit('updateTalksFromLocal')
    // this.talks = this.$store.state.tempTalks
    // console.log(this.talks)
    // set(ref(db, 'talks/rash_null'), this.talks)

    onValue(ref(db, 'talks/' + this.pageName), (snapshot) => {
      const val = snapshot.val()
      this.talkLoaded = true
      if (val) {
        this.talks = val
        console.log('talks updated')
      } else {
        console.log(val)
        console.log('val is not defined')
      }
    })
  }
}
</script>

<style>
</style>
