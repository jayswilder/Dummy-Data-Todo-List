   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

   let arrayOfTodos = [
     {
     "userId": 14,
     "id": 1,
     "title": "delectus aut autem",
     "completed": false
   },
   {
     "userId": 20,
     "id": 2,
     "title": "delectus aut autem",
     "completed": false
   }]

   const fetchTodos = () => {
     fetch('https://jsonplaceholder.typicode.com/todos')
     .then( (response) => response.json())
     .then( (json) => arrayOfTodos = json)
   }

   const logTodos = () => {
     console.log(arrayOfTodos)
   }

   const populateTodos = () => {
        let todoComplete = '';
        let title = '';
        for (i=0; i < arrayOfTodos.length; i++) {
            let todoList = document.getElementById('todo-list');
            let todoItem = document.createElement("LI");
            todoTitle = document.createTextNode(arrayOfTodos[i].title);
            todoItem.appendChild(todoTitle);
            todoList.appendChild(todoItem);

            if (arrayOfTodos[i].completed) {
              todoItem.classList.add('false', 'animate__animated');
            } else todoItem.classList.add('true')
    
        }
        console.log(arrayOfTodos[150].title) // => 14
        console.log(arrayOfTodos[99].userId) // => 20
        console.log("Thank you for teaching us cool stuff!")
             
   }

