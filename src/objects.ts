interface User {
    id: number;
    name: string;
    active: boolean;
  }
  
  const user: User = { id: 1, name: "Alice", active: true };
  
  // object → JSON
  const json = JSON.stringify(user);
  console.log("User JSON:", json);
  
  // JSON → object
  const parsed = JSON.parse(json);
  console.log("Parsed user:", parsed);
  