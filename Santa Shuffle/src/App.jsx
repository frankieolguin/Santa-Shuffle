import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(180deg, #121E99 0%, #8FFFFF 100%)'
    }}>

      <div className="text-center">
        <h1 className="text-9xl pb-4 font-bold font-sans mb-4 text-white">Santa Shuffle</h1>
        <p className="text-4xl pb-4 mt-8 text-white">Gift exchanges made simple.</p>

        <div className="mt-8">
          <button className="bg-white text-xl text-black font-bold py-6 px-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/40 active:shadow-xl active:shadow-blue-400/80 active:scale-95">
            Create a new shuffle
          </button>
        </div>

      </div>

    </div>
  )
}

export default App
