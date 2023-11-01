const validateForm = (req, res, next) => {
    // Implement validation logic for form creation
    // Example: Check if required fields are present
    const { headerImage, questions } = req.body;
    if (!headerImage || !questions || questions.length === 0) {
      return res.status(400).json({ message: 'Invalid form data' });
    }
    next();
  };
  
  const validateFormSubmission = (req, res, next) => {
    // Implement validation logic for form submission
    // Example: Check if all required responses are present
    const { responses } = req.body;
    if (!responses || responses.length === 0) {
      return res.status(400).json({ message: 'Invalid form submission data' });
    }
    next();
  };
  
  export default { validateForm, validateFormSubmission };
  