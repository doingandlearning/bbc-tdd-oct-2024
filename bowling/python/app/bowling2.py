class BowlingGame: 
  def __init__(self):
    self.rolls = []

  def roll(self, pins):
    self.rolls.append(pins)

  @property
  def score(self):
    score = 0
    frameIndex = 0
    for _ in range(10):
      if self.rolls[frameIndex] + self.rolls[frameIndex + 1] == 10:
        score += 10 + self.rolls[frameIndex + 2]
      else:
        score += self.rolls[frameIndex] + self.rolls[frameIndex + 1]
      frameIndex += 2
    return score