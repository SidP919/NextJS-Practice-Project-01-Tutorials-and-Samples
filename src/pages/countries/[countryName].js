const CountryDetailsPage = ({country}) => {

    return(
        <div>
            <h1>Country Details</h1>
            <br/><h3>&nbsp;&nbsp;Country's Common Name: {country?.name?.common||"NA"}</h3>
            <br/><h3>&nbsp;&nbsp;Country's Official Name: {country?.name?.official||"NA"}</h3>
            <br/><h3>&nbsp;&nbsp;Country's Capital: {country?.capital?.[0]}{country?.capital?.[1]||""}</h3>
            <br/><div>
                <h3>&nbsp;&nbsp;Country's Flag: </h3>
                &nbsp;&nbsp;<img src={country?.flags?.png||"/"} alt={country?.flags?.alt||"NA"}/>
            </div>
            <br/><h3>&nbsp;&nbsp;Country's Currency Code: {Object.keys(country?.currencies||{NA:"NA"})?.[0]||"NA"}</h3>
            <br/><h3>&nbsp;&nbsp;Country's Currency Name: {country?.currencies?.[Object.keys(country?.currencies||"NA")?.[0]].name||"NA"}</h3> {/* Power of Javascript :D :D */}
        </div>
    )
}

// It is called with getStaticProps() function, 
// it fetches the paths available to access by the client-side
// and using fallback:false, it shows 404 page to client-side when 
// any other unknown path is accessed by the client-side. 
export async function getStaticPaths(context){
    try {
        const countries = await fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .catch((err)=>[])
        
        return (
            {
                paths: countries.map((country)=>({ params:{ countryName:country?.name?.common || country?.name?.official || "" } })),
                fallback:false
            }
        )
    } catch (error) {
        console.log(error)
    }
}

// getStaticProps() function is similar but different from getSeverSideProps in the sense that 
// although it gets executed on Server-Side but it only gets executed at build time and not after
// each request from the client-side and so once it fetches some data at build time then there onwards, 
// no matter what changes in the current data in the future, 
// it keeps on showing the same data that it stored at last build.
// Hence, it is suitable for those kind of data which doesn't changes frequently like Ads data.
export async function getStaticProps(context){ 
    try {
        const country = await fetch(`https://restcountries.com/v3.1/name/${context.params.countryName}?fullText=true`)
        .then((res)=>res.json())
        .catch((err)=>([{"name":
                        {"common":"Invalid Country Name"}
                    }]))
        
        return (
            {
                props: {
                    country:country?.[0]||{"name":
                    {"common":"Invalid Country Name"}
                }
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export default CountryDetailsPage;