'use client'

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  return (
    <section>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </section>
  )
}

export default ErrorBoundary
