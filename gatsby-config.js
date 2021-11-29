module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-graphql',
            options: {
                fieldName: 'saleor_lite',
                typeName: 'SaleorLite',
                url: 'https://saleor-lite.herokuapp.com/graphql/'
            }
        }
    ]
}
