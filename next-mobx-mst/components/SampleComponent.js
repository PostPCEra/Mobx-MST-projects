import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'

@inject('store')
@observer
class SampleComponent extends React.Component {

  
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }
  handleFunc() {
    alert('hi therere');
  }
  
  handleViaOutsideCall() {
    outsidejs();
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />

        <br/><br/>
        <div>
          <button onClick={this.handleFunc}>Calls inside JS func</button>
          <button onClick={this.handleViaOutsideCall}>Calls outside JS func</button>
        </div>
        <br/>
      

        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default SampleComponent
