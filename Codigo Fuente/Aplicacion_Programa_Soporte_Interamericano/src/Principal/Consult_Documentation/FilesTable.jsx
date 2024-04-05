import React from 'react'
const FilesTable = (props) => {
    return (
        <div className='ContenedorTabla TablaResponsiva EncabezadoTabla'>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">File Name</th>
                    <th scope="col">Objective</th>
                    <th scope="col">Upload Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.documentList.map(document => (
                        <tr>
                            <td key={document.fileID + '-' + document.fileName}><a href={document.URL} target="_blank" rel="noopener noreferrer">{document.fileName}</a></td>
                            <td key={document.fileID + '-' + document.objectiveID}>{document.objectiveID}</td>
                            <td key={document.fileID + '-' + document.uploadDate}>{document.uploadDate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}

export default FilesTable