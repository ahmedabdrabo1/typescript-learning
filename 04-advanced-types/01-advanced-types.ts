type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Ahmed",
  age: 21,
};

console.log(user);

type ID = string | number;

let userId: ID;

userId = 101;
console.log(userId);

userId = "user-101";
console.log(userId);

function printId(id: string | number): void {
  console.log(id);
}

printId(101);
printId("user-101");

type Admin = {
  name: string;
  permissions: string[];
};

type Employee = {
  name: string;
  salary: number;
};

type AdminEmployee = Admin & Employee;

const adminEmployee: AdminEmployee = {
  name: "Ahmed",
  permissions: ["create", "delete"],
  salary: 15000,
};

console.log(adminEmployee);

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

let status: OrderStatus;

status = "pending";
status = "shipped";

console.log(status);

function updateOrderStatus(status: OrderStatus): void {
  console.log(`Order status: ${status}`);
}

updateOrderStatus("processing");
updateOrderStatus("delivered");

type Product = {
  name: string;
  price: number;
  description?: string;
};

const product: Product = {
  name: "Laptop",
  price: 30000,
};

console.log(product.description);

const userName: string | null = null;

console.log(userName);

function printUserName(name: string | null): void {
  if (name !== null) {
    console.log(name);
  } else {
    console.log("No username");
  }
}

printUserName("Ahmed");
printUserName(null);

type Customer = {
  name: string;
  address?: {
    city: string;
    country: string;
  };
};

const customer: Customer = {
  name: "Ahmed",
};

console.log(customer.address?.city);

const customerWithAddress: Customer = {
  name: "Ahmed",
  address: {
    city: "Cairo",
    country: "Egypt",
  },
};

console.log(customerWithAddress.address?.city);
