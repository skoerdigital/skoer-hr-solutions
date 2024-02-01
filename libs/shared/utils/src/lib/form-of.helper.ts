import { FormArray, FormControl, FormGroup } from '@angular/forms';

// TODO: Related to https://github.com/angular/angular/issues/46864
// This might be a replacement for BasicForm helper
// Consider to replace all occurances with propsed solution and/or wait until Angular release above-mentioned candidate
export type FormOf<Schema, PropertiesToNotTransform extends keyof Schema = never> = [Schema] extends [
    Date | Array<string | number | boolean>
]
    ? FormControl<Schema>
    : [Schema] extends [(infer U)[]]
    ? FormArray<FormOf<U>>
    : [Schema] extends [Record<any, any>]
    ? FormGroup<{
          [K in keyof Schema]: K extends PropertiesToNotTransform ? FormControl<Schema[K]> : FormOf<Schema[K]>;
      }>
    : FormControl<Schema>;
