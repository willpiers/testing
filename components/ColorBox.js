import React from 'react';

class ColorBox extends React.Component {
  static defaultProps = { color: 'red' }
  state = { timesClicked: 0 }

  render() {
    const styles = {
      backgroundColor: this.props.color,
      width: '100px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return <div className='color-box' style={ styles } onClick={ this._onClick.bind(this) }>
      <span style={{ color: 'black' }}>{this.state.timesClicked}</span>
    </div>
  }

  _onClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }
}

export default ColorBox;