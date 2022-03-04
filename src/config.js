const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: "",
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12,
    googleClientId: "996982688294-rqhcr4d5b6m3vk0e3ur2no457iqql2u5.apps.googleusercontent.com",
    paths: {
        landing: "/",
        app: "/app",
        auth: {
            login: "/login",
            register: "/register"
        }
    }
};

export default config;
