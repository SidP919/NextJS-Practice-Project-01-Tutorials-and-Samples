import Head from 'next/head'
import Link from 'next/link'
const DashboardAnalyticsProfits = () => {
    return (
        <div>
            <Head>
                <title>Profits Page</title>
            </Head>
            <div className='w-full bg-[#00e5ff] min-h-[80vh] flex flex-col justify-start items-center'
            >
                <div className='text-4xl text-white font-extrabold p-5'>Profits Page</div>
                <Link 
                    href={`/dashboard`} 
                    className='underline text-2xl font-bold hover:skew-x-12 delay-400 duration-300 p-4'
                    >Go back to Dashboard Page
                </Link>
            </div>
        </div>
    )
}

export default DashboardAnalyticsProfits;
// Go to http://localhost:3000/dashboard/analytics/profits to check/validate changes made in this file.