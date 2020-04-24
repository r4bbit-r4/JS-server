/*
* Load dependency from an object repository, throw
* error if it's not found
* */

function requireOption (objectrepository, propertyName) {
    if (objectrepository && objectrepository[propertyName]) {
        return objectrepository[propertyName];
    }
    throw new TypeError(propertyName + 'required ...');
}

module.exports = requireOption;