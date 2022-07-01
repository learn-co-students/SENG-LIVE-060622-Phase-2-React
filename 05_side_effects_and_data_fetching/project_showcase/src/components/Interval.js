import { useEffect} from 'react'
const Interval = () => {
   
    useEffect(() => {
       const int = setInterval(()=> console.log('hi'),1000)
        return () => clearInterval(int)
    },[])

    return <h1>Interval</h1>
}

export default Interval