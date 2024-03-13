import { createLuxuryHome, getLuxuryHomes, getLuxuryHomeById, updateLuxuryHome, deleteLuxuryHome } from "../domain/luxuryHomeDomain.js";

// Create a new luxury home
export const createLuxuryHomeController = async (req, res) => {
  try {
    const luxuryHome = await createLuxuryHome(req.body);
    res.status(201).json(luxuryHome);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create luxury home' });
  }
};

// Get all luxury homes
export const getLuxuryHomesController = async (req, res) => {
  try {
    const luxuryHomes = await getLuxuryHomes();
    res.json(luxuryHomes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve luxury homes' });
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
      res.status(404).json({ error: 'Luxury home not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve luxury home' });
  }
};

// Update a luxury home
export const updateLuxuryHomeController = async (req, res) => {
  const { id } = req.params;
  try {
    const luxuryHome = await updateLuxuryHome(Number(id), req.body);
    res.json(luxuryHome);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update luxury home' });
  }
};

// Delete a luxury home
export const deleteLuxuryHomeController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteLuxuryHome(Number(id));
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete luxury home' });
  }
};