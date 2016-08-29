import React from 'react'
import './style.sass'
import Card from './Card'
const SHOW_CARD = 2000
const cardarray1= [
  'https://i.imgsafe.org/25138bd2f4.png',
  'https://i.imgsafe.org/251395bcc2.png',
  'https://i.imgsafe.org/25139b9817.png',
  'https://i.imgsafe.org/2513a4b2f1.png',
  'https://i.imgsafe.org/2513b3e44c.png',
  'https://i.imgsafe.org/2513bd4863.png',
  'https://i.imgsafe.org/2513c45f03.png',
  'https://i.imgsafe.org/2513d04581.png',
  'https://i.imgsafe.org/2513ed715a.png',
  'https://i.imgsafe.org/2513ead212.png',
  'https://i.imgsafe.org/2513f89061.png',
  'https://i.imgsafe.org/2513fd3ddd.png',
  'https://i.imgsafe.org/2514129938.png',
  'https://i.imgsafe.org/25141ad3d7.png',
  'https://i.imgsafe.org/25142afead.png',
  'https://i.imgsafe.org/2514228b0b.png',
]

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: cardarray1.concat(cardarray1),
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
        const up = !this.state.turned.includes(index) ? this.state.matched.includes(index): this.state.turned.includes(index)
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
      })
      return <div>
      <div className="container">
        <img src="https://i.imgsafe.org/3698321f30.png" width="860px" height="auto" alt="Header Image" />
          <div className="centeredcontent">
            <h1>PunchOut Memory</h1>
            <main>
            <div className="instructions">Click on a card to reveal a fighter from Mike Tyson's Punchout. Each fighter has a match. Match all fighters to win!</div>
            <div>{cards}</div>
            </main>
          </div>
      </div>
      <div className="bottombuttons">
        <div className="tkobutton">T.K.O.</div>
        <div className="towelbutton">Throw in the towel</div>
        <div className="copyrightcontainer">
          <div className="copyright">© 2016 Nintendo. Games are property of their respective owners.</div>
          <div className="copyright2">Nintendo of America Inc. Headquarters are in Redmond, Washington</div>
          </div>
      </div>
      </div>
    } else {
      return <div>
      <body>
        <h1> YOU WIN!!</h1>
      </body>
      </div>
    }
  }
}

export default App
