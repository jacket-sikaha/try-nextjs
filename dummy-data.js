import { faker } from "@faker-js/faker";
import { faker as fakerCN } from "@faker-js/faker/locale/zh_CN";

const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
const avatarUrl = faker.image.avatar();
const natureImageUrl = faker.image.nature();
const zh_CN_fullName = `${fakerCN.name.firstName()} ${fakerCN.name.lastName()}`;

function createRandomUser() {
  return {
    // id: faker.datatype.uuid(),
    id: faker.database.mongodbObjectId(),
    title: faker.name.jobTitle(),
    description: faker.hacker.phrase(),
    date: faker.date.birthdate(),
    location: faker.address.streetAddress(),
    image: faker.image.animals(250, 220, true),
    isFeature: faker.datatype.boolean(),
  };
}

const init = () => {
  const tmp = [];
  for (let i = 0; i < 10; i++) {
    tmp.push(createRandomUser());
  }
  return tmp;
};
const userList = init();

console.log(userList);
const getFeaturedEvents = () => {
  return userList;
};

const getEventById = (id) => {
  return userList.find((event) => event.id === id);
};
export { getFeaturedEvents, getEventById };
