import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(180deg, #121E99 0%, #8FFFFF 100%)'
    }}>

      <div className="text-center">
        <h1 className="text-9xl pb-4 font-bold font-sans mb-4 text-white">Santa Shuffle</h1>
        <p className="text-4xl pb-4 mt-8 text-white">Gift exchanges made simple.</p>

        <div className="mt-8 space-x-4">
          <Link to="/create-shuffle">
            <button className="bg-white text-xl text-black font-bold py-6 px-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/40 active:shadow-xl active:shadow-blue-400/80 active:scale-95">
              Create a new shuffle
            </button>
          </Link>
          <Link to="/join-shuffle">
            <button className="bg-white/20 backdrop-blur-sm text-xl text-white font-bold py-6 px-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 active:shadow-xl active:shadow-white/30 active:scale-95 border border-white/30">
              Join a shuffle
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default HomePage
