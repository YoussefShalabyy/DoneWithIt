import apiClient from "./client";

const endpoint = "/listings";
const listing = {
  title: "w",
  price: "1",
  categoryId: 2, // Use the correct category ID format if required
  description: "",
  images: [
    "file:///var/mobile/Containers/Data/Application/2FB478E9-80DC-42CF-8426-942BE7B0DE62/Library/Caches/ExponentExperienceData/@anonymous/DoneWithIt-223a666e-db78-4e10-96e4-07c419f0dbcc/ImagePicker/3F014338-6DBA-4794-986F-2EAE6A45A08E.png",
  ],
  location: {
    latitude: 30.008316040039062,
    longitude: 31.172471557047878,
  },
};

const getListings = () => apiClient.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();

  // Append textual data
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.categoryId);
  data.append("description", listing.description);

  // Append images
  listing.images.forEach((image, index) => {
    // Determine MIME type based on the image extension or content
    const mimeType = image.endsWith(".jpg") ? "image/jpeg" : "image/png";

    // Ensure filenames are unique
    const filename = `image_${index}_${Date.now()}.jpg`;

    data.append("images", {
      uri: image,
      type: mimeType,
      name: filename,
    });
  });

  // Append location if it exists
  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  // Send POST request with data
  return apiClient
    .post(endpoint, listing)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error adding listing:", error);
      throw error;
    });
};

export default {
  addListing,
  getListings,
};
