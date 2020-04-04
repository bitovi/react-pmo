import qs from 'qs'

export const baseUrl = '//www.place-my-order.com/api'

export async function get(path, query) {
  const url = `${baseUrl}${path}${query ? `?${qs.stringify(query)}` : ''}`

  const response = await fetch(url, { method: 'get' })

  if (!response.ok) {
    const data = await response.text()
    return data
  }

  const data = await response.json()
  return data
}

export async function post(path, query, body) {
  const url = `${baseUrl}${path}${query ? `?${qs.stringify(query)}` : ''}`

  const hasBody = typeof body !== 'undefined' ? JSON.stringify(body) : undefined

  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': hasBody && 'application/json',
    },
    body: hasBody && JSON.stringify(body),
  })

  if (!response.ok) {
    const data = await response.text()
    return data
  }

  const data = await response.json()
  return data
}
