import React from 'react'
import { useSelector } from 'react-redux'


export default function ErrorPage() {
    let errorMsg = useSelector(state=> state.products.error)
  return (
    <h1 style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh"}}>{errorMsg}</h1>
  )
}
