import { test, expect, beforeEach } from "vitest";
import BowlingGame from "./bowling-game";

let game: BowlingGame;

beforeEach(() => {
  game = new BowlingGame();
});

function rollMany(rolls: number, pins: number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}

function rollSpare(firstRoll: number) {
  game.roll(firstRoll);
  game.roll(10 - firstRoll);
}

function rollStrike() {
  game.roll(10);
}

test("should return 0 for a game of all zeros", () => {
  rollMany(20, 0);
  expect(game.score).toEqual(0);
});

test("returns 20 for a game of all ones", () => {
  rollMany(20, 1);
  expect(game.score).toEqual(20);
});

test("game with a spare in 1 frame and then a 3 and the rest zeros should 16", () => {
  rollSpare(5);
  game.roll(3);
  rollMany(17, 0);
  expect(game.score).toEqual(16);
});

test("Game with a strike and then a 3 and 4 should be 24", () => {
  rollStrike();
  game.roll(3);
  game.roll(4);
  rollMany(16, 0);
  expect(game.score).toEqual(24);
});

test("Perfect game will score 300", () => {
  rollMany(12, 10);
  expect(game.score).toBe(300);
});

// Test Cases:
// Game with a strike and then a 3 and 4 should be 24
// A perfect game will score 300
