import Link from 'next/link'
import React from 'react'

const StudentListMain = [
    { name: 'Rohit', email: 'rohits@gmail.com', id: 1 },
    { name: 'Raj', email: 'rajs@gmail.com', id: 2 },
    { name: 'Rahul', email: 'rahuls@gmail.com', id: 3 },
    { name: 'Ravi', email: 'ravis@gmail.com', id: 4 },
]
function page() {
    return (
        <div>
            <ul>
                {StudentListMain.map((item) => {
                    return <li key={item.id}><Link href={`/dynamicRoute/StudentList/${item.name}/${item.id}`}>{item.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default page