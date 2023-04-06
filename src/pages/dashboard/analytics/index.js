import Head from 'next/head'
import Link from 'next/link'
const DashboardAnalyticsPage = () => {
    return (
        <div>
            <Head>
                <title>Analytics Page</title>
            </Head>
            <div className='w-full bg-[#00e5ff] min-h-[80vh] flex flex-col justify-start items-center'
            >
                <div className='text-4xl text-white font-extrabold p-5'>Analytics Page</div>
                <Link 
                    href={`/dashboard/analytics/profits`} 
                    className='underline text-2xl font-bold hover:skew-x-12 delay-400 duration-300 p-4'
                    >Go to Profits Page
                </Link>
            </div>
        </div>
    )
}

export default DashboardAnalyticsPage;
// Go to http://localhost:3000/dashboard/analytics to check/validate changes made in this file.