import React from 'react'
import './style.sass'
import Card from './Card'
const SHOW_CARD = 2000

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'Jake',
        'Princess Bubbelgum',
        'Finn',
        'BMO',
        'Ice King',
        'Jake',
        'Princess Bubbelgum',
        'Finn',
        'BMO',
        'Ice King'
      ],
      matched: [],
      turned: [],
      win: false
    }
  }

  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_CARD/2)
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
          }
        }
      })
    }
  }

  render () {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        const up = (this.state.turned + this.state.matched).includes(index)
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
      })
      return <div>
      <div className="container">
      <img src="src/images/background.png" alt="Header Image" />
      <h1>PunchOut Memory</h1>
        <main>
          <p>Click on a tile to reveal an image. Each tile has a match: try to remember where they are, you need to match them all to win!</p>
          {cards}
        </main>
      </div>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!!! </h1>
      </div>
    }
  }
}

export default App
