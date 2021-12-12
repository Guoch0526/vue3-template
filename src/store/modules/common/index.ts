import { Module } from 'vuex'
import RootStateTypes from '@src/store/interface'
import CommonModuleTypes from './interface'

const commonModule: Module<CommonModuleTypes, RootStateTypes> = {
  namespaced: true,

  state: {
    count: 0
  },

  mutations: {
    increment(state) {
      state.count += 1
    }
  },

  actions: {}
}

export default commonModule
