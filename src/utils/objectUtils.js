const objectUtils = {
    /**
     * Replaces keys in an object according to a mapping.
     *
     * @param {Object} obj - The original object.
     * @param {Object} keyMapping - An object that defines the keys to be replaced and their new names.
     * @returns {Object} - A new object with the keys replaced.
     */
    replaceKeys(obj, keyMapping) {
      return Object.keys(obj).reduce((newObj, key) => {
        // Use the new key name if it exists in the mapping, otherwise use the original key
        const newKey = keyMapping[key] || key;
        newObj[newKey] = obj[key];
        return newObj;
      }, {});
    }
  };
  
  // Export the utility module
  export default {objectUtils};



//   // Example usage
// const originalObject = {
//     name: 'John Doe',
//     age: 30,
//     address: '123 Main St',
//     email: 'john.doe@example.com'
//   };
  
//   const keyMapping = {
//     name: 'fullName',
//     address: 'location'
//   };
  
//   const updatedObject = replaceKeys(originalObject, keyMapping);