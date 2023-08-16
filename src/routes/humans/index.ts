import express from "express";

const router = express.Router();

router.get("/:page", async (req, res) => {
  const page = req.params.page;

  try {
    const response = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            characters(page: ${page}, filter: { species: "human" }) {
              info {
                count
                pages
              }
              results {
                id
                name
                image
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
