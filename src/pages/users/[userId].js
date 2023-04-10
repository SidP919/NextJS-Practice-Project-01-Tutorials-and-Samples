import Head from "next/head";

const UserDetailsPage = ({user}) => {
    
    return(
        <div>
            <Head>
                <title>{user.name}</title>
            </Head>
            <div className="w-full bg-[#00e5ff] min-h-[80vh] flex flex-col justify-start items-center px-4">
                <h1 className='text-4xl text-white font-extrabold p-1 underline'>User Details</h1>
                <br/>
                {(user.email)?(
                    <div>
                        <h4 className='text-xl text-white font-bold hover:skew-x-12 duration-300'>&nbsp;User-Id:&nbsp;&nbsp;{user.id}</h4>
                        <h4 className='text-xl text-white font-bold hover:skew-x-12 duration-300'>&nbsp;Name:&nbsp;&nbsp;{user.name}</h4>
                        <h4 className='text-xl text-white font-bold hover:skew-x-12 duration-300'>&nbsp;UserName:&nbsp;&nbsp;{user.username}</h4>
                        <h4 className='text-xl text-white font-bold hover:skew-x-12 duration-300'>&nbsp;Email:&nbsp;&nbsp;{user.email}</h4>
                        <h4 className='text-xl text-white font-bold hover:skew-x-12 duration-300'>&nbsp;Ph.no.:&nbsp;&nbsp;{user.phone}</h4>
                    </div>
                ):(
                    <div><br/><h3 className='text-xl text-white font-bold hover:skew-x-12 duration-300'>&nbsp;Invalid User Id!</h3></div>
                )}
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    try{
        const {userId} = context.params;
        console.log(context.params.userId)
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res)=>{
            return res.json();
        });

        return {
            props:{
                user
            }
        }
    }catch(err){
        console.log(err)
        return {
            props:{
                user:err,
            }
        }
    }
}

export default UserDetailsPage;