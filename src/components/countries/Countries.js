import styles from './../../styles/countries.module.scss'
const Countries = ({countryNames}) => {
    return(
        <div className={styles.countryList}>
            <h1>Countries List</h1>
            <div>
                <br/>
                <ul>
                    {countryNames.map(
                        (country,i)=>(
                            <li 
                            key={i}
                            className={styles.country}
                            >&nbsp;&nbsp;
                                <a href={
                                    `./countries/${country}`}
                                >{country}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Countries;