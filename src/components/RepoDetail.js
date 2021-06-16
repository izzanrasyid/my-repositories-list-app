import React from 'react'
import '../App.css'

export default function RepoDetail (props) {
  return (
    <>
      <div className="card text-white bg-secondary my-2 mx-5">
        <h5 className="card-header Font-style-user">{props.name}</h5>
        <div className="card-body">
          <h5 className="card-title Font-style-name">{props.owner}</h5>
          {
            props?.lang ? <p className="card-text Font-style-lang">language: {props.lang}</p>
            :
            null
          }
        </div>
      </div>
    </>
  )
}