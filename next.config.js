/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    poweredByHeader: false,
    webpack: (config) => {
        return Object.assign({}, config, {
            module: Object.assign({}, config.module, {
                rules: config.module.rules.concat([
                    {
                        test: /\.md$/,
                        loader: 'raw-loader',
                    }
                ]),
            }),
        });
    },

    compiler: {
    },
}

module.exports = nextConfig
