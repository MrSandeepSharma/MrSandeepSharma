import React, { useEffect, useState } from 'react'

import resourceItems from './ResourcesArray';

import { ResourceCard } from '../components/Card'
import { SecondaryBtn } from '../components/Button';

function Resources() {

  const [components, setComponents] = useState([])
  const [filteredResource, setFilteredResource] = useState(resourceItems)
  const [resourcesArray, setResourcesArray] = useState(resourceItems)

  useEffect(()=> {
    const allComponents = resourceItems.map(item => item.category)
    setComponents(allComponents)
  }, [resourcesArray])

  function filterResource(e) {
    const result = resourceItems.filter(item => item.category === e.target.textContent)
    setFilteredResource(result)
  }

  return (
    <main className='container resourcepage'>
      <section className="resourcepage__hero">
        <h1 className='resourcepage__hero__title'>Resources</h1>
        <p className='resourcepage__hero__desc'>Here's a collection of some good resources for developers</p>
        <div className="resourcepage__hero__components">
          {components.map(item => (
            <SecondaryBtn onClick={filterResource} key={item} text={item} />
          ))}
        </div>
      </section>
      <section className='resourcepage__content'>
        {
          filteredResource.map(item => (
            <div className='resourcepage__content__inner'>
              <h2 className='content__title'>{item.category}</h2>
              <div className='content__container'>
                {item.links.map(item => (
                  <ResourceCard item={item} />
                ))}
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Resources


{/* <h1 className='resourcePage__title'>Resources</h1>
      {
        resourceItems.map(item => (
          <div className='resourcePage__content'>
            <h3 className='content__title'>{item.category}</h3>
            <div className='content__container'>
              {item.links.map(item => (
                <ResourceCard item={item} />
              ))}
            </div>
          </div>
        ))
      } */}