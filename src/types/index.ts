export interface Message {
  id: string
  text: string
  timestamp: string
  sender?: string
  priority?: 'low' | 'medium' | 'high'
}

export interface Config {
  limit: number
  priority: 'low' | 'medium' | 'high'
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}
