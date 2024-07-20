// api.js
const API_BASE_URL = 'http://localhost:3333'

const request = async <T>(endpoint: string, options = {}): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return response.json()
}

export const getData = <T>(endpoint: string): Promise<T> => {
  return request(endpoint, {
    method: 'GET',
  })
}

export const postData = <T>(endpoint: string, data: unknown): Promise<T> => {
  return request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const putData = <T>(endpoint: string, data: Record<string, string>): Promise<T> => {
  return request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export const deleteData = <T>(endpoint: string): Promise<T> => {
  return request(endpoint, {
    method: 'DELETE',
  })
}
