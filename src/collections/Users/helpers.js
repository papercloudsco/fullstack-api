import Users from './model';

const getById = async id => {
  try {
    if (!id) return null;
    // search for inventory item
    let doc = await Users.findOne({ _id: id });
    return doc; // firebase doesnt include the id, so tack it on
  } catch (err) {
    console.log(err);
  }
};

export default {
  getById
};
