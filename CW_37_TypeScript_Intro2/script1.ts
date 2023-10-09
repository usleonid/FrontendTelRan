class SuccessResponse {
    headers: string[];
    success: string;
    body: string;
}

class ErrorResponse {
    headers: string[];
    code: number;
}

function responseHandler(response:SuccessResponse|ErrorResponse):{message:number|string} {
    console.log(response.headers);
    
    if(response instanceof SuccessResponse){
        console.log(response.success);
        return {message:response.body};
    }else{
        return {message: response.code}
    }
}
console.log(responseHandler({headers:["X-Token:sadsadsad", "X-RefreshToken: dasdasdasd"],code:403}));
