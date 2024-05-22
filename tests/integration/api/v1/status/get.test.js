test("GET to /api/v1/status should be return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const databaseVersionValue = responseBody.dependencies.database.version;
  const databaseMaxConnetionsValue =
    responseBody.dependencies.database.max_connections;
  const databaseOpenedConnetionsValue =
    responseBody.dependencies.database.opened_connections;

  expect(databaseVersionValue).toBe("16.0");
  expect(databaseMaxConnetionsValue).toBe(100);
  expect(databaseOpenedConnetionsValue).toBe(1);
});
