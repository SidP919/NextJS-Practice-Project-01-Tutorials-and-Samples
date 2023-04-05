
const CountriesPage = ({countryNames}) => {
    return (
        <div>
            <h1>Countries List</h1>
            <div>
                <br/>
                <ul>
                    {countryNames.map(
                        (country)=>(
                            <li>&nbsp;&nbsp;
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

export async function getServerSideProps(context){
    try {
        const countries = await fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .catch((err)=>[])
        
        return (
            {
                props: {
                    countryNames:countries.map((country)=>(country?.name?.common || country?.name?.official || ""))
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export default CountriesPage;