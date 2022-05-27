Feature: Todo list smoke test
    Example of remastered todo.spec from Cypress examples using Gherkin syntax

    Background:
        Given I open the app

    Scenario: Verify environment variables
        Then I should see environment variables loaded correctly

    Scenario: Verify default items
        Then I should see two todo items displayed by default

    Scenario: Verify new item can be added
        When I add new todo item "Feed the cat"
        Then I should see todo list with 3 items and last item "Feed the cat"

    Scenario: Verify an item can be checked
        When I check an item
        Then I should see an item as completed
