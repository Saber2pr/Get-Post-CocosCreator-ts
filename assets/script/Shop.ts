import PlayerData from './PlayerData'
import { postPlayerData } from './api_i'

const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Label)
  buyBtn: cc.Label = null

  // onLoad () {}

  @property(cc.Integer)
  productValue: number = 100

  start() {
    this.addListener(this.buyBtn.node)
  }

  addListener(node: cc.Node) {
    node.on('touchstart', () => {
      this.buy()
    })
  }

  buy() {
    if (PlayerData.getInstance().money >= this.productValue) {
      PlayerData.getInstance().money -= 100
      this.result()
    }
  }

  result() {
    // post the data to global
    postPlayerData(PlayerData.getInstance().export())
  }

  // update (dt) {}
}
