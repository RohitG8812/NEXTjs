import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            <h1>Dynamic Route</h1>
            <Link href={'/dynamicRoute/StudentList'}>Go to Student List</Link>
        </div>
    )
}

export default page