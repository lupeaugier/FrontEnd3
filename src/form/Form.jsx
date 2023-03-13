import React, { useState } from 'react'
import { FormContainer,  Container, Button } from '../styles/StyledComponents'
import { Input } from '../common/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const logo = "https://easydrawingguides.com/wp-content/uploads/2016/08/how-to-draw-a-dolphin-in-cartoon-style-featured-image-1200.png"

const inputs = [
    { id: 1, label: "Como te llamas?", placeholder: "Nombre?", name: "name" },
    { id: 2, label: "Como se llama el profe? Jaider o Javier?", placeholder: "Jaider o Javier?", name: "answer" }
]


const Form = ({ handleFetchValues }) => {
    const getInitialValues = () => ({
        name: "",
        answer: ""
    })




const getValidationSchema = () => (
    Yup.lazy(() =>
    Yup.object().shape({
        name: Yup.string()
        .min(3, 'Tu nombre tiene que tener 3 caracteres como minimo porque la vida es asi.')
        .required("Campo Obligatorio")
        .trim("No debe tener espacios en blanco.").strict(),
        answer: Yup.string()
        .min(6, 'Claramente tus respuestas tienen que ser Jaider o Javier, o sea 6 caracteres')
        .required('Campo Obligatorio')
        .matches("Jaider" || "Javier",
        'Te di opciones por algo... Usalas.'
        )
})
)
)

const onSubmit = (values) => {
    console.log(values);
    handleFetchValues(values);

}

    const { values, setFieldValue, errors, handleSubmit } = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit
    })

    return (
    <FormContainer from="form">

        <form id="form" onSubmit={handleSubmit}>
        <div style={{ width: "100%", textAlign: "center" }}>
            <img src={logo} style={{width:"120px", borderRadius:"50%"}} />
        </div>
        
        {
            inputs.map(input => (
                <Container key={input.id}>
                    <label style= {{ padding: "15px", width: "400px", textAlign: "center", fontFamily: "Arial", fontSize: "18px"}}>{input.label}</label>
                    <Input 
                        name = {input.name}
                        placeholder = {input.placeholder}
                        value = {values[input.name]}
                        onChange = {(e) => setFieldValue(input.name, e.target.value)}
                />

                { 
                    errors[input.name] && (
                            <p style={{color: "#FF5733", fontSize: "12px", padding: 0, margin: 0}}>
                                {errors[input.name]}
                            </p> 
                    )
                }
                </Container>


        )
)}

        </form>

        <Container content="row">
            {/* <Button btn="cancel">Cancel</Button> */}
            <Button form="form" btn="submit">Submit</Button>
        </Container>

    </FormContainer>
)
            }

export default Form

