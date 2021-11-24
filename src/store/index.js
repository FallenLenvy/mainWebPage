import { createStore } from 'vuex'

export default createStore({
  state: {
    prevNames: null,
    avatar: 0,
    notNewName: true
    // tempTalks: {}
  },
  mutations: {
    updateNamesFromLocal (state) {
      const prevNames = localStorage.getItem('prevNames')
      if (prevNames) {
        state.prevNames = JSON.parse(prevNames)
      }
    },
    modifyNames (state, idX) {
      if (idX !== 0) {
        state.prevNames.splice(0, 0, state.prevNames.splice(idX, 1)[0])
        localStorage.setItem('prevNames', JSON.stringify(state.prevNames))
      }
    },
    addToPrevNames (state, name) {
      let addToNames = true
      if (!state.prevNames) {
        state.prevNames = []
      }
      for (let i = 0; i < state.prevNames.length; i++) {
        if (state.prevNames[i][0] === name && state.prevNames[i][1] === state.avatar) {
          addToNames = false
          break
        }
      }
      if (addToNames) {
        state.prevNames.push([name, state.avatar])
        localStorage.setItem('prevNames', JSON.stringify(state.prevNames))
      }
    }
    // updateTalksFromLocal (state) {
    //   const talks = localStorage.getItem('talks')
    //   if (talks) {
    //     state.tempTalks = JSON.parse(talks)
    //   }
    // },
    // setTempTalks (state, theTalks) {
    //   state.tempTalks = theTalks
    //   localStorage.setItem('talks', JSON.stringify(theTalks))
    // }
  },
  actions: {
  },
  modules: {
  }
})
