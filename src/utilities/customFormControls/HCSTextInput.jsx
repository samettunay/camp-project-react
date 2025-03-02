import React from 'react'
import { Field, ErrorMessage, useField } from 'formik'
import { FormField } from 'semantic-ui-react'

export default function HCSTextInput({...props}) {
  const [field, meta] = useField(props)
  
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <Field {...props} />
        {meta.touched && meta.error && (
          <ErrorMessage name={props.name} render={error => 
            <div className='ui pointing red basic label'>{error}</div>
          } />
        )}
      </FormField>
    </div>
  )
}
