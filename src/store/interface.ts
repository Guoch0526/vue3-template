import CommonModuleTypes from './modules/common/interface'

export default interface RootStateTypes {}

export interface AllStateTypes extends RootStateTypes {
  commonModule: CommonModuleTypes
}
