import React from 'react'
import '../App.css'

export default function RepoDetail (props) {
  return (
    <>
      <div class="card text-white bg-secondary my-2 mx-5">
        <h5 class="card-header Font-style-user">{props.name}</h5>
        <div class="card-body">
          <h5 class="card-title Font-style-name">{props.owner}</h5>
          {
            props?.lang ? <p class="card-text Font-style-lang">language: {props.lang}</p>
            :
            null
          }
        </div>
      </div>
    </>
  )
}