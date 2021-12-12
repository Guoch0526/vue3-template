import { Module } from 'vuex'
import RootStateTypes from '@src/store/interface'
import TestModuleTypes from './interface'

const testModule: Module<TestModuleTypes, RootStateTypes> = {
  namespaced: true,

  state: {
    test: 0
  },

  mutations: {
    incrementTest(state) {
      state.test += 1
    }
  },

  actions: {}
}

export default testModule
