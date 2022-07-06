
import { Before,After } from "cypress-cucumber-preprocessor/steps";
import api_utility from "../../utilities/api_utility"

Before(function ()
{
    cy.fixture('envData').then(function(data)
    {
        this.envURL=data
    })

    cy.fixture('loginData').then(function(data)
    {
        this.loginData=data
    })
    cy.viewport(1920,1080);
});

let status = 'Passed'
Cypress.on('fail', (error, runnable) => {
    status = 'Failed'
cy.log('on fail')
    throw error // throw error to have test still fail
})
After( function () {
    cy.log(localStorage.getItem("_token"))
    let tempTK = localStorage.getItem("_token");
    cy.log(status);
    let postData = "token="+tempTK+"&project_id=10516&status="+status+"&tc_id[]="+api_utility.tc_id+"&tc_name="+api_utility.tc_name;
    cy.log(postData)
    cy.request({
        method: 'POST',
        url: 'https://apiss.kualitee.com/api/v2/test_case_execution/change_status', // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: postData
    })
});
