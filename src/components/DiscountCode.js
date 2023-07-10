import React, {useState} from "react";



const DiscountCode = ({onHandleDiscount}) => {

    const [inputText, setInputText] = useState("")

    const handleCodeInput = (event) => {
        const code = event.target.value;
        setInputText(code)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onHandleDiscount(inputText)
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Discount Code" onChange={handleCodeInput}/>
            <button type="submit">Submit</button>
        </form>
    )

}

export default DiscountCode;