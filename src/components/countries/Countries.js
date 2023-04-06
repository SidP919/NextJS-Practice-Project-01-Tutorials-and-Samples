import Head from 'next/head';
import styles from './../../styles/countries.module.scss'
const Countries = ({countryNames}) => {
    return(
        <div>
            <Head>
                <title>Countries</title>
            </Head>
            <div className={styles.countryList}>
                <h1 className='pl-5'>Countries List</h1>
                <p className='text-xl text-white font-bold pl-5 pb-2 hover:skew-x-12 duration-300'>(Click on Countries' name to see their details)</p>
                <div>
                    <br/>
                    <ul>
                        {countryNames?.map(
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
                            )) || <li>Country data not available right now, try refreshing again later.</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Countries;