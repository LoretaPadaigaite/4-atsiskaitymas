

const AddPage = () => {

    return (
        <>
 
            <form className="addPageForm">
                <input placeholder="Tittle" type='text'/>
                <br/>
                <textarea placeholder="Description" rows="15" cols="20"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>



    )
}

export default AddPage;