import React from 'react'

const Roles = () => {
  return (
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
  )
}

export default Roles
