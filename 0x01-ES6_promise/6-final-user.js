import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const results = await Promise.allSettled(promises);
  return results.map((obj) => ({
    status: obj.status,
    value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
  }));
}
