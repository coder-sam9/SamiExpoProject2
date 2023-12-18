import client from "./client";
import AuthContext from "../auth/context";
const getListings = () => client.get("/listings");

// regular json data post
//const addListing = (listing) => client.post("/listings", listing);

// Multi part form data post - json data plus files
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.categoryId);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post("/listings", data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const getListing = (id) => client.get("/listing/" + id);

const getCategories = () => client.get("/categories");

export default { getListings, getListing, getCategories, addListing };
