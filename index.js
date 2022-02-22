import { api, data } from "@serverless/cloud";

// GET route - returns FizzBuzz result for given number
api.get("/api/:number", async (req, res) => {
  let number = parseInt(req.params.number);

  if (isNaN(number)) {
    console.log(`404 - not a number`);

    res.status(404).send({ error: "Request was not a number" });

    return;
  }

  // Get FizzBuzz specification and convert to key: value object
  let { value: spec } = await data.get("spec:default", true);

  let result = '';

  // String together any keys the number is divisible by
  for (const [key, value] of Object.entries(spec)) { 
    if (number % value === 0) { 
      result += key;
    }
  }

  // Default behaviour - return the number as a string
  if (!result) { 
    result += number;
  }
    
  // Return the results
  res.send({
    result
  });
});

// Catch all for missing API routes
api.get("/api/*", (req, res) => {
  console.log(`404 - api`);
  res.status(404).send({ error: "not found" });
});

// Catch all for Vue SPA routes
api.get("/*", (req, res) => {
  console.log(`404 - loading index.html`);
  res.sendFile(`${process.cwd()}/static/index.html`);
});
