const field1Selector = document.querySelector('#title');
const field2Selector = document.querySelector('#description');
const field3Selector = document.querySelector('#dueDate');
const field4Selector = document.querySelector('#priority');

const clearForm = () => {
  field1Selector.value = '';
  field2Selector.value = '';
  field3Selector.value = '';
  field4Selector.value = 'low';
};

export default clearForm;