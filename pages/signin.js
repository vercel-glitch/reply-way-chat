import { useEffect } from 'react'

export default function SignIn() {
  useEffect(() => {
    // Redirect to app.replyway.com
    window.location.href = 'https://app.replyway.com'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Replyway...</p>
      </div>
    </div>
  )
}
