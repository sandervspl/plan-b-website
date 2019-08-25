import _ from 'lodash';

enum FORM_VALIDATE_ERR {
  REQUIRED = 'This field is required.',
}

type ValidateReturnType = string | undefined;

class Validate {
  public required = (value: string): ValidateReturnType => {
    if (!value) {
      return FORM_VALIDATE_ERR.REQUIRED;
    }

    return undefined;
  }

  public dropdownRequired = (value: string): ValidateReturnType => {
    if (!value || value === '-1') {
      return FORM_VALIDATE_ERR.REQUIRED;
    }

    return undefined;
  }

  public minMax = ({ min, max }: { min?: number; max?: number }) => (value: string): ValidateReturnType => {
    if (!value) {
      return this.required(value);
    }

    if (min && value.length < min) {
      return `Value needs to be at least ${min} characters long.`;
    };

    if (max && value.length > max) {
      return `Value can not be longer than ${max} characters.`;
    };

    return undefined;
  }
};

const validate = new Validate();

export { validate };
