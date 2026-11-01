import { db } from "hatchable";
export const access = "public";
export const methods = ["POST"];
export default async function (req, res) {
  const b = req.body || {};
  const name = String(b.name || "").trim().slice(0, 120);
  const email = String(b.email || "").trim().slice(0, 200);
  const message = String(b.message || "").trim().slice(0, 4000);
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: "Please add your name, a valid email and a message." });
  await db.query("INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)", [name, email, message]);
  res.json({ ok: true });
}