import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

import { LinkBtn } from '../Button';

import { RxExternalLink } from "react-icons/rx";

function ResourceCard({item, className="", ...rest}) {
  return (
    <div {...rest} className={`smallCard ${className}`}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <LinkBtn target="_blank" className='flex-container btn' text="Open" icon={<RxExternalLink />} path={item.url} />
    </div>
  )
}

export default ResourceCard
