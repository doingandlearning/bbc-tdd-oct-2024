import { beforeEach, expect, test } from "vitest";
import { BowlingGame } from "./bowling";

let game: BowlingGame;

beforeEach(() => {
  game = new BowlingGame();
});

function rollMany(rolls: number, pins: number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}

function rollSpare() {
  // give me a random number between 1 and 9
  const first = Math.floor(Math.random() * 9) + 1;
  const second = 10 - first;
  game.roll(first);
  game.roll(second);
}

function rollStrike() {
  game.roll(10);
}

test("it should return 0 for a game of all zeros", () => {
  rollMany(20, 0);
  expect(game.score).toEqual(0);
});

test("it should return 20 for a game of all ones", () => {
  rollMany(20, 1);
  expect(game.score).toEqual(20);
});

test("Game with a spare in 1 frame and zeros should score 16", () => {
  rollSpare();
  game.roll(3);
  rollMany(17, 0);
  expect(game.score).toBe(16);
});

test("Game with a strike, then 3,4, then 0 should score 24", () => {
  rollStrike();
  game.roll(3);
  game.roll(4);
  rollMany(16, 0);
  expect(game.score).toBe(24);
});

test("A perfect game should score 300", () => {
  rollMany(12, 10);
  expect(game.score).toBe(300);
});
