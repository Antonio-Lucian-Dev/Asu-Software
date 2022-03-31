import React, { useState } from 'react'

const useForm = (initialFValues) => {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

  return {
      values,
      setValues,
      errors,
      setErrors
  }
}

export default useForm;