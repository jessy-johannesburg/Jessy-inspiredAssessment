# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\test\api\apitest.spec.ts >> Retrieve user data and extract details
- Location: src\test\api\apitest.spec.ts:3:5

# Error details

```
TypeError: responseBody.status is not a function
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test";
  2  | 
  3  | test('Retrieve user data and extract details', async ({ request }) => {
  4  |  const url = 'https://reqres.in/api/users/2';
  5  | 
  6  |     const response = await request.get(url,{
  7  |     headers:{
  8  |         'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
  9  |     }
  10 | });
  11 | 
  12 | if (response.ok()) {
  13 |     console.log(`Status Code : ${response.status()}`);
  14 |         const responseBody = await response.json();
  15 |         
  16 |         const firstName = responseBody.data.first_name;
  17 |         console.log('First Name:', firstName);
  18 | 
  19 |         const supportUrl = responseBody.support.url;
  20 |         console.log('Support URL:', supportUrl);
  21 | 
> 22 |         expect(responseBody.status()).toBe(200);
     |                             ^ TypeError: responseBody.status is not a function
  23 |         expect(firstName).toBeDefined();
  24 | } else {
  25 |     console.error('Failed to retrieve user data. Status Code: ${response.status()}');
  26 | }
  27 | 
  28 | test('Retrieve, update and delete user details', async ({ request }) => {
  29 |     const userId = 2;
  30 |     const url = `https://reqres.in/api/users/${userId}`;
  31 | 
  32 |     // Retrieve user details
  33 |     const getResponse = await request.get(url, {
  34 |         headers: {
  35 |             'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
  36 |         }
  37 |     });
  38 |     expect(getResponse.status()).toBe(200);
  39 |     const getResponseBody = await getResponse.json();
  40 |     const firstName = getResponseBody.data.first_name;
  41 |     console.log('First Name:', firstName);
  42 |     expect(firstName).toBeDefined();
  43 | 
  44 |     // Update Email Address
  45 |     const updatedEmail = { email: 'jessytalasani@gmail.com' };
  46 |     const updateResponse = await request.put(url, {
  47 |         headers: {
  48 |             'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
  49 |         },
  50 |         data: updatedEmail
  51 |     });
  52 |     expect(updateResponse.status()).toBe(200);  
  53 |     const updateResponseBody = await updateResponse.json();
  54 |     console.log('Updated Email:', updateResponseBody.email);
  55 |     expect(updateResponseBody.email).toBe(updatedEmail.email);
  56 | 
  57 |     // Delete lastName
  58 |     const deletePayload = { last_name: null };
  59 |     const deleteResponse = await request.delete(url, {
  60 |         headers: {
  61 |             'x-api-key': 'free_user_3DqRocwtB1agSkdKv6OP8w1a0A6'
  62 |         },
  63 |         data: deletePayload
  64 |     });
  65 |     expect(deleteResponse.status()).toBe(200);
  66 |     const deleteResponseBody = await deleteResponse.json();
  67 |     console.log('Delete Response:', deleteResponseBody);
  68 |     expect(deleteResponseBody.last_name).toBeNull();
  69 | });
  70 | });
  71 | 
```