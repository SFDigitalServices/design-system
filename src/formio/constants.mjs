/**
 * This is the HTML class that we add to formiojs form elements. We declare it
 * here so that our React component can add it to the form element at runtime
 * and our build script can prefix all of the formio-specific CSS selectors with
 * it to "scope"
 */
export const FORM_CLASS = 'Formio'