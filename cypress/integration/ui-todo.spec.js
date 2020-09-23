const DEV_URL = "http://localhost:3000";

describe("CRUD flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL).wait(1000);
    // test delete everything
    cy.get("[data-cy=todo-task__button-delete").each((value) => value.click());
  });

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  it("should be able to add and delete todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-task__name]").should("have.value", "Buy Groceries");

    cy.get("[data-cy=todo-task__button-delete").click();

    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-task__name]").should("have.value", "Send masks to grandma");

    // cant seem to get eq to work?
    // cy.get("[data-cy=todo-input__input]").type("test");
    // cy.get("[data-cy=todo-input__button").click();
    // cy.get("[data-cy=todo-task__name]").eq(1).should("have.value", "test");
  });
});
