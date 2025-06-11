export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.pancakeswap.info/api/v2/prediction/rounds/latest", {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
