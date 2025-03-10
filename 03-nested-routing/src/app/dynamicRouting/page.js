import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            <Link href={'/dynamicRouting/studentList'}>Student List</Link>
        </div>
    )
}

export default page