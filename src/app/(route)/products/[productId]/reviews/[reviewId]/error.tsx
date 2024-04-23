'use client'
/**
 * Next js에서 Error를 처리할때 사용되는 Error Boundary 컴포넌트에서는 2가지의 파라미터를 가진다.
 * 1. error : 발생한 Error 객체를 나타낸다.
 * 2. reset : 발생한 에러를 처리한 이후 자식컴포넌트를 재설정할지 여부를 결정한다. (기본적으로 에러를 처리한 이후, 자식컴포넌트는 재설정 되지 않지만 reset 메서드를 사용하여 재설정이 가능하다.)
 * ---> 기본값 false, true로 설정시 에러처리이후 자동으로 자식컴포넌트를 재설정한다.
 */
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
