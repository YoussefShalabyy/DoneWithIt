import React from "react";
import Screen from "../../components/Screen";
import {
  MyFormField,
  SubmitButton,
  MyFormik,
  MyFormPicker,
} from "@/components/Form";
import * as yup from "yup";
import { FormImagePicker } from "../../components/Form";
import listingsApi from "../api/listings";
import useLocation from "../../hooks/useLocation";

const categories = [
  { title: "Furniture", id: 1 },
  { title: "Clothing", id: 2 },
  { title: "Camera", id: 3 },
];
const validationSchema = yup.object().shape({
  title: yup.string().required().label("Title"),
  price: yup
    .number()
    .required()
    .typeError("Price must be a number")
    .max(10000)
    .label("Price"),
  category: yup.object().required().nullable().label("Categories"),
  description: yup.string().label("Description"),
  images: yup.array().min(1, "Please select atleast one image."),
});

const ListingEditScreen = () => {
  const { location } = useLocation();

  const handleSubmit = async (listing) => {
    console.log(listing);

    const result = await listingsApi.addListing(
      { ...listing, location },
      console.log({ ...listing, location }),

      // listing,
      (progress) => console.log(progress)
    );
    if (!result.ok) return alert("Couldn't save the listing.");
    return alert("Success");
  };

  return (
    <Screen style={{ padding: 15, gap: 15 }}>
      <MyFormik
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(a) => handleSubmit(a)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <MyFormField placeholder="Title" name="title" />
        <MyFormField
          placeholder="Price"
          name="price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <MyFormPicker
          items={categories}
          placeholder={"Category"}
          name="category"
          width={"50%"}
        />
        <MyFormField placeholder="Description" name="description" />
        <SubmitButton title={"Submit"} />
      </MyFormik>
    </Screen>
  );
};

export default ListingEditScreen;
