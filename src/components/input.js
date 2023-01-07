import { useEffect, useRef, useState } from "react"

export default function Input({label, type='text', ...props}){
    const inputRef=useRef()
    const [show,setShow]=useState(false)
    const [inputType,setType]=useState(type)
    useEffect(()=>{
        if(show){
            setType('text')
            inputRef.current.focus()
        }else if (type==='password'){
            setType('password')
            inputRef.current.focus()
        }

    },[show])
    return(
        <label className="block relative flex bg-zinc-50 rounded-sm border focus-within:border-gray-40" >
        <input
          required={true}
          ref={inputRef}
          type={inputType}
          className=" px-2 outline-none text-xs 0 w-full valid:pt-[10px] h-[38px] peer" {...props}
        
        ></input>
        <small className="cursor-text pointer-events-none absolute top-1/2 left-[9px] text-xs peer-valid:text-[10px] peer-valid:top-2.5 text-gray-500 transition-all -translate-y-1/2">
         {label}
        </small>
        {type==='password' && props?.value && (
            <button type="button" onClick={()=> setShow(show=>!show)} className="text-sm font-semibold pr-2  h-full flex items-center ">
                {show? 'Hide' : 'Show'}
            </button>
          )}
      </label>
    )

}