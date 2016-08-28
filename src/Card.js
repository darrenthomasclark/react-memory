import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

// Case defines up and down state. Direction switches between up and down. The up-state refers to the images in the array in app.js.
  render () {
    const direction = this.props.up ? 'up' : 'down'
    switch (direction) {
      case 'up': return <img src={this.props.value} onClick={this.handleClick} className={`card ${direction}`}/>
      break
      case 'down': return <img src='https://i.imgsafe.org/354a8eb755.png' onClick={this.handleClick} className={`card ${direction}`}/>
      break;
      default: return <img src='https://i.imgsafe.org/354a8eb755.png' onClick={this.handleClick} className={`card ${direction}`}/>
    }
  }
}

export default Card
