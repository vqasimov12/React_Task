import Form from "../common/Form"
import FormInput from "../common/Form"

const Register = () => {

    const formItems = [
        {
            label: "Firstname",
            name: "firstname",
            type: "text",
            placeholder:"Enter your firstname"
        },
        {
            label: "Lastname",
            name: "lastname",
            type: "text",
            placeholder:"Enter your lastname"
        },
        {
            label: "Phone number",
            name: "Phone number",
            type: "text",
            placeholder:"Enter your Phone number"
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder:"Enter your email"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            placeholder:"Enter your password"
        },
    ]

    const buttons = (
    {
        title:"Register",
        style:"bg-ble-600 text-white py-3 rounded-md",
        action: () => {}
    },
    
    {
        title:"Already have an account?",
        style:"",
        action: () => {}
    }
    )

    return (
       <Form formItems={formItems} buttons={buttons}/>
    )
}

export default Register