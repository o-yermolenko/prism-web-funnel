export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary-600">The Prism</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Your modern web funnel for exceptional lead generation and conversion
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Getting Started
            </h2>
            <p className="text-gray-600 mb-6">
              This is your landing page. Start building your funnel journey here.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Start Your Journey
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p className="text-gray-600">Capture attention with compelling content</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p className="text-gray-600">Build trust and showcase value</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p className="text-gray-600">Convert visitors into leads</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

