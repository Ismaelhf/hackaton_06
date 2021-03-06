const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Validator = (type, value) => {
  switch (type) {
    case 'email':
      if (formatEmail.test(value)) {
        return {
          error: '',
        };
      }
      return {
        error: 'Incorrect email format. e: user@gmail.com',
        value,
      };
    default:
      return {
        error: '',
      };
  }
};

export default Validator;
