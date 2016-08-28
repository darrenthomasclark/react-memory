import React from 'react'
import './style.sass'
import Card from './Card'
// BOSS IMAGE IMPORTS
// BOSS IMAGE IMPORTS
// BOSS IMAGE IMPORTS
      // import Boss0 from <img src= "https://i.imgsafe.org/25138bd2f4.png"/>
      // import Boss1 from <img src= "https://i.imgsafe.org/251395bcc2.png"/>
      // import Boss2 from <img src= "https://i.imgsafe.org/25139b9817.png"/>
      // import Boss3 from <img src= "https://i.imgsafe.org/2513a4b2f1.png"/>
      // import Boss4 from <img src= "https://i.imgsafe.org/2513b3e44c.png"/>
      // import Boss5 from <img src= "https://i.imgsafe.org/2513bd4863.png"/>
      // import Boss6 from <img src= "https://i.imgsafe.org/2513c45f03.png"/>
      // import Boss7 from <img src= "https://i.imgsafe.org/2513d04581.png"/>
      // import Boss8 from <img src= "https://i.imgsafe.org/2513ed715a.png"/>
      // import Boss9 from <img src= "https://i.imgsafe.org/2513ead212.png"/>
      // import Boss10 from <img src= "https://i.imgsafe.org/2513f89061.png"/>
      // import Boss11 from <img src= "https://i.imgsafe.org/2513fd3ddd.png"/>
      // import Boss12 from <img src= "https://i.imgsafe.org/2514129938.png"/>
      // import Boss13 from <img src= "https://i.imgsafe.org/25141ad3d7.png"/>
      // import Boss14 from <img src= "https://i.imgsafe.org/25142afead.png"/>
      // import Boss15 from <img src= "https://i.imgsafe.org/2514228b0b.png"/>
      // import Boss16 from <img src= "https://i.imgsafe.org/25138bd2f4.png"/>
// BOSS IMAGE IMPORTS
// BOSS IMAGE IMPORTS
// BOSS IMAGE IMPORTS
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
      <img src="https://i.imgsafe.org/251f3db24d.png" alt="Header Image" />
      <h1>PunchOut Memory</h1>
        <main>
          <div className="instructions">Click on a tile to reveal an image. Each tile has a match: try to remember where they are, you need to match them all to win!</div>
          {cards}
        </main>
      </div>
        <div className="footercontainer">
          <div className="logotype"><h1>PunchOut Memory</h1></div>
          <div className="tiy">A Javascript exercise by <a href="https://www.linkedin.com/in/darren-clark-4390745"> Darren Clark</a></div>
        </div>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!! </h1>
      </div>
    }
  }
}

export default App
