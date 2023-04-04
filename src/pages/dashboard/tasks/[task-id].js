import {useRouter} from 'next/router'

const TaskDetails = ({tasks}) => {
    
    const router = useRouter();
    console.log("router.query['task-id'] = ",router.query["task-id"])
    const taskId = router.query["task-id"]
    
    const task = tasks.filter((task) => {
        if(task.taskId === taskId){
            return true;
        }else return false;
    })[0];
    
    return(
        <div>
            <h1>Task Details</h1>
            {
                (task)?(
                    <div>
                        <br/>
                        <div><h3>Task Id: {task.taskId}</h3></div>
                        <div><h3>Task Title: {task.taskTitle}</h3></div>
                        <div><h3>Task Description: {task.taskDescription}</h3></div>
                    </div>
                ):(
                    <div><br/><h3>Invalid Task Id: {taskId}</h3></div>
                )
            }
        </div>
    )
}

export async function getServerSideProps(context){

    console.log("context.params = ",context.params) // Sample O/P: context.params =  { 'task-id': '00001' }
    console.log("context.params['task-id'] = ",
                    context.params['task-id']) // Sample O/P: context.params['task-id'] =  00001
    
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

export default TaskDetails;

// So, if you try to hit this url- http://localhost:3000/dashboard/tasks/00003 
// Then, Output in console will be: 00003
// However, on browser window, we wil see the details of task with task-id = '00003'