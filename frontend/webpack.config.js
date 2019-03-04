const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports ={
    entry:'./src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename:'./app.js'
    },
    devServer:{
        port:8080,
        contentBase:'./public',
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname + '/node_modules',
            jquery:'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap:'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        }), 
        new ExtractTextPlugin('app.css')
    ],
    module:{
        
        loaders:[{
            test: /.js[x]?$/,//pegando qualquer arquivo .js e .jsx
            loader:'babel-loader',
            exclude: /node_modules/, //definindo que ele não precisa ler o conteudo que esta no diretorio node_modules, somente os outros da aplicação
            query:{//o que ele vai interpretar 
                presets:['es2015','react'],
                plugins: ["transform-object-rest-spread"] //esse plugin é usado para obter o operador Spread ( ... ) usado para clonar objetos
            }
        },{
            test: /\.css?$/,//poder carregar arquivos com extensão .css
            loader:ExtractTextPlugin.extract("style-loader","css-loader")
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,//arquivos de fonte e imagem
            loader: 'file'
        }
     ]
    }
}