export class Cards {

  private readonly cards: Card[]

  constructor() {
    this.cards = Card.denominations.map(d => new Card(d))
  }

  getRandomCard() : Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length)
    // @ts-ignore
    return this.cards[randomIndex]
  }

  removeCard(card: Card) {
    const index = this.cards.findIndex(c => c.denomination === card.denomination)
    if (index >= 0) this.cards.splice(index, 1)
  }

  hasCards(): boolean {
    return this.cards.length > 0
  }
}

export class Card {

  static readonly denominations: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  constructor(readonly denomination: string) {
    if (!Card.denominations.includes(denomination)) {
      throw `not allowed ${denomination}`
    }
  }

  isHigherRankedThan(other: Card): boolean {
    return this.value() > other.value()
  }

  value(): number {
    return Card.denominations.indexOf(this.denomination) + 1
  }
}
