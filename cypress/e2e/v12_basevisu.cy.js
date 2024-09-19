import Login from "./PageObjects/LoginPage";


describe("basevisu with POM", () => {
  
  const baseUrl =
    "https://shopfloor-v12-timely-bongo-pi.cfapps.us10.hana.ondemand.com/login";


  // Login
  it("Test case:0001 LoginTest", () => {
    cy.visit(baseUrl);
    cy.clearCookies();
    const ln = new Login();
    ln.setUserName();
    ln.setPassword();
    cy.wait(5000);
    ln.clickSubmit();
    cy.wait(7000);
    ln.verifyLogin();
  });

  // Test case: Login, open basevisu, click machine
  it("Test case:0002 find and click basevisu", () => {
    cy.get(".card-header-text").contains("BaseVisu").click();
    cy.wait(5000);
  });

  // Test case: Click new button
  it("Test case:0003 find and click new", () => {
    cy.get("#newButton").click();
    cy.wait(5000);
  });

  // Test case: Toggle on/off
  it("Test case:0004 Switch toggle", () => {
    cy.get("#activeSwitch").click(); // Toggle Active switch
    cy.get("#furnaceSwitch").click(); // Toggle Furnace switch
    cy.get("#castingMachineSwitch").click(); // Toggle Casting Machine switch
  });

  // Test case: Select combobox and dropdown item
  it("Test case:0005 select name in add machine", () => {
    cy.clearLocalStorage();
    cy.get("#name").shadow().find("input").type("QA Test Input");
    cy.wait(5000);
  });

  it("Test case:0006 Input name and click on save", () => {
    //Reported this issue to akik
    cy.get(
      '#machineDialog > ui5-dialog > [slot="footer"] > #saveButton'
    ).click();
    cy.wait(10000);
  });

  // Test case: Click inactive
  it("Test case:0007 locate and click inactive", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All
  it("Test case:0008 locate and click All", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click Edit
  it("Test case:0009 locate and click Edit", () => {
    cy.get("#editButton").click();
    cy.wait(7000);
  });

  // Test case: Input new
  it("Test case:0010 Edit added machine data", () => {
    cy.get("#name").shadow().find("input").type("Edited new Input");
    cy.get(
      '#machineDialog > ui5-dialog > [slot="footer"] > #saveButton'
    ).click();
    cy.wait(7000);
  });

  // Test case: Click Machine Groups
  it("Test case:0011 locate and click Machine Group", () => {
    cy.get("#machineGroupSubItem").click();
    cy.wait(7000);
  });

  // Test case: Click new group button
  it("Test case:0012 find and click new group button", () => {
    cy.get("#newButton").click();
    cy.wait(7000);
  });

  // Test case: Create new group and click save
  it("Test case:0013 Create new gruop and click on save", () => {
    cy.get("#name").shadow().find("input").type("QA Test Input");
    cy.wait(5000);
    cy.get("#saveButtonMachineGroup").click();
    cy.wait(5000);
  });

  // Test case: Edit created group
  it("Test case:0014 Edit created group data", () => {
    cy.get("#editButton").click();
    cy.wait(5000);
    cy.get("#name").shadow().find("input").type("Edited new group");
    cy.wait(5000);
    cy.get("#saveButtonMachineGroup").click();
    cy.wait(7000);
  });

  // Test case: Click inactive Group
  it("Test case:00115 locate and click inactive group", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All group
  it("Test case:0016 locate and click All group", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Locate TPM Groups
  it("Test case:0017 locate and click tpm groups", () => {
    cy.get("#tpmGroupSubItem").click();
    cy.wait(7000);
  });

  //Create new tpm group
  it("Test case:0018 Create new tpm group and click on save", () => {
    cy.get("#newButton").click();
    cy.wait(7000);
    cy.get("#customIdInput").shadow().find("input").type("QA test tpm group");
    cy.wait(7000);
    cy.get("#saveBtn").click();
    cy.wait(5000);
  });

  //Edit new tpm group
  it("Test case:0019 Edit new tpm group and click on save", () => {
    cy.get("#editButton").click();
    cy.wait(5000);
    cy.get("#customIdInput").shadow().find("input").type("Edited tpm group");
    cy.get("#saveBtn").click();
    cy.wait(5000);
  });

  // Test case: Click inactive in tpm group
  it("Test case:0020 locate and click in active tpm group", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All in tpm group
  it("Test case:0021 locate and click All tpm group", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Locate TPM SUb Groups
  it("Test case:0022 locate and click tpm sub groups", () => {
    cy.get("#tpmSubGroupSubItem").click();
    cy.wait(7000);
  });

  //Create tpm sub group
  it("Test case:0023 Create new tpm sub group and click on save", () => {
    cy.get("#newButton").click();
    cy.clearLocalStorage();
    cy.get("#name").shadow().find("input").type("Tpm sub group");
    cy.wait(7000);
    cy.get("ui5-combobox#tpmGroupCombobox")
      .shadow()
      .find("input")
      .clear()
      .type("Testtt 222{enter}");
    cy.wait(5000);
    // cy.get('#saveButton').should('exist').click();
    cy.wait(5000);
  });

  //Edit tpm group
  it("Test case:0024 Create new tpm sub group and click on save", () => {
    cy.get("#editButton").click();
    cy.wait(5000);
    cy.clearLocalStorage();
    cy.get("#name").shadow().find("input").type("Edited tpm group{enter}");
    cy.wait(5000);
    // cy.get('#saveButton').should('exist').click();
    // cy.wait(5000);
  });

  // Test case: Click inactive in tpm group
  it("Test case:0025 locate and click in active tpm sub group", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All in tpm group
  it("Test case:0026 locate and click All tpm sub", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click Machine State
  it("Test case:0027 locate and click Machine state", () => {
    cy.get("#machineStateSubItem").click();
    cy.wait(7000);
  });

  // Test case: Click new Machine State button
  it("Test case:0028 find and click new machine state button", () => {
    cy.get("#newButton").click();
    cy.wait(7000);
  });
  //Create Machine state
  it("Test case:0029 Create new machine state and click on save", () => {
    cy.clearLocalStorage();
    cy.get("#name").shadow().find("input").type("QA test machine state");
    cy.get("ui5-combobox#machineStateGroupCombobox")
      .shadow()
      .find("input")
      .clear()
      .type("Check{enter}");
    cy.wait(5000);
    // cy.get("#saveButtonMachineState").click();
    // cy.wait(5000);
  });

  // Test case: Edit created machine state
  it("Test case:0030 Edit created machine state data", () => {
    cy.get("#editButton").click();
    cy.wait(5000);
    cy.get("#name").shadow().find("input").type("Edited machine state");
    cy.get("#saveButtonMachineState").click();
    cy.wait(7000);
  });

  // Test case: Click inactive machine state
  it("Test case:0031 locate and click machine state inactive button", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All machine state
  it("Test case:0032 locate and click All machine state all button", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Locate Machine state group
  it("Test case:0033 locate and click Machine state group", () => {
    cy.get("#machineStateGroupSubItem").click();
    cy.wait(7000);
  });

  // Test case: Click new button in Machine state group
  it("Test case:0034 find and click new button in machine state group", () => {
    cy.get("#newButton").click();
    cy.wait(7000);
  });

  //Create Machine state group
  it("Test case:0035 Create new machine state group and click on save", () => {
    cy.clearLocalStorage();
    cy.get("#name").shadow().find("input").type("QA test machine state group");
    cy.get("#saveButtonMachineStateGroup").click();
    cy.wait(5000);
  });

  // Test case: Edit created machine state group
  it("Test case:0036 Edit created machine state group data", () => {
    cy.get("#editButton").click();
    cy.wait(5000);
    cy.get("#name").shadow().find("input").type("Edited machine state group");
    cy.wait(5000);
    cy.get("#saveButtonMachineStateGroup").click();
    cy.wait(7000);
  });

  // Test case: Click inactive machine state group
  it("Test case:0037 locate and click machine in active state group", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All machine state froup
  it("Test case:0038 locate and click All machine state group", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Locate Bad parts reason
  it("Test case:0039 locate and click bad parts reason", () => {
    cy.get("#badPartReasonSubItem").click();
    cy.wait(7000);
  });

  //Create new bad part reason
  it("Test case:0040 Create new bad parts and click on save", () => {
    cy.get("#newButton").click();
    cy.clearLocalStorage();
    cy.get("#nameInput").shadow().find("input").type("QA test bad parts");
    cy.wait(5000);
    cy.get("#saveButtonBadPartReasons").click();
    cy.wait(5000);
  });

  // Test case: Edit created badparts
  it("Test case:0041 Edit created badparts reason data", () => {
    cy.get("#editButton").click();
    cy.wait(3000);
    cy.get("#nameInput").shadow().find("input").type("Edited bad parts");
    cy.get("#saveButtonBadPartReasons").click();
    cy.wait(7000);
  });

  // Test case: Click inactive in bad parts
  it("Test case:0042 locate and click in active bad parts", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All in bad parts
  it("Test case:0043 locate and click All bad parts", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Add item Toggle on/off [Scecond module]
  it("Test case:0044 Switch toggle", () => {
    cy.get("#itemsActiveSwitch").click(); // Toggle Active switch
    cy.get("#itemsIsSalesItemsSwitch").click(); // Toggle Sales switch
    cy.get("#itemsIsAlloySwitch").click(); // Toggle Alloy switch
    cy.get("#itemsUseStockForBacklogSwitch").click(); // Toggle Stoke backlog switch
    cy.get("#useForCapacityPlanningSwitch").click(); // Toggle Capacity Planning switch
    cy.get("#isPackagingItemSwitch").click(); // Toggle PackagingItemSwitch switch
  });

  //Locate Items and Add new item// Sometimes parts is not locating
  it("Test case:0045 Add new item and click on save", () => {
    cy.wait(5000);
    cy.get("#parts").click();
    cy.wait(3000);
    cy.get("#newButton").click();
    cy.clearLocalStorage();
    cy.get("#nameInput").shadow().find("input").type("QA test add item");
    cy.wait(5000);
    cy.get("#itemsSaveButton").click();
    cy.wait(5000);
  });

  // Test case: Edit created item
  it("Test case:0046 Edit created item data", () => {
    cy.get("#editButton").click();
    cy.wait(3000);
    cy.get("#nameInput").shadow().find("input").type("Edited add item");
    cy.get("#itemsSaveButton").click();
    cy.wait(7000);
  });

  // Test case: Click inactive in items
  it("Test case:0047 locate and click in active item", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All in items
  it("Test case:0048 locate and click All item", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Locate item Group

  it("Test case:0049 locate and click Items group", () => {
    cy.get("#itemGroupSubItem").click();
    cy.wait(7000);
  });

  // Test case: Click new button to add items group
  it("Test case:0050 find and click new to add items group", () => {
    cy.get("#newButton").click();
    cy.wait(5000);
  });

  // Test case: Add item Toggle on/off add item group
  it("Test case:0051 Switch toggle add item group", () => {
    cy.get("#itemsGroupIsActiveSwitch").click(); // Toggle Active switch
    cy.wait(3000);
  });

  // Test case: Input new
  it("Test case:0052 add items group", () => {
    cy.get("#name").shadow().find("input").type("QA test item group");
    cy.get("#itemsGroupSaveButton").click();
    cy.wait(7000);
  });

  // Test case: Click Edit
  it("Test case:0053 locate and click Edit item group", () => {
    cy.get("#editButton").click();
    cy.get("#name").shadow().find("input").type("Edited QA test item group");
    cy.get("#itemsGroupSaveButton").click();
    cy.wait(7000);
  });

  // Test case: Click inactive in item group
  it("Test case:0054 locate and click in active item", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All in item group
  it("Test case:0055 locate and click All item", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Locate tools

  it("Test case:0056 locate and click tools", () => {
    cy.get("#tools").click();
    cy.wait(7000);
  });

  // Test case: Click new button to tool
  it("Test case:0057 find and click new to add tool", () => {
    cy.get("#newButton").click();
    cy.wait(5000);
  });

  //Add new tool
  it("Test case:0058 Add new tool and click on save", () => {
    cy.clearLocalStorage();
    cy.get("#nameInput").shadow().find("input").type("QA test tool");
    cy.get("#toolsSaveButton").click();
    cy.wait(5000);
  });

  // Test case: Click Edit tool
  it("Test case:0059 locate and click Edit tool", () => {
    cy.get("#editButton").click();
    cy.get("#nameInput").shadow().find("input").type("Edited QA test tool");
    cy.get("#toolsSaveButton").click();
    cy.wait(7000);
  });

  // Test case: Click inactive in tool
  it("Test case:0060 locate and click in active tool", () => {
    cy.get("#inactiveSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: Click All in tool
  it("Test case:0061 locate and click All tool", () => {
    cy.get("#allSegmentButton").click();
    cy.wait(7000);
  });

  // Test case: User
  it("Test case:0062 find user and click new to create user", () => {
    cy.get("#user").click();
    cy.get("#newButton").click();
    cy.wait(3000);
    cy.get("#username").shadow().find("input").type("qa team automation");
    cy.get("#chip_number").shadow().find("input").type("556523289");
    cy.get("#name").shadow().find("input").type("QA Team Automation User");
    cy.get("#password").shadow().find("input").type("Test@1929271");
    cy.get("#user_type").shadow().find("input").type("test user");
    cy.get("#email").shadow().find("input").type("qatestautomation@sct.com");
    cy.get("#ip_address").shadow().find("input").type("107.109.2.123");
    cy.document().then((doc) => {
      Array.from(doc.querySelectorAll("ui5-button"))
        .find((v) => v.innerText == "Save")
        .click();
      cy.wait(7000);
    });
  });

  // Test case: Edit user
  it("Test case:0063 edit created user", () => {
    cy.get("#edit").click;
    cy.get("#name").shadow().find("input").type("Edit QA Team Automation User");
    cy.document().then((doc) => {
      Array.from(doc.querySelectorAll("ui5-button"))
        .find((v) => v.innerText == "Save")
        .click();
      cy.wait(7000);
    });
  });
});
