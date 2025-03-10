'use client'
import Link from 'next/link'
import React from 'react'

function page() {
    const StudentListMain = [
        { name: 'Rohit', email: 'rohits@gmail.com', id: 1 },
        { name: 'Raj', email: 'rajs@gmail.com', id: 2 },
        { name: 'Rahul', email: 'rahuls@gmail.com', id: 3 },
        { name: 'Ravi', email: 'ravis@gmail.com', id: 4 },
    ]
    return (
        <div>
            {/* //** dynamic */}
            <ul>
                {StudentListMain.map((student) => {
                    return <li key={student.id}><Link href={`/dynamicRouting/studentList/${student.name}/${student.id}/${encodeURIComponent(student.email)}`}>{student.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default page


{/* <ul style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <li><Link href={'/dynamicRouting/studentList/1'}>Rohit</Link></li>
                <li><Link href={'/dynamicRouting/studentList/2'}>Raj</Link></li>
                <li><Link href={'/dynamicRouting/studentList/3'}>Rahul</Link></li>
                <li><Link href={'/dynamicRouting/studentList/4'}>Ravi</Link></li>
 </ul> */}