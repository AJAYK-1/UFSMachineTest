import React from 'react'
import { useLocation } from 'react-router-dom'
import { BlobProvider } from '@react-pdf/renderer'
import CVDocument from '../components/cvDocument'

const CVPreview = () => {
  const { state } = useLocation()
  const cvData = state?.cvData

  if (!cvData) return <p>No CV data found</p>

  return (
    <div>
      <h2>CV Preview</h2>

      <BlobProvider document={<CVDocument data={cvData} />}>
        {({ url, loading }) => {
          if (loading) return <p>Generating preview...</p>

          return (
            <>
              <iframe
                src={url}
                title="CV Preview"
                width="100%"
                height="400px"
              />

              <br />

              <a href={url} download={`${cvData.name}-CV.pdf`}>
                <button>Download CV</button>
              </a>
            </>
          )
        }}
      </BlobProvider>
    </div>
  )
}

export default CVPreview
