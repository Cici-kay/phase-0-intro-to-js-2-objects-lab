const employee = {
  name: "Mark",
  streetAddress: "Jacaranda 123",
};
console.log(employee);

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  let newObject = {
    ...employeeObject,
    [key]: value,
  };
  console.log(newObject);
  return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(
  employeeObject,
  key,
  value
) {
  employeeObject[key] = value;
  console.log(employeeObject);
  return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
  let newEmployee = { ...employeeObject };
  delete newEmployee[key];
  console.log(newEmployee);
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
  delete employeeObject[key];
  console.log(employeeObject);
  return employeeObject;
}
destructivelyDeleteFromEmployeeByKey(employee, "name");
  