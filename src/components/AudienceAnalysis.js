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
        <div className="role">
          <div className="icons-container">
            <img
              src="https://img.icons8.com/dotty/80/000000/toilet.png"
              alt="MALE/FEMALE"
            />
          </div>
          <div className="roles">
            <p className="role-header">ROLES</p>
            <hr />
            <p className="role-list">
              <span className="students">Student</span>
              <span className="developer">Developer</span>
              <span className="designer">Designer</span>
              <span className="enterpreneur">Enterpreneur</span>
              <span className="others">Others</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudienceAnalysis
