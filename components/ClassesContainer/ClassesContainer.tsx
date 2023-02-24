import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import ClassCard from '../ClassCard/ClassCard'




function ClassesContainer({ classes }: { classes: any }) {

    return (
        <section className='w-full flex flex-wrap justify-center items-center my-10'>

            {classes && classes?.map((classObject: any) => {
                return <ClassCard key={classObject?.classID} classObject={classObject} />
            })}
        </section>
    )
}

export default ClassesContainer