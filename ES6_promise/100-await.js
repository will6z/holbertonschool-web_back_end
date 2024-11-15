import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser asynchronously
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Return the responses in the specified format
    return { photo, user };
  } catch (error) {
    // If any error occurs, return an empty object with null values
    return { photo: null, user: null };
  }
}
