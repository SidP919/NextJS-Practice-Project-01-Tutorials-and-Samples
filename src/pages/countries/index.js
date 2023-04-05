import Countries from '../../components/countries/Countries'
const CountriesPage = ({countryNames}) => {
    return (
        <Countries countryNames={countryNames}/>
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