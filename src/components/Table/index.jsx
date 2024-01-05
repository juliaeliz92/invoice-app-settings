import React from 'react'
import { useNavigate } from 'react-router-dom'
import fetchData from 'services/fetchData'
import './styles.scss'

// fetchData calls a promise that imitates an API call
const customerList = await fetchData()

export default function Table () {
  const navigate = useNavigate()
  return <table>
            <thead>
              <tr><th>Name</th><th>Email</th></tr>
            </thead>
            <tbody>
              {customerList.map(customer => <tr key={customer.id} onClick={() => navigate(`/edit/${customer.id}`)}><td>{customer.name}</td><td>{customer.email}</td></tr>)}
            </tbody>
        </table>
}
