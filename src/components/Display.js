function Display(props) {
    return(
    <main>
        <section>
        <ul>
            <h3>{props.title}</h3>
            {props.data}
        </ul>
        <br></br>
        </section>
    </main>
    );
}



export default Display;