import inquirer from "inquirer";
let todos = [];
async function getUserInput() {
    const response = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add to your to-dos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more to-dos?",
            default: false,
        },
        {
            name: "remove",
            type: "confirm",
            message: "Do you want to remove an item?",
            default: false,
        },
    ]);
    return response;
}
async function askForRemovalIndex() {
    const index = await inquirer.prompt({
        name: "removeIndex",
        type: "number",
        message: "Enter the index of the item to remove (or type 'cancel' to skip):",
    });
    if (index.removeIndex === "cancel") {
        return null;
    }
    else {
        return parseInt(index.removeIndex);
    }
}
async function main() {
    let condition = true;
    while (condition) {
        const response = await getUserInput();
        if (response.todo) {
            todos.push({ text: response.todo });
        }
        if (response.remove) {
            const removeIndex = await askForRemovalIndex();
            if (removeIndex !== null && removeIndex >= 0 && removeIndex < todos.length) {
                todos.splice(removeIndex, 1);
            }
            else {
                console.log("Invalid index. Please try again.");
            }
        }
        condition = response.addMore;
        console.log("Your to-do list:", todos);
    }
}
main();
