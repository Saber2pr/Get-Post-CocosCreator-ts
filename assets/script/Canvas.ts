import PlayerData from './PlayerData'
import { getPlayerData } from './api_i'

const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Label)
  money: cc.Label = null

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    // inject global data
    PlayerData.getInstance().init(getPlayerData())
  }

  start() {}

  update(dt) {
    this.money.string = String(PlayerData.getInstance().money)
  }
}
