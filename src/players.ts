import { Card, Cards } from './cards'

export abstract class Player {

  protected readonly cards = new Cards()
  private score = 0

  scorePoint(value: number) {
    this.score += value
  }

  currentScore(): number {
    return this.score
  }

  playCard(card: Card): Card {
    this.cards.removeCard(card)
    return card
  }

  abstract selectCard(scoreCard: Card): Card
}

export class RandomPlayer extends Player {

  selectCard(_: Card): Card {
    return this.cards.getRandomCard()
  }
}

export class EqualPlayer extends Player {

  selectCard(scoreCard: Card): Card {
    return scoreCard
  }
}