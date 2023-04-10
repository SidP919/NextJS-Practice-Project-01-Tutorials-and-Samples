import Head from "next/head";
import { useRouter } from "next/router";

const UserPage = ({users}) => {

    const router = useRouter();
    const sendNotification = (id) => {
        Notification.requestPermission()
        .then((permissionStatus)=>{
            if(permissionStatus === 'granted'){
                const notification = new Notification(
                    "User Personal Data Access Notifier",
                    {
                        body: "Please note that accessing PI data of a user will be logged.\nPlease click only if you are sure about accessing it.",
                        data: {userId:id},
                        icon:"/images/vercel.svg",
                        tag:"User Personal Data Access Notifier",
                        renotify:true,
                    }
                );

                notification.addEventListener("click", ()=>{
                    console.log(`Data of User with user-id:${id} was accessed at ${new Date().toLocaleString()}`);
                    router.push(`./users/${id}`)
                });
                notification.close();
            }
        })
    }
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
                        <p 
                            onClick={()=>sendNotification(user.id)} 
                            className='ml-3 cursor-pointer inline text-xl text-white font-bold pb-2 hover:skew-x-12 duration-300 hover:underline'
                        >{user.name}
                        </p>
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