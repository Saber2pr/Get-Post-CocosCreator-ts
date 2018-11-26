export interface IplayerData {
  money: number
}

export function getPlayerData(): IplayerData {
  // 此处报错请忽略
  return playerData
}

export function postPlayerData({ money }: IplayerData): void {
  // 此处报错请忽略
  playerData.money = money
}
