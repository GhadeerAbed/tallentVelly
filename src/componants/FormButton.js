export default function FormButton({
    handleSubmit,
    action='submit',
    text
}){
    return(
        <>
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 focus:outline-none  mt-20"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
        
        </>
    )
}