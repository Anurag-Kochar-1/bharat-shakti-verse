import React, { useContext, useEffect, useState } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import { AppContext } from '@/context/AppContext'
import { db } from '@/firebaseConfig'
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import TrainingModel from '@/components/TrainingModel/TrainingModel'
import MetaverseLoadingTour from '@/components/MetaverseLoadingTour/MetaverseLoadingTour'


const getClassDetails = async () => {
  const classRef = doc(db, `/subjects/indianArmy1/classes/JD7UPZr1r7pR6YyKxHjL`)
  const res = await getDoc(classRef)
  return res?.data()
}




async function page() {
  const classData = await getClassDetails()


  return (
    <main className='w-full h-screen flex flex-col items-center justify-start bg-brand'>
      <NavBar place='class' />
      <iframe
        className='h-[calc(100vh-5rem)] mt-[5rem] w-full'
        width="100%"
        src={classData?.classMetaverseID}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; microphone; camera; display-capture; xr-spatial-tracking; xr;"
      ></iframe>
      <TrainingModel />
      <MetaverseLoadingTour />
    </main>
  )
}

export default page