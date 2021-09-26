var todos=[]

function onAddClick(){
    var newTodo = document.getElementById('newTodo').value;
    todos.push(newTodo)

    updateTodoList()
    
    document.getElementById('newTodo').value='';
}

function updateTodoList(){
    var eleTodolist = document.getElementById('todo-list');

    eleTodolist.innerHTML='';

    for(var i =0;i<todos.length;i++){
        eleTodolist.innerHTML+='<li onclick="onTodoClick(' +i + ')">' + todos[i]  + '</li>';
    }
}
function onTodoClick(index){
    todos.splice(index,1);

    updateTodoList()
}