"use client"

import { useState, useEffect, useCallback } from 'react'
import { Message, Config } from '@/types'

interface MessageListProps {
  workspaceId: string
}

export default function MessageList({ workspaceId }: MessageListProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [config, setConfig] = useState<Config>({ limit: 10, priority: 'high' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Memoized fetch function to prevent unnecessary re-renders
  // and maintain stable function reference for useEffect dependency
  const fetchMessages = useCallback(async () => {
    // Guard clause to prevent API calls without workspaceId
    if (!workspaceId) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      // API call to fetch messages with workspaceId and config
      const response = await fetch(`/api/messages?id=${workspaceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      })

      // Handle HTTP errors (4xx, 5xx responses)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Parse and set messages data
      const data = await response.json()
      setMessages(data)
    } catch (err) {
      // Type-safe error handling with fallback message
      setError(err instanceof Error ? err.message : 'Failed to fetch messages')
    } finally {
      // Ensure loading state is always reset
      setIsLoading(false)
    }
  }, [workspaceId, config]) // Dependencies: refetch when workspaceId or config changes

  // Effect to automatically fetch messages when dependencies change
  // Uses the memoized fetchMessages function to prevent infinite loops
  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  // Loading state UI - provides user feedback during API calls
  if (isLoading) {
    return <div className="p-4 text-center">Loading messages...</div>
  }

  // Error state UI - displays error message when API call fails
  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>
  }

  // Empty state UI - handles case when no messages are available
  if (messages.length === 0) {
    return <div className="p-4 text-center text-gray-500">No messages found</div>
  }

  // Main render - displays list of messages with enhanced styling
  return (
    <div className="space-y-2">
      {messages.map((message) => (
        <div 
          key={message.id} 
          className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <p className="text-gray-900">{message.text}</p>
          <p className="text-sm text-gray-500 mt-1">
            {new Date(message.timestamp).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )
}
