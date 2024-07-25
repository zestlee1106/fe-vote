// api.js
const API_BASE_URL = 'http://localhost:3333'

const request = async <T>(endpoint: string, options = {}): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    ...options,
  })

  if (!response.ok) {
    const errorResponse = await response.json()
    const error: ResponseError = {
      error: errorResponse.error || 'Unknown Error',
      message: errorResponse.message || 'An error occurred',
      statusCode: response.status,
    }
    throw error
  }

  return response.json()
}

export const getData = <T>(endpoint: string): Promise<T> => {
  return request(endpoint, {
    method: 'GET',
  })
}

export const postData = <T>(endpoint: string, data?: unknown): Promise<T> => {
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

// export class ResponseError extends Error {
//   statusCode: number

// }

export interface ResponseError {
  error: string
  message: string
  statusCode: number
}
