function Form(){
    return(
        <section>
            <form className="form">
                <h3>Add New Project</h3>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="about">About</label>
                <input type="text" id="about" name="about"/>
                <input type="submit" value="Add Button"/>
            </form>
        </section>
    )
}

export default Form