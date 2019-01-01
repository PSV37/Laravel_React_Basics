import React from 'react'
import Appcss from '../../css/Appcss.css'
import Swal from 'sweetalert2'

const SuccessAlert = (props) => {
    return (
    <div className="alert alert-success">
      <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
      <strong>Success!</strong>{props.message}
    </div>
    )
}


export default SuccessAlert;