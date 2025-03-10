'use client'
import React from 'react'

function page({ params }) {
    const { student, id, email } = params
    console.log(params)
    return (
        <div>
            <h1>Student Details</h1>
            <h2>Name : {student}</h2>
            <h2>id : {id}</h2>
            <h2>Email : {decodeURIComponent(email)}</h2>
        </div>
    )
}

export default page