import { Given, Then, When } from '@cucumber/cucumber';
import { expect, request } from '@playwright/test';
import { ENV } from '../../../config/env';

const headers = {
    'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
};

let response: any;
let responseBody: any;

Given('I retrieve user details for user id {int}', async function (userId: number) {

    const apiContext = await request.newContext();

    response = await apiContext.get(
        `${ENV.API_BASE_URL}/${userId}`,
        { headers }
    );

    responseBody = await response.json();
});

Then('the response status should be {int}', async function (statusCode: number) {

    expect(response.status()).toBe(statusCode);
});

Then('I should extract the first name from the response', async function () {
    const firstName = responseBody.data.first_name;

    expect(firstName).toBeDefined();

    console.log('First Name:', firstName);
});

Then('I should extract the support URL from the response', async function () {
    const supportUrl = responseBody.support.url;

    expect(supportUrl).toBeDefined();

    console.log('Support URL:', supportUrl);
});


// ================= UPDATE EMAIL =================

Given('I update user email for user id {int}', async function (userId: number) {

    const apiContext = await request.newContext();

    response = await apiContext.put(
        `${ENV.API_BASE_URL}/${userId}`,
        {
            headers,
            data: {
                email: 'jessytalasani@gmail.com'
            }
        }
    );

    responseBody = await response.json();
});

Then('the update response status should be {int}', async function (statusCode: number) {

    expect(response.status()).toBe(statusCode);
});

Then('the email should be updated successfully', async function () {

    const updatedEmail = responseBody.email;
    expect(updatedEmail).toBe('jessytalasani@gmail.com');

    console.log('Updated Email:', updatedEmail);
});


// ================= DELETE LAST NAME =================

When('I delete the last name for user id {int}', async function (userId: number) {

    const apiContext = await request.newContext();

    response = await apiContext.patch(
        `${ENV.API_BASE_URL}/${userId}`,
        {
            headers,
            data: {
                last_name: null
            }
        }
    );

    responseBody = await response.json();
});

Then('the delete response status should be {int}', async function (statusCode: number) {

    expect(response.status()).toBe(statusCode);
});

Then('the last name should be null', async function () {

    const deletedLastName = responseBody.last_name;
    expect(deletedLastName).toBeNull();

    console.log('Deleted Last Name:', deletedLastName);
});


