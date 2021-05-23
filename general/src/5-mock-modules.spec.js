
import axios from 'axios';
import {Users} from './5-mock-modules';

jest.mock('axios');


test('get all users - Users.all()', async () => {
    const fakeData = [
        {email: "rclend24@gmail.com",last_name: "Clendinning",first_name: "Rolland"},
        {email: "dbedson1@weebly.com",last_name: "Bedson", first_name: "Darya"},
        {email: "ebeekman2@hud.gov",last_name: "Beekman",first_name: "Erskine"}
    ]
    const resp = {data: fakeData};
    axios.get.mockResolvedValue(resp);

    // alternatively you could use the following 
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    await expect(Users.all()).resolves.toEqual(fakeData);
});

test('get user by email - Users.findOneByEmail(email)', async () => {
    const fakeData = [
        {email: "rclend24@gmail.com",last_name: "Clendinning",first_name: "Rolland"},
        {email: "dbedson1@weebly.com",last_name: "Bedson", first_name: "Darya"},
        {email: "ebeekman2@hud.gov",last_name: "Beekman",first_name: "Erskine"}
    ]
    const user = fakeData[2]
    const resp = {data:user};
    axios.get.mockResolvedValue(resp);

    // alternatively you could use the following 
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    const res = await Users.findOneByEmail(user.email);
    console.log({res});
    await expect(Users.findOneByEmail(user.email)).resolves.toEqual(user);
});