module.exports = {
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/react', {useBuiltIns: true, runtime: 'automatic'}],
                        ],                    
                    }
                }
            },
        ]
    }
};
