const Donation = require('../models/Donation');


exports.createDonation = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file?.filename || null;

    const donation = new Donation({
      title,
      description,
      category,
      image,
      donor: req.user.id // from JWT
    });

    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create donation' });
  }
};


// exports.getDonations = async (req, res) => {
//   try {
//     const donations = await Donation.find().populate('donor', 'name email');
//     res.json(donations);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch donations' });
//   }
// };
