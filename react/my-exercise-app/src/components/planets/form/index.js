import  { useState } from 'react';

const Form = (props) => {

    const initialState = {
        name: '',
        description: '',
        link: '',
        img_url: ''
    }
    const [fields, setFields] = useState(initialState);
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}/>
            </div>
            <br/>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={fields.description} onChange={handleFieldsChange}/>
            </div>
            <br/>
            <div>
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" name="link" value={fields.link} onChange={handleFieldsChange}/>
            </div>
            <br/>
            <div>
                <label htmlFor="img_url">Link da Imagem:</label>
                <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default Form;