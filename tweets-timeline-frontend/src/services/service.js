import config from '../../config'

export default async function AddTweets(userName) {
    try {
        const data = await fetch(`${config.backendUrl}/${userName}`, { method: 'GET' });
        const user = await data.json();
        return user;

    } catch (err) { return }
}