const newmodel = require("../Model/Testmodel");

exports.getalldata = async (req, res) => {
  try {
    const alldata = await newmodel.find();
    res.status(200).json({ success: true, show: alldata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getsingledata = async (req, res) => {
  try {
    const singledata = await newmodel.findById();
    res.status(200).json({ success: true, show: singledata });
  } catch (error) {
    res.status(400).json({ success: true });
  }
};

exports.createdata = async (req, res) => {
  try {
    const newdata = await newmodel.create(req.body);
    res.status(200).json({ success: true, show: newdata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updatedata = async (req, res) => {
  try {
    const dataupdate = await newmodel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ success: true, show: dataupdate });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deletedata = async (req, res) => {
  try {
    const removedata = await newmodel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, show: removedata });
  } catch (error) {
    res.status(400).json({ success: true });
  }
};
