import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default function Header ({ isLoggedIn }) {
  const AccountButton = () => (
    <div className="dropdown">
      <i className="fa-solid fa-user fa-lg"></i>
      <div className="dropdown-content">
        <a href="#">Your Profile</a>
        <a href="#">Account Settings</a>
        <a href="#">Logout</a>
      </div>
    </div>
  )
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/favicon.svg`} alt="logo goes here" />
      {isLoggedIn && <AccountButton />}
    </header>
  )
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
