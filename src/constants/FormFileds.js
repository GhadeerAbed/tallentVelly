
const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address" ,
        
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password" ,
         customClass:"relative"
    }
]

const signupFields=[
    {
        labelText:"Firstname",
        labelFor:"Firstname",
        id:"Firstname",
        name:"Firstname",
        type:"text",
        autoComplete:"Firstname",
        isRequired:true,
        placeholder:"Firstname"   
    },
    {
        labelText:"Lastname",
        labelFor:"Lastname",
        id:"Lastname",
        name:"Lastname",
        type:"text",
        autoComplete:"Lastname",
        isRequired:true,
        placeholder:"Lastname"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
  
]

export {loginFields,signupFields}