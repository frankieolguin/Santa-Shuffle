import { Link } from 'react-router-dom'

const JoinShufflePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(180deg, #121E99 0%, #8FFFFF 100%)'
    }}>
      
      {/* Home Button */}
      <Link to="/" className="absolute top-6 left-6">
        <button className="bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:shadow-xl active:shadow-white/30 active:scale-95 border border-white/30">
          ← Home
        </button>
      </Link>

      <div className="text-center">
        <h1 className="text-6xl font-bold font-sans mb-8 text-white">Join a Shuffle</h1>
        <p className="text-2xl text-white mb-8">Enter your shuffle code</p>
        
        <div className="mt-8">
          <button className="bg-white text-xl text-black font-bold py-6 px-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/40 active:shadow-xl active:shadow-blue-400/80 active:scale-95">
            Join Shuffle
          </button>
        </div>
      </div>

    </div>
  )
}

export default JoinShufflePage
