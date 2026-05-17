import {test, expect} from "@playwright/test";

test('Retrieve user data and extract details', async ({ request }) => {
 const url = 'https://reqres.in/api/users/2';

    const response = await request.get(url,{
    headers:{
        'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
    }
});

if (response.ok()) {
    console.log(`Status Code : ${response.status()}`);
        const responseBody = await response.json();
        
        const firstName = responseBody.data.first_name;
        console.log('First Name:', firstName);

        const supportUrl = responseBody.support.url;
        console.log('Support URL:', supportUrl);

        expect(responseBody.status()).toBe(200);
        expect(firstName).toBeDefined();
} else {
    console.error('Failed to retrieve user data. Status Code: ${response.status()}');
}

test('Retrieve, update and delete user details', async ({ request }) => {
    const userId = 2;
    const url = `https://reqres.in/api/users/${userId}`;

    // Retrieve user details
    const getResponse = await request.get(url, {
        headers: {
            'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
        }
    });
    expect(getResponse.status()).toBe(200);
    const getResponseBody = await getResponse.json();
    const firstName = getResponseBody.data.first_name;
    console.log('First Name:', firstName);
    expect(firstName).toBeDefined();

    // Update Email Address
    const updatedEmail = { email: 'jessytalasani@gmail.com' };
    const updateResponse = await request.put(url, {
        headers: {
            'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
        },
        data: updatedEmail
    });
    expect(updateResponse.status()).toBe(200);  
    const updateResponseBody = await updateResponse.json();
    console.log('Updated Email:', updateResponseBody.email);
    expect(updateResponseBody.email).toBe(updatedEmail.email);

    // Delete lastName
    const deletePayload = { last_name: null };
    const deleteResponse = await request.delete(url, {
        headers: {
            'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
        },
        data: deletePayload
    });
    expect(deleteResponse.status()).toBe(200);
    const deleteResponseBody = await deleteResponse.json();
    console.log('Delete Response:', deleteResponseBody);
    expect(deleteResponseBody.last_name).toBeNull();
});
});
