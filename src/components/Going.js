import React, { Component } from 'react'
import '../config/api.js'
import base from '../config/base.js'

class Going extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cohort: [],

    }
  }
    componentDidMount () {

      this.rebaseRef = base.syncState('cohort', {
        context: this,
        state: 'cohort',
        asArray: true,
      })
    }
    componentWillUnmount () {
      base.removeBinding(this.rebaseRef)
    }

  render () {
    return (
        <ul className="cohort">
          {this.state.cohort.map(
            (mate, index) => <li key={index}>{mate.name}</li>
          )}
        </ul>
    )
  }

}
export default Going;
