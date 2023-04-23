import { useEffect } from 'react'
import './fileBrowser.css'

const FileBrowser = ({propsItems}) => {

  const {selectedIdx, setSelectedIdx, jsonFiles} = propsItems

  useEffect(() => {
    if(selectedIdx >=0)
      console.log(
        `Selected: ${jsonFiles[selectedIdx].name},\nidx: ${selectedIdx + 1}`
      );
      // eslint-disable-next-line
  }, [selectedIdx])

  return (
    <div className='fileBrowser'>
      <ol>
        {
          jsonFiles && jsonFiles.map(
            (item, index) => (
              <li 
                className={
                  index===selectedIdx ? 
                  'fileBrowser-list active':
                  'fileBrowser-list'
                }
                key={index} 
                onClick={() => setSelectedIdx(index)}>
                {item.name}
              </li>
            )
          )
        }
      </ol>
    </div>
  )
}

export default FileBrowser