const fetch = require('node-fetch')
const mockList = require('./mock.json');

const findServer = async () => {

    let onlineServerResult = {
        url: "",
        priority: Infinity
    };

    const promiseList = mockList.map(item => fetchItem(item));

    await Promise.allSettled(promiseList)

    async function fetchItem(item) {
        let url = item.url;
        let priority = item.priority;

        await fetch(`${url}`)
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    onlineServerResult = onlineServerResult.priority < priority ? onlineServerResult : item
                }
            })
    }
    if (!onlineServerResult.url) {
        throw new Error("No servers are online .")
    }
    return onlineServerResult
}

module.exports = findServer

// findServer()