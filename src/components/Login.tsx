import React, { useState, useEffect } from 'react'
import img1 from "../assets/img3.avif"
import Validation from './Validation';




const Login = () => {


    const intialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState<{ [key: string]: any }>({})
    const [isSumbit, setIsSumbit] = useState(false)




    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })



    };


    const handleSumbit = (e: any) => {
        e.preventDefault();
        setFormErrors(Validation(formValues))
        setIsSumbit(true)

    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSumbit) {
            console.log(formValues)


        }

        // eslint-disable-next-line
    }, [formErrors])


    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={img1} alt="" />
            </div>
            <div className='bg-gray-200 flex flex-col justify-center'>
                {Object.keys(formErrors).length === 0 && isSumbit ? (<div className='text-green-600 flex text-6xl font-bold justify-center'>Signed In Successfully</div>) :

                    <form className='max-w-[400px] w-full mx-auto bg-white p-4'
                        onSubmit={handleSumbit}>
                        <h1 className='text-4xl font-bold text-center p-6'>SIGN IN</h1>
                        <div className='flex flex-col py-2'>
                            <label >Username</label>
                            <input className='border p-2'
                                name="username"
                                type="text"
                                value={formValues.username}
                                onChange={handleOnChange} />

                        </div>
                        {formErrors.username && <p className='text-red-400 '>{formErrors.username}</p>}



                        <div className='flex flex-col py-2'>
                            <label >Password</label>
                            <input className='border p-2'
                                name="password"
                                type="password"
                                value={formValues.password}
                                onChange={handleOnChange} />
                        </div>
                        {formErrors.password && <p className='text-red-400 '>{formErrors.password}</p>}
                        <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white'>Login</button>
                        <div className='flex justify-between'>
                            <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                            <p>Create an account</p>
                        </div>
                    </form>}
            </div>
        </div>
    )
}

export default Login
