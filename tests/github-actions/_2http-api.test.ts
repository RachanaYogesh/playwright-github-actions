import { test, expect } from '@playwright/test';
import { request } from 'http';

//using this variable globally
let userId;
//test.describe('API Testing Demo', () => {
//});
test('GET request', async ({ request }) => {
  // GET request to fetch the data

  const get_response = await request.get('https://reqres.in/api/users/?page=2');

  console.log(await get_response.json());

  //expecting the appropriate status of the request
  expect(get_response.status()).toBe(200);
});

test('POST request', async ({ request }) => {
  // POST request to send new data

  const post_response = await request.post('https://reqres.in/api/users', {
    data: { name: 'Rachana', job: 'Tester' },

    headers: { Accept: 'application/json' },
  });

  //storing the result in a variable
  const result = await post_response.json();
  console.log(result);

  //expecting the appropriate status of the request
  expect(post_response.status()).toBe(201);

  //assigning the results id in a variable -> userId
  //purpose: to update and delete the particular user in API
  userId = result.id;
});

test('PUT request', async ({ request }) => {
  // PUT request to update the data

  const put_response = await request.put(
    'https://reqres.in/api/users' + userId,
    {
      data: { name: 'Rachana', job: 'Analyst' },

      headers: { Accept: 'application/json' },
    }
  );

  //log the raw response content
  console.log(await put_response.text());

  //expecting the appropriate status of the request
  expect(put_response.status()).toBe(404);
});

test('DELETE request', async ({ request }) => {
  // DELETE request to update the data

  const delete_response = await request.delete(
    'https://reqres.in/api/users' + userId
  );

  //expecting the appropriate status of the request
  expect(delete_response.status()).toBe(204);
});
