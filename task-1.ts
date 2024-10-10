type Admin = {
    name: string;
    permissions: string[];
  };
  
  type User = {
    name: string;
    email: string;
  };
  
  type AdminUser = Admin & User;
  
  const adminUser: AdminUser = {
    name: "Ludmila",
    permissions: ["lol", "cool", "super"],
    email: "ludmilaverb@rambler.ru"
  };
  
  console.log(adminUser);