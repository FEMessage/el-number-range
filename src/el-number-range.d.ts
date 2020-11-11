import Vue, {VueConstructor} from 'vue'

declare module '@femessage/el-number-range' {
  class FemessageComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type ElNumberRangeData = {}

  type ElNumberRangeMethods = {}

  type ElNumberRangeComputed = {}

  type ElNumberRangeProps = {
    value: any[]
    max: number
    min: number
    width: string
    separator: string
  }

  type ElNumberRange = Combined<
    ElNumberRangeData,
    ElNumberRangeMethods,
    ElNumberRangeComputed,
    ElNumberRangeProps
  >

  export interface ElNumberRangeType
    extends FemessageComponent,
      ElNumberRange {}

  const ElNumberRangeConstruction: ExtendedVue<
    Vue,
    ElNumberRangeData,
    ElNumberRangeMethods,
    ElNumberRangeComputed,
    ElNumberRangeProps
  >

  export default ElNumberRangeConstruction
}
