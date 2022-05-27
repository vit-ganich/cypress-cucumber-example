Feature: Todo list with one checked item
    Example of remastered todo.spec from Cypress examples using Gherkin syntax

    Background:
        Given I open the app
        When I check an item

    Scenario Outline: Verify <task type> tasks filtering
        When I filter "<task type>" tasks
        Then I should see "<task type>" tasks only

        Examples:
            | task type   |
            | completed   |
            | uncompleted |

    Scenario: Verify tasks can be deleted
        When I delete all "completed" tasks
        Then I should not see completed tasks in list

