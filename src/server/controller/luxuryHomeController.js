import { createLuxuryHome, getLuxuryHomes, getLuxuryHomeById, updateLuxuryHome, deleteLuxuryHome } from "../domain/luxuryHomeDomain.js";

// Create a new luxury home
export const createLuxuryHomeController = async (req, res) => {
  try {
    const luxuryHomeData = {
      title: req.body.title,
      description: req.body.description,
      price: parseFloat(req.body.price),
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      homeType: req.body.homeType,
      bedrooms: parseInt(req.body.bedrooms),
      bathrooms: parseInt(req.body.bathrooms),
      hasGarden: req.body.hasGarden === "true",
      hasGarage: req.body.hasGarage === "true",
      sqftArea: parseInt(req.body.sqftArea),
      yearBuilt: parseInt(req.body.yearBuilt),
      imageUrl: req.body.imageUrl,
    };

    const luxuryHome = await createLuxuryHome(luxuryHomeData);
    if (luxuryHome) {
      res.status(201).json(luxuryHome);
    } else {
      res.status(500).json({ error: "Failed to create luxury home" });
    }
  } catch (error) {
    console.error("Error creating luxury home:", error);
    res.status(500).json({ error: "Failed to create luxury home" });
  }
};

// Get all luxury homes
export const getLuxuryHomesController = async (req, res) => {
  try {
    const luxuryHomes = await getLuxuryHomes();
    res.json(luxuryHomes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve luxury homes" });
  }
};

// Get a specific luxury home by ID
export const getLuxuryHomeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const luxuryHome = await getLuxuryHomeById(Number(id));
    if (luxuryHome) {
      res.json(luxuryHome);
    } else {
      res.status(404).json({ error: "Luxury home not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve luxury home" });
  }
};

// Update a luxury home
export const updateLuxuryHomeController = async (req, res) => {
  const { id } = req.params;
  try {
    const luxuryHome = await updateLuxuryHome(Number(id), req.body);
    if (luxuryHome) {
      res.json(luxuryHome);
    } else {
      res.status(404).json({ error: "Luxury home not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update luxury home" });
  }
};

// Delete a luxury home
export const deleteLuxuryHomeController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLuxuryHome = await deleteLuxuryHome(Number(id));
    if (deletedLuxuryHome) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Luxury home not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete luxury home" });
  }
};