import { test, expect } from "@playwright/test";

const headers = {
    'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
};

test('Retrieve user data and extract details', async ({ request }) => {

    const url = 'https://reqres.in/api/users/2';

    const response = await request.get(url, {
        headers
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    const firstName = responseBody.data.first_name;
    const supportUrl = responseBody.support.url;

    console.log('Status Code:', response.status());
    console.log('First Name:', firstName);
    console.log('Support URL:', supportUrl);

    expect(firstName).toBeDefined();
    expect(supportUrl).toBeDefined();

});

test('Retrieve, update and delete last name', async ({ request }) => {

    const userId = 2;
    const url = `https://reqres.in/api/users/${userId}`;

    // GET User Details
    const getResponse = await request.get(url, {
        headers
    });

    expect(getResponse.status()).toBe(200);

    const getResponseBody = await getResponse.json();

    const firstName = getResponseBody.data.first_name;

    console.log('First Name:', firstName);

    expect(firstName).toBeDefined();

    // UPDATE User Email
    const updatedEmail = {
        email: 'jessytalasani@gmail.com'
    };

    const updateResponse = await request.put(url, {
        headers,
        data: updatedEmail
    });

    expect(updateResponse.status()).toBe(200);

    const updateResponseBody = await updateResponse.json();

    console.log('Updated Email:', updateResponseBody.email);

    expect(updateResponseBody.email).toBe(updatedEmail.email);

    // DELETE Last Name
    const deleteLastNamePayload = {
        last_name: null
    };

    const deleteLastNameResponse = await request.patch(url, {
        headers,
        data: deleteLastNamePayload
    });

    expect(deleteLastNameResponse.status()).toBe(200);

    const deleteResponseBody = await deleteLastNameResponse.json();

    console.log('Deleted Last Name:', deleteResponseBody.last_name);

    expect(deleteResponseBody.last_name).toBeNull();

});