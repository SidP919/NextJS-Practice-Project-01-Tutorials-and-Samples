import {useRouter} from 'next/router'

const TaskDetails = () => {
    const router = useRouter();
    console.log(router.query["task-id"])
    return(
        <div>
            <h1>Task Details</h1>
        </div>
    )
}

export default TaskDetails;
// So, if you try to hit this url- http://localhost:3000/dashboard/tasks/21 
// Then, Output in console will be: 21
// Also, notice how above code is an example of Client-side rendering(not exactly),
// where we are using router to fetch the id from the query part of the request(not really),
// and perform some function based on that id(in our case, we are logging id in console).