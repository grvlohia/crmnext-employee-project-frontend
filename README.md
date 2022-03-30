# CRMNext React Assignment

## The project has two branhces
* master: this branch configures the project to use a dotnet webapi as backend.
* mockapi-backend: this branch configures the project to use a dummy backend from [mockapi](https://623af4fff8827fbe47abd9ce.mockapi.io/Employee)
    * The mockapi is structred as follows
        * GET https://623af4fff8827fbe47abd9ce.mockapi.io/Employee - get list of employees
        * GET https://623af4fff8827fbe47abd9ce.mockapi.io/Employee/:id - get a single employee by id
        * POST https://623af4fff8827fbe47abd9ce.mockapi.io/Employee - create a new employee
        * PUT https://623af4fff8827fbe47abd9ce.mockapi.io/Employee/:id - update an employee by id
        * DELETE https://623af4fff8827fbe47abd9ce.mockapi.io/Employee/:id - delete an employee by id