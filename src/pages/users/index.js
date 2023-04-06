import Head from "next/head";
import Link from "next/link";

const UserPage = ({users}) => {

    return(
        <div>
            <Head>
                <title>Users</title>
            </Head>
            <div className='w-full bg-[#00e5ff] min-h-[80vh] flex flex-col justify-start items-center'>
                <h1 className='text-4xl text-white font-extrabold pt-5'>Users</h1>
                <p className='text-xl text-white font-bold pb-2 hover:skew-x-12 duration-300'>&#40;Click on user's name to see their details&#41;</p>
                <br/>
                <ul>
                {users.map((user,i) => 
                    <li 
                        key={user.id}
                        className='text-xl text-white font-bold pb-2 hover:skew-x-12 duration-300'
                    >
                    &nbsp;&nbsp;{i+1}&#62;
                        <Link href={`/users/${i+1}`} 
                            className='ml-3 text-xl text-white font-bold pb-2 hover:skew-x-12 duration-300 hover:underline'
                        >{user.name}
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    try{
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            return res.json();
        });

        return {
            props:{
                users
            }
        }
    }catch(err){
        console.log(err)
        return {
            props:{
                users:[],
            }
        }
    }
}

export default UserPage;