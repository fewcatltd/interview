// implement FormErrors<T>
// данные тип должен содержать свойства передаваемого обьекта. Эти свойста могут быть nullable. 
type FormErrors<T> = {
  
}

type ContactDetailForm = {
  name: string;
  email: string
};


const formErrors: FormErrors<ContactDetailForm> = {
  errors: {
    name: "Can't be blank",
  },
};

const formErrors2: FormErrors<ContactDetailForm> = {
  errors: {
    name: "Can't be blank",
    email: 'wrong format'
  },
};

const formErrors3: FormErrors<ContactDetailForm> = {
  errors: {
    email: 'wrong format'
  },
};


const incorrectFormErrors: FormErrors<ContactDetailForm> = {
  errors: {
    name: "Can't be blank",
    email: 'wrong format',
    age: 'must be greather than 18y' //Тут должна быть ошибка, т.к. age не принадлежит ContactDetailForm
  },
};
