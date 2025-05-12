export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.zeno.fm/station/x8q6ph631tzuv/nowplaying");
    const data = await response.json();

    const song = data.title || "Sin información disponible";
    const art = data.art || "https://via.placeholder.com/400x400.png?text=Sin+carátula";

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ song, art });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
}
