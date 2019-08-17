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
};

const validate = new Validate();

export { validate };
