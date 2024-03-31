import React from 'react'

const Add_Student_Modal = (props) => {
    return (
        <div className="modal fade modal-centered modal-lg" id="createModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true" hidden={props.disableModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">Add student</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <img src="./src/Assets/Images/check.png" className='w-50' />
                        <h2 className='text-success mt-3'>Student Created</h2>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" onClick={() => window.location.reload(false)}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_Student_Modal