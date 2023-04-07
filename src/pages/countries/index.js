import graphQLClient from '@/data/graphql/graphQLclient'
import Countries from '../../components/countries/Countries'
import { GET_COUNTRY_NAMES_QUERY } from '@/data/graphql/queries'
const CountriesPage = ({countryNames}) => {
    return (
        <Countries countryNames={countryNames}/>
    )
}

export async function getServerSideProps(context){
    try {
        const countries = await graphQLClient.request(GET_COUNTRY_NAMES_QUERY);
        const countriesArr = JSON.parse(JSON.stringify(countries.countries))
        
        return (
            {
                props: {
                    countryNames:countriesArr.map((country)=>(country?.name||""))
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export default CountriesPage;