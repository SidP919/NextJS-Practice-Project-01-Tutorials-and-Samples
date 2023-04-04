const UserPage = ({users}) => {
    console.log(users)
    return(
        <div>
            <h1>Users</h1>
            <br/>
            <ul>
            {users.map((user,i) => <li key={user.id}><h4>&nbsp;&nbsp;{i+1}&nbsp;&nbsp;{user.name}&nbsp;&nbsp;</h4></li>)}
            </ul>
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