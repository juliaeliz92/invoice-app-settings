import React, { useEffect, useState } from 'react'
import { channels, provinces, currentCountry } from 'utilities/constants'
import settings from 'services/settings.json'
import './styles.scss'

export default function EditForm () {
  const { pathname } = window.location
  const customerId = Number(pathname.substring(pathname.lastIndexOf('/') + 1))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [channel, setChannel] = useState('')
  const [address, setAddress] = useState('')
  const [postal, setPostal] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const findCustomer = () => {
    if (!isNaN(customerId)) {
      const selectedCustomer = settings.customers.find(customer => customer.id === customerId)
      setName(selectedCustomer?.name)
      setEmail(selectedCustomer?.email)
      setChannel(selectedCustomer?.channel)
      setAddress(selectedCustomer?.address)
      setPostal(selectedCustomer?.postal)
      setCity(selectedCustomer?.city)
      setProvince(selectedCustomer?.province)
    } else alert('Customer details not found')
  }
  useEffect(() => {
    findCustomer()
  }, [])

  const validateSubmit = () => {
    const postalCodeRegex = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i
    const isPostalCodeMatch = postalCodeRegex.test(postal)
    if (isPostalCodeMatch) {
      const customer = {
        id: customerId,
        name,
        email,
        channel,
        address,
        postal,
        city,
        province,
        country: currentCountry
      }
      const finalData = settings.customers.map(data => {
        if (customerId === data.id) return customer
        return data
      })
      alert(`the modified list ${JSON.stringify(finalData)}`)
    }
  }
  return <div className="edit-form-container">
    <h2>Customer Edit Form</h2>
    <form name='customer-edit-form' onSubmit={() => validateSubmit()}>
      <label htmlFor="name" >Name:</label><br/>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}required/><br/>
      <label htmlFor="email">Email:</label><br/>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
      <label htmlFor="channel">Channel:</label><br/>
      <select id="channel" name="channel" value={channel} onChange={(e) => setChannel(e.target.value)}>
        {channels.map(channel => <option value={channel} key={channel}>{channel}</option>)}
      </select><br/>
      <label htmlFor="address">Address:</label><br/>
      <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
      <label htmlFor="postal">Postal:</label><br/>
      <input type="text" id="postal" name="postal" value={postal} onChange={(e) => setPostal(e.target.value)}/><br/>
      <label htmlFor="city">City:</label><br/>
      <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}/><br/>
      <label htmlFor="province">Province:</label><br/>
      <select id="province" name="province" value={province} onChange={(e) => setProvince(e.target.value)}>
        {provinces.map(countries => {
          if (countries.code === currentCountry) {
            return countries.provinces.map(province => <option value={province} key={province}>{province}</option>)
          }
          return ''
        })}
      </select><br/>
      <input type='submit' value='Submit'/>
    </form>
  </div>
}
