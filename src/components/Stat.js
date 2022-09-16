function Stat(props) {
    props.data.map(d => <li key={d}>{d}</li>);
    return (
        <section>
             <ul>
            <h3>{props.title}</h3>
               
                    {props.data}
                </ul>
        </section>
    );
}



export default Stat;