class BowlingGame:
    def __init__(self):
        self.rolls = []
    
    def roll(self, pins: int):
        self.rolls.append(pins)
    
    def is_spare(self, frame_index: int) -> bool:
        return self.rolls[frame_index] + self.rolls[frame_index + 1] == 10
    
    def is_strike(self, frame_index: int) -> bool:
        return self.rolls[frame_index] == 10
    
    @property
    def score(self) -> int:
        score = 0
        frame_index = 0

        for frame in range(10):
            if self.is_strike(frame_index):
                score += 10 + self.rolls[frame_index + 1] + self.rolls[frame_index + 2]
                frame_index += 1
            elif self.is_spare(frame_index):
                score += 10 + self.rolls[frame_index + 2]
                frame_index += 2
            else:
                score += self.rolls[frame_index] + self.rolls[frame_index + 1]
                frame_index += 2
        return score
