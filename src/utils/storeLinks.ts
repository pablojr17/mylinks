import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ListItemProps {
  id: string,
  link: string,
  url: string
}

// interface Props {
//   key: string;
//   newLink: ListItemProps;
//   link: ListItemProps;
//   selectedItem: (data: ListItemProps) => void;
//   deleteItem: (id: string) => void
// }

export async function getLinksSave(key: string) {
  const myLinks = await AsyncStorage.getItem(key);
  if (myLinks === null) return
  let linkSaves = JSON.parse(myLinks);
  return linkSaves;
}

export async function saveLink(key: string, newLink: ListItemProps) {
  const linksStored = await getLinksSave(key);

  const hasLink = linksStored.some((link: ListItemProps) => link.id === newLink.id);

  if (hasLink) {
    console.log('Esse link já existe.');
    return
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored))
  console.log('SALVO')
}

export async function deleteLink(links: any, id: string) {
  let myLinks = links.filter((item: ListItemProps) => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('links', JSON.stringify(myLinks))
  console.log('Deletado com sucesso')

  return myLinks;
}