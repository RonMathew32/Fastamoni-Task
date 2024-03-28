import { BASE_URL } from '@env';

const handleResponse = async (response) => {
  const { status, ok } = response;
  if (ok) {
    const data = await response.json();
    return { response: data, status };
  } else {
    console.log('Error: Response is undefined');
    return { response: { message: 'Something Went Wrong' }, status };
  }
};

const ApiCall = async ({ params, route, verb, body, headers }) => {
  try {
    const response = await fetch(`${BASE_URL}/${route}`, {
      method: verb,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
  }
};

const ApiCallWithFormData = async ({ params, route, verb, body, headers }) => {
  try {
    const response = await fetch(`${BASE_URL}/${route}`, {
      method: verb,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...headers,
      },
      body: JSON.stringify(body),
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error:', error);
  }
};

export { ApiCall, ApiCallWithFormData };
