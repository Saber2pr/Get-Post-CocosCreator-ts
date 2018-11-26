import { IplayerData } from './api_i'

export default class PlayerData {
  private constructor() {}
  private static instance: PlayerData
  static getInstance(): PlayerData {
    this.instance = !!this.instance ? this.instance : new PlayerData()
    return this.instance
  }
  private _money: number
  public init(props: IplayerData) {
    this._money = props.money
  }
  set money(value: number) {
    this._money = value
  }
  get money(): number {
    return this._money
  }
  public export(): IplayerData {
    return {
      money: this._money
    }
  }
}
