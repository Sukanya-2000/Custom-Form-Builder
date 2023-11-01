import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  type: {
    type: String,
    enum: ['Categorize', 'Cloze', 'Comprehension'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const formSchema = new Schema({
  headerImage: {
    type: String,
  },
  questions: [questionSchema],
});

const Form = model('Form', formSchema);

export default Form;
