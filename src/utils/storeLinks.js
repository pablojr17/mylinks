import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}

export async function saveLink(key, newLink) {
  const linksStored = await getLinksSave(key);

  const hasLink = linksStored.some(link => link.id === newLink.id);

  if (hasLink) {
    console.log('Esse link já existe.');
    return
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored))
  console.log('SALVO')
}

export async function deleteLink(links, id) {
}