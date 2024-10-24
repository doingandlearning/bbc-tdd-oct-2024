import pytest
from app.bowling import BowlingGame

@pytest.fixture
def game():
    return BowlingGame()

def roll_many(game, rolls, pins):
    for _ in range(rolls):
        game.roll(pins)

def roll_spare(game):
    first = 9  # or any other number from 1 to 9
    second = 10 - first
    game.roll(first)
    game.roll(second)

def roll_strike(game):
    game.roll(10)

def test_should_return_0_for_game_of_all_zeros(game):
    roll_many(game, 20, 0)
    assert game.score == 0

def test_should_return_20_for_game_of_all_ones(game):
    roll_many(game, 20, 1)
    assert game.score == 20

def test_game_with_spare_and_zeros_should_score_16(game):
    roll_spare(game)
    game.roll(3)
    roll_many(game, 17, 0)
    assert game.score == 16

def test_game_with_strike_then_3_4_then_zeros_should_score_24(game):
    roll_strike(game)
    game.roll(3)
    game.roll(4)
    roll_many(game, 16, 0)
    assert game.score == 24

def test_perfect_game_should_score_300(game):
    roll_many(game, 12, 10)
    assert game.score == 300
