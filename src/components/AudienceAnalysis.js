import React from 'react'

const AudienceAnalysis = () => {
  return (
    <div className="main-content">
      <p className="location">
        {' '}
        <img
          src="https://img.icons8.com/wired/64/000000/region-code.png"
          alt="Location"
        />
        Port-Hacourt, Nigeria
      </p>
      <div className="audience-analysis">
        <p className="audience-analysis-text">Audience Analysis</p>
        <p className="audience-analysis-text-reason">
          Uniting Students across Nigeria with Technology
        </p>
        <div className="compass">
          <p className="c1">
            <span className="nc">North-Central </span>
            <span className="ne">North-East </span>
            <span className="nw">North-West </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AudienceAnalysis
