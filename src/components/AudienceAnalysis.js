import React from 'react'

const AudienceAnalysis = () => {
  return (
    <div className="main-content">
      <div className="audience-analysis">
        <p className="audience-analysis-text">Audience Analysis</p>
        <p className="audience-analysis-text-reason">
          Uniting Students across Nigeria with Technology
        </p>
        <div className="compass">
          <p className="c1">
            <span className="nc">North-Central</span>
            <span className="ne">North-East</span>
            <span className="nw">North-West</span>
          </p>
          <p className="c2">
            <span className="ss">South-South</span>
            <span className="se">South-East</span>
            <span className="sw">South-West</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AudienceAnalysis
