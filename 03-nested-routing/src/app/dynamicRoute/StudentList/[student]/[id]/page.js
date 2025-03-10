import React from 'react'

function page({ params }) {
    const { student, id } = params
    return (
        <div>
            <h1>Name : {student}</h1>
            <h1>ID : {id}</h1>
        </div>
    )
}

export default page