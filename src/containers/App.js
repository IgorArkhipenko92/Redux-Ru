import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { photos, year } = this.props.page
    return (
      <div>
        <p>Привет из App, { name }!</p>
        <p>У тебя { photos.length } за { year } год!</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect (mapStateToProps)(App)
