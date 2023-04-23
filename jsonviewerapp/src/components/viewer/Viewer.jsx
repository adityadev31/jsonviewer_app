import React, { useEffect } from 'react'
import "./viewer.css"
import JsonChild from '../jsonChild/JsonChild'


const DisplayJson = ({json}) => {

  const display = (arr) => {
    return arr.map(([key, val], i) => {
      const type = Array.isArray(val) ? "[]"
      : typeof val === 'object' ? "{}"
      : " "

      return (
        <div key={key} className={key === "opened" ? 'jsonEntries_green' : 'jsonEntries'}>
          {key}{key!=""?":":""}
          {type.charAt(0)}
          {
            Array.isArray(val) ? (
              <JsonChild>
                {val.map((item, index) =>
                  typeof item === "object" ? display([["", item]]) : display([[index, item]])
                )}
              </JsonChild>
            )
            : typeof val === "object" ? (<JsonChild>{display(Object.entries(val))}</JsonChild>)
            : (JSON.stringify(val))
          }
          {type.charAt(1)}
        </div>
      )
    })
  }

  const js = Array.isArray(json) ? [json] : json;
  console.log(Object.entries(js));

  return (
    <div>{display(Object.entries(js))}</div>
  )
}


const Viewer = ({propsItems}) => {

  const {selectedIdx, jsonData} = propsItems

  useEffect(() => {
  }, [selectedIdx])

  return (
    <div className='viewer'>
      {jsonData && jsonData.file && <DisplayJson json={jsonData.file} />}
    </div>
  )
}

export default Viewer