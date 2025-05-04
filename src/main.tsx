import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Something went wrong</h2>
        <pre className="text-sm text-gray-600">{error.message}</pre>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 w-full bg-wellsfargo-red text-white py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
