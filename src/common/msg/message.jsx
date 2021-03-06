import React from "react";
import ReduxToastr from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => {
    return (
        <ReduxToastr 
            timeOut={4000} 
            newestOnTop={true} 
            preventDuplicates={true} 
            position='top-right' 
            transitionIn="fadeIn" 
            transitionOut="fadeOut" 
            progressBar />
    )
}