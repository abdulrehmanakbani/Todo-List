import inquirer from "inquirer";

let Todos = [];

let condition = true;
while (condition) {
  let addTasks = await inquirer.prompt(
    [
    {
      name: "todo",
      type: "input",
      message: "What do you want to add in your Todos?",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "are you sure you want to add in your Todos?",
      default: "false",
    },
    
  ]
  );

  Todos.push(addTasks.todo);
  condition = addTasks.addMore;
  console.log(Todos);
}
