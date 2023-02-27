import Image from 'next/image'
import ClassCard from '../ClassCard/ClassCard'
import bg1 from "../../public/images/BGs/bg2.jpg"


function ClassesContainer({ classes }: { classes: any }) {

    return (
        <section className='relative w-full flex flex-col justify-center items-center py-28'>
            <h2 className='text-7xl text-white font-montserrat font-bold text-center'> Top Classes </h2>
            <p className='text-2xl text-white font-open_sans font-medium text-center my-2'> Learn about our Military Science in indian way, Join class now! </p>

            <div className='flex flex-wrap justify-center items-center my-5'>
                {classes && classes?.map((classObject: any) => {
                    return <ClassCard key={classObject?.classID} classObject={classObject} />
                })}
            </div>
        </section>
    )
}

export default ClassesContainer