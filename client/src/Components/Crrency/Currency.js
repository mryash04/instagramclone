import React, {useState, useEffect} from 'react';

const Currency = () => {
    const API_KEY = "c96453a455af7bb9c95792271894ab28"

    const[usd, setUsd] = useState("");
    const[inr, setInr] = useState("");

    const[userData, setUserData] = useState({
        inputUsd : "",
        inputInr : ""
    });

    const{inputUsd, inputInr} = userData;

    const myInr = inputUsd * inr;
    console.log('This is myInr', myInr);

    const myUsd = inputInr * usd;
    console.log("This is myUsd", myUsd);

    const getCurrencyData = async() =>{
        try{
            const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`)
            const result = await response.json();
            console.log("This is currency result", result.rates);
            setUsd(result.rates.USD);
            setInr(result.rates.INR);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() =>{
        getCurrencyData();
    }, []);

    const handleChange = (event) =>{
        console.log(event.target.name);
        setUserData({...userData, [event.target.name] : event.target.value});
    }
    return (
        <div style={{display : 'flex', flexDirection : "column", gap : "10px", margin : "30px"}}>
            <input onChange={handleChange} name="inputUsd" value={inputInr ? myUsd : inputUsd} style={{width : "200px", height : "40px"}} type="number" placeholder="USD" />
            <input onChange={handleChange} name="inputInr" value={inputUsd ? myInr : inputInr} style={{width : "200px", height : "40px"}} type="number" placeholder="INR" />
        </div>
    )
}

export default Currency
