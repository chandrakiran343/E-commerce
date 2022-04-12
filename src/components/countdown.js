import React,{useState,useEffect,useCallback} from 'react';

import './countdown.css'




const Countdown = () => {

    let [date,setDate] = useState(new Date())

    
    useEffect(()=>{
        const int = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>clearInterval(int)   
    },[])

    return (<div className='main'>
                <div className='timer'>
                    <h1 className=''>{(date.getHours()%12).toLocaleString('en-IN',{timezone: 'IST'})+': '}</h1>
                    <h1>{date.getMinutes()>=10?date.getMinutes().toString()+':':'0'+date.getMinutes().toString()+':'}</h1>
                    <h1>{date.getSeconds()>=10?date.getSeconds().toString():'0'+date.getSeconds().toString()}</h1>

                </div>

    </div>);
}
 
export default Countdown;