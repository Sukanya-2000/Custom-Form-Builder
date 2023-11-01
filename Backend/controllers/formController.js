import Form, { findById } from '../models/formModel';

// Controller logic for form-related operations
const formController = {
  getFormById: async (req, res) => {
    try {
      const form = await findById(req.params.id);
      res.json(form);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving form', error: error.message });
    }
  },

  createForm: async (req, res) => {
    try {
      const newForm = new Form(req.body);
      const savedForm = await newForm.save();
      res.status(201).json(savedForm);
    } catch (error) {
      res.status(500).json({ message: 'Error creating form', error: error.message });
    }
  },

  submitForm: async (req, res) => {
    try {
      const form = await findById(req.params.id);
      // Handle form submission logic, save responses to the database
      res.json({ message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting form', error: error.message });
    }
  },
};

export default formController;
