const InputErrors = (errors, field) => {
    return errors?.[field]?.length && errors[field].map((error, index)=>(
        <div key={index} className="bg-info p-2 text-white rounded my-1"> {error} </div>
    ))
}

export default InputErrors
