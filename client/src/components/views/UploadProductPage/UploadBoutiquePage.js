import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Food" },
    { key: 2, value: "Supermarket" },
    { key: 3, value: "Clothing store" },
    { key: 4, value: "Shop for children" },
    { key: 5, value: "Electronics" },
    { key: 6, value: "Cosmetics" },
    { key: 7, value: "Booking" }
]

function UploadBoutiquePage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [OwnerName, setOwnerNameValue] = useState("")
    const [OwnerSurname, setOwnerSurnameValue] = useState("")
    const [EmployeeNumber, setEmployeeNumberValue] = useState(0)

    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onOwnerNameChange = (event) => {
        setOwnerNameValue(event.currentTarget.value)
    }

    const onOwnerSurnameChange = (event) => {
        setOwnerSurnameValue(event.currentTarget.value)
    }

    const onEmployeeNumberChange = (event) => {
        setEmployeeNumberValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue  ||
            !ContinentValue || !OwnerName || !OwnerSurname || !EmployeeNumber) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            ownerName: OwnerName,
            ownerSurname: OwnerSurname,
            employeeNumber: EmployeeNumber,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }

        Axios.post('/api/boutique/uploadBoutique', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Boutique Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Boutique')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Add New Boutique</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                {/* <FileUpload refreshFunction={updateImages} /> */}

               
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Owner Name</label>
                <Input
                    onChange={onOwnerNameChange}
                    value={OwnerName}
                />
                <br />
                <br />
                <label>Owner Surname</label>
                <Input
                    onChange={onOwnerSurnameChange}
                    value={OwnerSurname}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Number of employee</label>
                <TextArea
                    onChange={onEmployeeNumberChange}
                    value={EmployeeNumber}
                />
                {/* <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br /> */}
                <label>Type of boutique</label>
                <br />
                <br />
                <select onChange={onContinentsSelectChange} >
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadBoutiquePage
