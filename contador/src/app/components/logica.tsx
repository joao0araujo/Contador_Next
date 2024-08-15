import { useState } from "react"


const Logicatrue = (date:number)   => {
    const [day,Setday] = useState(0);
    const [hour,Sethour] = useState(0);
    const [minute,Setminute] = useState(0);
    const [second,Setsecond] = useState(0);

const Logica = () => {
    const Counter = new Date(date).getTime();
    const now = new Date().getTime()

    const tempofaltando = Counter - now;

    const second = 1000;
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const dayNumber = Math.floor(tempofaltando/day)
    const hourN = Math.floor((tempofaltando%day)/hour)
    const minuteN = Math.floor((tempofaltando%hour)/minute)
    const secondN = Math.floor((tempofaltando%minute)/second)

    Setday(dayNumber)
    Sethour(hourN)
    Setminute(minuteN)
    Setsecond(secondN)

}
    setInterval(Logica,1000)
    return [day,hour,minute,second];

}


export default Logicatrue