import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.allSettled(promises).then((results) => {
    const photo = results[0].value;
    const user = results[1].value;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
