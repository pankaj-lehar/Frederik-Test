const jestify = require('jest-fetch-mock').enableMocks()

const findServer = require('./index')

const url1 = "https://does-not-work.perfume.new";
const url2 = "https://gitlab.com";
const url3 = "http://app.scnt.me";
const url4 = "https://offline.scentronix.com";

it("All servers are available", async () => {

    fetch.mockResponse(JSON.stringify({
        url: url1,
        status: 200
    }
    ));
    fetch.mockResponse(JSON.stringify({
        url: url2,
        status: 200
    }

    ));
    fetch.mockResponse(JSON.stringify({
        url: url3,
        status: 200
    }

    ));
    fetch.mockResponse(JSON.stringify({
        url: url4,
        status: 200
    }
    ));
    let data = await findServer();
    console.log("data", data);
    expect(data).toEqual({ url: url1, priority: 1 });

})

it("Only second and third server are available", async () => {

    fetch.mockResponse(JSON.stringify({
        url: url1,
        status: 200
    }
    ));
    fetch.mockResponse(JSON.stringify({
        url: url2, status: 200
    }

    ));
    fetch.mockResponse(JSON.stringify({
        url: url3,
        status: 200
    }

    ));
    fetch.mockResponse(JSON.stringify({
        url: url4,
        status: 200
    }

    ));

    let data = await findServer();
    console.log("data", data);
    expect(data).toEqual({ url: url2, priority: 4 });

})

it("Only second and third server are available", async () => {

    fetch.mockResponse(JSON.stringify({
        url: url1,
        status: 200
    }
    ));
    fetch.mockResponse(JSON.stringify({
        url: url2,
        status: 200
    }

    ));
    fetch.mockResponse(JSON.stringify({
        url: url3,
        status: 200
    }

    ));
    fetch.mockResponse(JSON.stringify({
        url: url4,
        status: 200
    }

    ));
    // expect(jestify).toEqual({ url:url1, priority:  });

})

