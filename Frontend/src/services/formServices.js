const API_BASE_URL = 'https://crudcrud.com/api/27efd5bcc7b447b1bf0c959164c9d72a';

const formService = {
  getFormById: async (formId) => {
    const response = await fetch(`${API_BASE_URL}/forms/${formId}`);
    const data = await response.json();
    return data;
  },

  createForm: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  },

  submitForm: async (formId, formResponses) => {
    const response = await fetch(`${API_BASE_URL}/forms/${formId}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ responses: formResponses }),
    });
    const data = await response.json();
    return data;
  },
};

export default formService;
