import customerJson from 'services/settings.json'

async function fetchData () {
  // imitating a delay that comes with API
  await new Promise((resolve) => setTimeout(resolve, 6000))
  return customerJson.customers
}

export default fetchData
