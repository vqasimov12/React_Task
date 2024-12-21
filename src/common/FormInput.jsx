 const FormInput =({label,name,type,placeholder,handleInputChange}) => {
    return(
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            <input onChange={(e) => {
                handleInputChange(e.target.name,e.target.value)
            }} className="border p-2" type={type} name={name} placeholder={placeholder} />
        </div>
    )
 }


 export default FormInput