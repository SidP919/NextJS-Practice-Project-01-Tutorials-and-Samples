# GraphQL Sample Queries

In below sample queries, we have given examples of queries of various types(Creation,Reading,Updation,Deletion) from a DB of todos using a graphql api publicly available at https://hasura.io/learn/graphql \
(Note: You need to SignUp/SignIn to access Create, Update & Delete Mutation)\
We can practice/use/test below provided queries **[here](https://hasura.io/learn/graphql/graphiql)** also, other than inside our NextJS app.

## Data Creation Query Examples:
1. **Without using Variables:**

    - Query- Add a todo(datatype:`todos_insert_input`) to todos table by providing title and public(true/false) fields' values to the `todos_insert_input` mutation. Also, return the info about the newly created todo.
        ```JavaScript
            mutation AddTodos{
                todos_insert_input(objects:[
                    {
                        title: "my first todo"
                        public: true
                    },
                ]){
                    returning {
                        id
                        title
                        is_completed
                        is_public
                    }
                }
            }
        ```
2. **By using Variables:**
   - Query- Add a todo(datatype:`todos_insert_input`) to todos table by providing title and public(true/false) values DYNAMICALLY to the `todos_insert_input` mutation. Also, return the info about the newly created todo.
        ```javascript
            mutation AddTodos($todo:todos_insert_input!){
                insert_todos(objects:[
                    $todo,
                ]){
                    returning {
                        id
                        title
                        is_completed
                        is_public
                    }
                }
            }
            
    - Variables-
        ```javascript
            {
                "todo":{
                "title":"my second todo",
                "is_public":true
                }
            }
        ```

#

## Data Fetching Query Examples:
1. **Without using Variables:**

    - Query- Fetch todo info including user details of most recent 3 todos created by any user in the DB.
        ```javaScript
            query getTodos{
                todos(order_by:{ created_at: desc }, limit:3 ){
                    id
                    title
                    created_at
                    is_completed
                    user{
                        id
                        name
                    }
                }
            }
        ```

#

2. **By using Variables:**
   - Query- Fetch todo info including user details of most recent `X` todos created by any user in the DB where `X`(datatype:`Int`) is a variable provided DYNAMICALLY.
        ```javaScript
            query getTodos($X:Int!){
                todos(order_by:{created_at:desc},limit:$X){
                    id
                    title
                    created_at
                    is_completed
                    user{
                        id
                        name
                    }
                }
            }
        ```
    - Variables-
        ```javascript
            {
                "X":2
            }
        ```

#

## Data Updation Query Example
1. **Without Using Variables**
    - Query- Update the title of the Todo to **"My First Todo"** whose id is `<Mention id of the todo you created in Data creation Step>`. Also, return the id, title and user details of the updated Todo.
        ```javascript
        mutation UpdateTodos{
            update_todos_by_pk(
                _set:{
                    title:"My First Todo",
                },
                pk_columns:{
                id:<Mention the id of the todo we created in Data creation phase>
                }
            ){
                id
                title
                user{
                    id
                    name
                }
            }
        }
        ```
2. **By Using Variables**
    - Query- Update the title of the Todo to `title` whose id is `id` where `id`(datatype:`Int`) and `title`(datatype:`String`) are DYNAMICALLY provided variables. Also, return the id, title and user details of the updated Todo.
        ```javascript
        mutation UpdateTodos($id:Int!, $title:String!){
            update_todos_by_pk(
                _set:{
                    title:$title,
                },
                pk_columns:{
                id:$id
                }
            ){
                id
                title
                user{
                    id
                    name
                }
            }
        }
        ```
    - Variables-
        ```javascript
        {
            "id":<Mention the id of the todo we created in Data creation phase>,
            "title":"Some text"
        }
        ```

#

## Data Deletion Query Example
1. **Without Using Variables**
    - Query- Delete a todo with id- `<Mention id of the todo that we created during Data Creation step>` using `delete_todos_by_pk` mutation.
        ```javascript
            mutation DeleteTodo{
                delete_todos_by_pk(id:<Mention the id of the todo we created in Data creation phase>){
                    id
                    title
                    user{
                        id
                        name
                    }
                    created_at
                }
            }
        ```
2. **By Using Variables**
    - Query- Delete a todo with id- `id`(datatype:`Int`) using `delete_todos_by_pk` mutation where `id` is a variable provided DYNAMICALLY.
        ```javascript
            mutation DeleteTodo($id:Int!){
                delete_todos_by_pk(id:$id){
                    id
                    title
                    user{
                        id
                        name
                    }
                    created_at
                }
            }
        ```
    - Variables-
        ```javascript
            {
                "id": <Mention id of the todo that we created during Data Creation step>
            }
        ```

#

## Subscription Query Example
- In contrast to other data fetching/creating/updating/deleting query examples, \
Subscription is different in the sense that in this case we don't just make a request and get response, \
rather when we subscribe for some data result, we establish a connection with backend where we \
continuously monitor a data result for any changes in the future also to receive latest data available at all times. \
This is quite useful when we have some data, which when changes, we want to render that change \
spontaneously on our frontend as well.

- Query- subscribe to the data containing most recent 3 todos and get the latest result/info about the most recent 3 todos at all times.
    ```javascript
    subscription {
        todos(order_by:{ created_at: desc}, limit:3){
            id
            title
            created_at
            user{
            id
            name
            }
        }
    }
    ```

#

## Developed By:

**Sidharth Pandey**

[![Email](https://img.shields.io/badge/Email-6EC72D)](mailto:Sidp0008@gmail.com) [![LinkedIn](https://img.shields.io/badge/LinkedIn-1B98F5)](https://linkedin.com/in/sidp919)

**Happy Learning!** ☺️
