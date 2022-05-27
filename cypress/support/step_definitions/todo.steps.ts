import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import todoPage from '../pages/todo.page';
import WebElement from '../web.elements/webElement';

Then('I should see two todo items displayed by default', () => {
  todoPage.todoList.get().should('have.length', 2);

  todoPage.todoList.get().first().should('have.text', 'Pay electric bill');

  todoPage.todoList.get().last().should('have.text', 'Walk the dog');
});

When('I add new todo item {string}', (newItem: string) => {
  todoPage.newTodo.get().type(`${newItem}{enter}`);
});

Then(
  'I should see todo list with {int} items and last item {string}',
  (listLength: number, newItem: string) => {
    todoPage.todoList
      .get()
      .should('have.length', listLength)
      .last()
      .should('have.text', newItem);
  },
);

When('I check an item', () => {
  todoPage.getCheckedTask().check();
});

Then('I should see an item as completed', () => {
  todoPage.electricBillTask
    .get()
    .parents('li')
    .should('have.class', 'completed');
});

When(/I filter "(completed|uncompleted)" tasks/, (taskType: string) => {
  let filterButton: WebElement;

  if (taskType === 'completed') {
    filterButton = todoPage.completedTask;
  } else {
    filterButton = todoPage.activeButton;
  }

  filterButton.get().click();
});

Then(
  /I should see "(completed|uncompleted)" tasks only$/,
  (taskType: string) => {
    let taskName: string;
    let taskToNotExist: WebElement;

    if (taskType === 'completed') {
      taskName = 'Pay electric bill';
      taskToNotExist = todoPage.walkDogTask;
    } else {
      taskName = 'Walk the dog';
      taskToNotExist = todoPage.electricBillTask;
    }

    todoPage.todoList
      .get()
      .should('have.length', 1)
      .first()
      .should('have.text', taskName);

    taskToNotExist.get().should('not.exist');
  },
);

When('I delete all "completed" tasks', () => {
  todoPage.clearCompletedButton.get().click();
});

Then('I should not see completed tasks in list', () => {
  todoPage.todoList
    .get()
    .should('have.length', 1)
    .should('not.have.text', 'Pay electric bill');

  todoPage.clearCompletedButton.get().should('not.exist');
});
