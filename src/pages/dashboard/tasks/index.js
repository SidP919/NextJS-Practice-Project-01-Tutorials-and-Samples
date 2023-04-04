const Tasks = (props) => { // This page will be executed on Client-side
    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                <li>Task-Id &nbsp;Task-Title</li>
                {props.tasks.map((task)=>{
                    return(
                        <li key={task.taskId}>{task.taskId} - &nbsp;{task.taskTitle}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getServerSideProps(context){ // But this function can/will be executed on the Server-side only

    // Below log expressions won't be logged on our browser console bcoz browser works on the client-side
    // whereas below expressions will be executed only on the server side
    // So, we need to check in the terminal window where we are running our app-server.
    console.log("context = ",context); // O/P: A big object with dozens of details including below ones.
    console.log("context.query = ", context.query); // O/P: Context.query =  {}
    console.log("context.params = ",context.params) // O/P: context.params =  undefined
    console.log("context.req.url = ",
                    context.req.url); // O/P: Context.req.url =  /_next/data/development/dashboard/tasks.json
    console.log("context.resolvedUrl = ",context.resolvedUrl); // O/P: Context.resolvedUrl =  /dashboard/tasks
    console.log("context.req.method = ",context.req.method); // Context.req.method =  GET

    return {
        props: {
            tasks:[
                {
                    taskId: '00001',
                    taskTitle: 'Task 01',
                    taskDescription: 'Not available',
                },
                {
                    taskId: '00002',
                    taskTitle: 'Task 02',
                    taskDescription: 'Not available',
                },
                {
                    taskId: '00003',
                    taskTitle: 'Task 03',
                    taskDescription: 'Not available',
                },
            ]
        }
    };
}

// Above function getServerSideProps() is useful whenever we have some component which
// needs to fetch data from the server-side or some remote source quite frequently
// (or in another sense, when we have some data that changes quite frequently)
// and based on the data recieved, needs to make changes on frontend-UI dynamically.

// In above function, we have assumed that we received tasks array in response from backend

export default Tasks;
// Go to http://localhost:3000/dashboard/tasks to check/validate changes made in this file.