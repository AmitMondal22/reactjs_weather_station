const convertErrorObjectToFormErrors = (errorData) => {
    let errorObject;
  
    // Check if errorData is a string and parse it
    if (typeof errorData === 'string') {
      try {
        errorObject = JSON.parse(errorData);
      } catch (error) {
        console.error('Failed to parse error string:', error);
        return [];
      }
    } else if (typeof errorData === 'object' && errorData !== null) {
      // If it's already an object
      errorObject = errorData;
    } else {
      return [];
    }
    // Check if errorObject has the expected structure
    if (!errorObject.detail || !Array.isArray(errorObject.detail)) {
      return [];
    }
  
    // Convert error details into the desired format
    return errorObject.detail.map(error => ({
      name: error.loc[1], // Assuming the second item in loc is the field name
      errors: [error.msg] // The error message from the API
    }));
  };
  
  module.exports = { convertErrorObjectToFormErrors };
  