function catchErrors(error, displayError) {
    let errorMsg;
    if(error.response) {
        //request was made and the server responded with the status code  not in range 2xx
        errorMsg = error.response.data;
        console.error("Error response", errorMsg)
        //for cloudinary image uploads
        if(error.response.data.error){
            errorMsg = error.response.data.error.message
        }
    }else if(error.request) {
        //request was made but no response received
        errorMsg = error.request;
        console.error("Error request",errorMsg)
    }else {
        //something else happens in making request
        errorMsg= error.message
        console.error("Error message", errorMsg)
    }
    displayError(errorMsg)
}

export default catchErrors;