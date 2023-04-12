const todoList = () => {
    let all = []
    const add = (todoItem) => {
      all.push(todoItem)
    };
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        const p = new Date();
        return all.filter((task) => task.dueDate < due.toLocalDateString("en-CA"));
        
      // Write the date check condition here and return the array
      // of overdue items accordingly.
       
     };
      
  
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      const p = new Date();
      return all.filter((task) => task.dueDate == due.toLocalDateString("en-CA"));
      };
     
    
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      const p = new Date();
      return all.filter((task)=>task.dueDate > due.toLocaleDateString("en-CA"));
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      return list
        .map(
            (todo) => `${todo.completed ? '[x]' : '[ ]' } ${todo.title} ${todo.dueDate === taday ? '' : todo.dueDate}`,
            )
            .join('\n');
    };
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  module.exports = todoList
  
  
