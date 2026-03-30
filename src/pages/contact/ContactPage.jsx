import React from 'react'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/contact/Faq'
import Feedback from '../../components/contact/Feedback'

function ContactPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Contact />
                <Feedback />
                <Faq />
            </section>
        </>
    )
}

export default ContactPage
