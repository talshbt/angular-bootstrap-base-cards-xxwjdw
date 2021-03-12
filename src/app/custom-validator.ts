import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function requireCheckboxesToBeCheckedValidator( openPdf:boolean): ValidatorFn {
  console.log(openPdf)
  return function validate (formGroup: FormGroup) {
    const control = formGroup.controls['acceptTerms'];
    if (formGroup.valid && !openPdf){
      return {
        requireOpenFile: true,
      };

    }
    return null;
  };
}
