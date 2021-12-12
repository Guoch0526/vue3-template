import { InjectionKey } from 'vue'
import VuexPersistence from 'vuex-persist'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './interface'

import commonModule from '@src/store/modules/common'
import testModule from '@src/store/modules/test'

const vuexLocal = new VuexPersistence<RootStateTypes>({
  storage: window.localStorage,
  modules: ['commonModule'] // 指定模块持久化
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export const store = createStore<RootStateTypes>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    commonModule,
    testModule
  },
  plugins: [vuexLocal.plugin]
})

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
