"use client"
import React from 'react'
import { useState, useEffect } from "react";



// ^ COMPONENT
const Service: React.FC = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const TOKEN: any = window?.sessionStorage.getItem("token")
        setToken(TOKEN ? JSON.parse(TOKEN) : null)
        console.log("NEW TOKEN =====>", TOKEN)
    }, []);


    return (
        <div>Service</div>
    )
}

export default Service