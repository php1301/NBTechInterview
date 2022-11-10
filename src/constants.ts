export const COLUMNS = [
    {
        Header: "List of keywords",
        accessor: "keywords",
    },
];

export const RESULT_COLUMNS = [
    {
        Header: "Keyword",
        accessor: "keyword",
    },
    {
        Header: "HTML/Cache Code Link",
        accessor: "htmlLink",
    },
    {
        Header: "Total Results",
        accessor: "totalResults",
    },
    {
        Header: "Total Ads",
        accessor: "totalAds",
    },
    {
        Header: "Search Time",
        accessor: "searchTime",
    },
    {
        Header: "Total Links",
        accessor: "totalLinks",
    },
    {
        Header: "Searched Link",
        accessor: "searchedLink",
    },
];

export const MOCK_RESULT = {
    data: {
        results: [
            {
                keyword: "nimblehq",
                htmlLink:
                    "http://jsonblob.com/api/jsonBlob/1040116175539027968",
                totalResults: "2,330",
                totalAds: 0,
                searchTime: "0.41 seconds",
                links: [
                    "https://nimblehq.co/",
                    "https://sg.linkedin.com/company/nimblehq",
                    "https://github.com/nimblehq",
                    "https://github.com/nimblehq/our-team",
                    "https://www.crunchbase.com/organization/nimblehq",
                    "https://www.instagram.com/explore/tags/nimblehq/?hl=en",
                    "https://www.facebook.com/nimblehq/",
                    "https://www.nimblehq.com/",
                    "https://www.npmjs.com/package/@nimblehq/eslint-config-nimble",
                ],
                totalLinks: 9,
                searchedLink:
                    "https://www.google.com/search?q=nimblehq&hl=en&gl=us",
            },
            {
                keyword: "github",
                htmlLink:
                    "http://jsonblob.com/api/jsonBlob/1040116209617747968",
                totalResults: "787,000,000",
                totalAds: 4,
                searchTime: "0.57 seconds",
                links: [
                    "https://github.com/",
                    "https://en.wikipedia.org/wiki/GitHub",
                    "https://github.blog/",
                    "https://play.google.com/store/apps/details?id=com.github.android&hl=en_US&gl=US",
                    "https://githubuniverse.com/",
                    "https://kinsta.com/knowledgebase/what-is-github/",
                ],
                totalLinks: 6,
                searchedLink:
                    "https://www.google.com/search?q=github&hl=en&gl=us",
            },
            {
                keyword: "youtube",
                htmlLink:
                    "http://jsonblob.com/api/jsonBlob/1040116256535232512",
                totalResults: "18,670,000,000",
                totalAds: 0,
                searchTime: "0.61 seconds",
                links: [
                    "https://www.youtube.com/",
                    "https://blog.youtube/",
                    "https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en_US&gl=US",
                    "https://en.wikipedia.org/wiki/YouTube",
                    "https://support.google.com/youtube/answer/1646861?hl=en",
                    "https://support.google.com/youtube/?hl=en",
                    "https://developers.google.com/youtube",
                ],
                totalLinks: 7,
                searchedLink:
                    "https://www.google.com/search?q=youtube&hl=en&gl=us",
            },
            {
                keyword: "facebook",
                htmlLink:
                    "http://jsonblob.com/api/jsonBlob/1040116296775385088",
                totalResults: "25,270,000,000",
                totalAds: 0,
                searchTime: "0.54 seconds",
                links: [
                    "https://www.facebook.com/",
                    "https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en_US&gl=US",
                    "https://about.fb.com/news/",
                    "https://apps.apple.com/us/app/facebook/id284882215",
                    "https://www.metacareers.com/",
                    "https://en.wikipedia.org/wiki/Facebook",
                    "https://mashable.com/category/facebook",
                ],
                totalLinks: 7,
                searchedLink:
                    "https://www.google.com/search?q=facebook&hl=en&gl=us",
            },
        ],
    },
    status: 200,
    statusText: "OK",
    headers: {
        connection: "keep-alive",
        "content-encoding": "gzip",
        "content-type": "application/json; charset=utf-8",
        date: "Thu, 10 Nov 2022 04:10:51 GMT",
        etag: '"va14bb63w11r2"',
        "keep-alive": "timeout=5",
        "transfer-encoding": "chunked",
        vary: "Accept-Encoding",
    },
    config: {
        url: "/api/search",
        method: "post",
        data: '{"payload":{"user":{"nickname":"test123","name":"test123@gmail.com","picture":"https://s.gravatar.com/avatar/9a93efa79aa9f5d35e14bc55a3e16dc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png","updated_at":"2022-11-06T14:52:41.758Z","email":"test123@gmail.com","email_verified":false,"sub":"auth0|6366889c00f9138b729bc946","sid":"mF1iS0d52e4JVvg5qfG5O-AFBB7LVCWy"},"keywords":[{"keywords":"nimblehq"},{"keywords":"github"},{"keywords":"youtube"},{"keywords":"facebook"}]}}',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
        },
    },
    request: {},
};

export const MOCK_PAYLOAD = {
    user: {
        nickname: "test123",
        name: "test123@gmail.com",
        picture:
            "https://s.gravatar.com/avatar/9a93efa79aa9f5d35e14bc55a3e16dc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        updated_at: "2022-11-06T14:52:41.758Z",
        email: "test123@gmail.com",
        email_verified: false,
        sub: "auth0|6366889c00f9138b729bc946",
        sid: "mF1iS0d52e4JVvg5qfG5O-AFBB7LVCWy",
    },
    keywords: [
        {
            keywords: "nimblehq",
        },
        {
            keywords: "github",
        },
        {
            keywords: "youtube",
        },
        {
            keywords: "facebook",
        },
    ],
};
