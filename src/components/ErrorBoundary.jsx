import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error, errorInfo })
  }

  render () {
    if (this.state.errorInfo) {
      return (<div>Sorry! Customer List not found!</div>)
    }
    return this.props.children
  }
}

export default ErrorBoundary

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}
