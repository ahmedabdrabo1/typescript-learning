const user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Ahmed",
  age: 21,
  isAdmin: false,
};

console.log(user);


const nestedUser: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Ahmed",
  age: 21,
  address: {
    city: "Cairo",
    country: "Egypt",
  },
};

console.log(nestedUser.address.city);


const userWithOptionalPhone: {
  name: string;
  age: number;
  phone?: string;
} = {
  name: "Ahmed",
  age: 21,
};

const userWithPhone: {
  name: string;
  age: number;
  phone?: string;
} = {
  name: "Ahmed",
  age: 21,
  phone: "01000000000",
};

console.log(userWithOptionalPhone);
console.log(userWithPhone);


const users: {
  name: string;
  age: number;
}[] = [
  {
    name: "Ahmed",
    age: 21,
  },
  {
    name: "Ali",
    age: 22,
  },
];

console.log(users);


function printUser(user: {
  name: string;
  age: number;
}): void {
  console.log(user.name);
  console.log(user.age);
}

printUser({
  name: "Ahmed",
  age: 21,
});


type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const userWithType: User = {
  name: "Ahmed",
  age: 21,  
  isAdmin: false,
};

console.log(userWithType);


function printUserWithType(user: User): void {
  console.log(user.name);
  console.log(user.age);
}

printUserWithType(userWithType);


type UserWithId = {
  readonly id: number;
  name: string;
  age: number;
};

const userWithId: UserWithId = {
  id: 1,
  name: "Ahmed",
  age: 21,
};

userWithId.name = "Ali";

console.log(userWithId);
