const userName = {
  minLength: 6,
  maxLength: 18,
};
const email = {
  minLength: 6,
  maxLength: 24,
};
const pwd = {
  minLength: 6,
  maxLength: 18,
};

const authForm = { userName, email, pwd };

const validate = { authForm };

export default validate;
