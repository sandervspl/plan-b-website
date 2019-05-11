import * as _ from 'lodash';

enum FORM_VALIDATE_ERR {
  REQUIRED = 'This field is required.',
}

class Validate {
  public required = (value: string): undefined | string => {
    if (value) return undefined;

    return 'This field is required.';
  }

  public applyFormValidate = (values: any): boolean => {
    /* eslint-disable */
    let errors: any = {};

    if (!values.armory_link) {
      errors.armory_link = FORM_VALIDATE_ERR.REQUIRED;
    }

    if (!values.role) {
      errors.role = FORM_VALIDATE_ERR.REQUIRED;
    }

    if (!values.about_applicant) {
      errors.about = FORM_VALIDATE_ERR.REQUIRED;
    } else {
      if (!values.about_applicant.name) {
        errors.name = FORM_VALIDATE_ERR.REQUIRED;
      }

      if (!values.about_applicant.age) {
        errors.age = FORM_VALIDATE_ERR.REQUIRED;
      }

      if (!values.about_applicant.story) {
        errors.story = FORM_VALIDATE_ERR.REQUIRED;
      }
    }
    /* eslint-enable */

    return !_.isEmpty(errors);
  }
};

const validate = new Validate();

export { validate };
