import { useEffect } from "react"

function Car({car, count, setcount}) {

   const  countUpdate = () => {
        setcount(count + 1)
    }
    function hello(){
        setcount(count + 1)

        console.log("----- testing normal fxn ---")
    }
useEffect(()=>{

/*
3 types
a) empty array
b) no array
c) array with variables





*/


    // whenever component rerenders // mount // render
    console.log("--------- i m rerendering NUJA ------")
},[])

    return (
    <div>
        <li>
                This is {car} car.
            </li>
            <li>
                count = {count}
            </li>


            </div>

        )
    }

    export default Car


    function test(){

    }
