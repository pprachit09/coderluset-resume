import { API } from '../config'

export const sendNotification = (body) => {
  return fetch(`${API}/postmessage`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err)
    })
}
