export interface IplayerData {
  money: number
}

export function getPlayerData(): IplayerData {
  return playerData
}

export function postPlayerData({ money }: IplayerData): void {
  playerData.money = money
}
