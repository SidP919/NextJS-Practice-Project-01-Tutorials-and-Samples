import Head from 'next/head';
import styles from './../../styles/countries.module.scss'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAlertStatus } from './../../features/alert/alertSlice'
import NotifyAlert from '../alert/NotifyAlert';

const Countries = ({countryNames}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState(countryNames);

    const open = useSelector((state) => state.showCountryDetails.value.openAlert);
    const currentCountry = useSelector((state) => state.showCountryDetails.value.currentCountry);
    console.log("currentCountry: ", currentCountry)
    console.log("open: ", open)
    const dispatch = useDispatch()

    const handleChange = (evt) => {
        setSearchQuery(evt.target.value)
        if(searchQuery.length>2){
            setSearchResult(countryNames.filter((country)=>{
                if(country.toLowerCase().indexOf(searchQuery.trim().toLowerCase())===-1)
                    return false;
                else return true;
            }));
        }else if(searchQuery.length===0){
            setSearchResult(countryNames)
        }
    }

    return(
        <div>
            <Head>
                <title>Countries</title>
            </Head>
            <div className={styles.countryList}>
                <div className='px-4 flex justify-between flex-wrap'>
                    <h1 className='inline md:w-1/2'>Countries List</h1>
                    <div className='mt-5 w-full md:w-1/2 md:text-end text-center mx-auto'>
                        <input type='text' placeholder='Start typing a Country name'
                            className='w-[60%] min-w-[240px] mx-auto md:w-3/5 h-[32px] py-6 px-2 rounded-md overflow-hidden break-words text-black'
                            value={searchQuery}
                            onChange={handleChange}
                            onKeyUp = {handleChange}
                        />
                    </div>
                </div>
                <p className='text-xl text-white font-bold pl-5 pb-2 hover:skew-x-12 duration-300'>(Click on Countries' name to see their details)</p>
                <div>
                    <br/>
                    <ul>
                        {(searchResult?.length)?(searchResult?.map(
                            (country,i)=>(
                                <li 
                                key={i}
                                className={styles.country}
                                >&nbsp;&nbsp;
                                    <a onClick={()=>dispatch(setAlertStatus(country))}
                                    >{country}
                                    </a>
                                </li>
                            ))):(<li className='py-3 px-4 font-bold text-xl'>Your search- "{searchQuery}" did not match any Country name!</li>)
                        }
                    </ul>
                </div>
            </div>
            <NotifyAlert/>
        </div>
    )
}

export default Countries;