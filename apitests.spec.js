import { test, expect } from "@playwright/test";

test("API GET Request", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2");
  
    expect(response.status()).toBe(200);
  
    const text = await response.text();
    expect(text).toContain("Janet");
  
    console.log(await response.json());
});



test("API POST Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Jummy",
      job: "Software Engineer",
    },
  });

  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Jummy");

  console.log(await response.json());
});


test("API PUT Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Jummy",
      job: "Software Engineer",
    },
  });

  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Jummy");

  console.log(await response.json());
});



test("API DELETE Request", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2");
  
    expect(response.status()).toBe(204);
  
    
});
  