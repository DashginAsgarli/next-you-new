import React from 'react'
import ToolsHeader from '../../components/tools/ToolsHeader'
import ColorPickerTool from '../../components/tools/ColorPickerTool'
import PasswordGenerator from '../../components/tools/PasswordGenerator'

function ToolsPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <ToolsHeader />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6 px-8 md:px-16 '>
                    <ColorPickerTool />
                    <PasswordGenerator />
                </div>
            </section>

        </>
    )
}

export default ToolsPage
