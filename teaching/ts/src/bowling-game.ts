export default class BowlingGame {
  rolls: number[];
  constructor() {
    this.rolls = [];
  }

  roll(pins: number) {
    this.rolls.push(pins);
  }

  isSpare(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  isStrike(frameIndex: number) {
    return this.rolls[frameIndex] === 10;
  }

  spareBonus(frameIndex: number) {
    return this.rolls[frameIndex + 2];
  }

  strikeBonus(frameIndex: number) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }
  get score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex += 1;
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }
}
