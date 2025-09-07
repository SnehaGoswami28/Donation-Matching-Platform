const token = jwt.sign(
  { id: user._id, role: user.role },   // ✅ role include karo
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);
