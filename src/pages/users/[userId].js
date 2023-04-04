const UserDetailsPage = ({user}) => {
    console.log(user)
    return(
        <div>
            <h1>User Details</h1>
            <br/>
            {(user.email)?(
                <div>
                    <h4>&nbsp;User-Id:&nbsp;&nbsp;{user.id}</h4>
                    <h4>&nbsp;Name:&nbsp;&nbsp;{user.name}</h4>
                    <h4>&nbsp;UserName:&nbsp;&nbsp;{user.username}</h4>
                    <h4>&nbsp;Email:&nbsp;&nbsp;{user.email}</h4>
                    <h4>&nbsp;Ph.no.:&nbsp;&nbsp;{user.phone}</h4>
                </div>
            ):(
                <div><br/><h3>&nbsp;Invalid User Id!</h3></div>
            )}
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