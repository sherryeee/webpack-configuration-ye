let path = require('path');
let fs = require('fs');

let kitUtils = require('./config_kit/kit_utils');

let webpack = require('webpack');
let HtmlwebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

//文件路径
let ROOT_PATH = path.resolve(__dirname);
let SRC_PATH = path.resolve(ROOT_PATH, 'src');
let BUILD_PATH = path.resolve(ROOT_PATH, 'build'); // __dirname + "/build"在window linux和mac的目录下生成的不同
let TEM_PATH = path.resolve(SRC_PATH, 'templates');

let WEBPACK_GlOBAL_CONFIG = kitUtils.getGlobalConfig(path.resolve(ROOT_PATH, 'config_kit/webpack_global_config.json'));
let LOCAL_IP_PARAMS = WEBPACK_GlOBAL_CONFIG.getLocalIPParams;
let IP = kitUtils.getLocalIP(LOCAL_IP_PARAMS.ip, LOCAL_IP_PARAMS.mac, LOCAL_IP_PARAMS.name);



const WEBPACK_CONFIG = {
    setDevServer: (webpack_global_config) => {
        const { PORT, proxy } = webpack_global_config;
        let devServer = {
            contentBase: BUILD_PATH,
            historyApiFallback: true,//不跳转
            inline: true,//实时刷新
            port: PORT,
            host: IP
        };
        if (proxy.isNeed) {
            devServer.proxy = proxy.matchObj;
        }
        return devServer;
    },

    /**
     * set
     * @return {[type]} [description]
     */
    setRules: () => {
        let rules = [];

        /* ES6、ES7，JSX转码 */
        rules.push({
            test: /(\.js|\.jsx)$/,	
            use: 'babel-loader',
            include:SRC_PATH
            //exclude: /(node_modules)/,
            
        });

        /*图片*/
        rules.push({
        	 test: /\.(png|jpg)$/,
        	 use:{
        	 	loader:'url-loader',//?limit=1&name=img/[name].[hash:8].[ext]
        	 	options:{
        	 		limit:1,
        	 		name:'/img/[hash:8].[name].[ext]',
        	 		outputPath:'img',
        	 		emitFile: false
        	 	}
        	 },

        })

        /* Sass */
        rules.push({
            test: /(\.css|\.scss)$/,	
            use: ExtractTextPlugin.extract({
                	fallback:'style-loader',
                	use: [
                	'css-loader',
                	'postcss-loader',
                	'sass-loader',    
                	]
             	}),
            include:SRC_PATH
            
        });

        console.log(rules)
        return rules;
    },
    setPlugins: () => {
        let plugins = [];
        /* 自动创建HTML文件 */
        plugins.push(
            new HtmlwebpackPlugin({
                template: path.resolve(TEM_PATH, 'index.html'),
                filename: 'index.html',
                hash: true,
                inject: 'body' //all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
            })
        );

        /* 将css代码单独打包出来， */ 
        plugins.push(
        	new ExtractTextPlugin('css/[name].css')
        	//new ExtractTextPlugin('app.css')
        )

        /*为了避免未修改的文件被打包，webpack 本身自带一个插件去处理：*/
        plugins.push(
        	new webpack.HashedModuleIdsPlugin()
        )
       /* 提取公共模块，webpack 也自带了一个插件去处理
       /提取公共模块，比如index1.js和index2.js都引入了jquery，那么jquery就会被当作公共文件被打包进runtime
        new webpack.optimize.CommonsChunkPlugin({ //最小化入口 chunk
			name: ['runtime'],
			minChunks: Infinity
		})*/
		//引入clean-webpack-plugin插件后在配置文件的plugins中做相应配置即可：
		plugins.push(new CleanWebpackPlugin(BUILD_PATH, {
		      root: __dirname,
		      verbose: true,
		      dry: false
  			})
  		)
        return plugins;
    },
    //为了解决文件越来越大的问题，只需要每次在打包之前，将原来目录里的文件清除掉即可。
    emptyDir:(fileUrl) =>{
    	try {
			let files = fs.readdirSync(fileUrl);//读取该文件夹
			files.forEach(function (file) {
				let stats = fs.statSync(fileUrl + '/' + file);
				if (stats.isDirectory()) {
					emptyDir(fileUrl + '/' + file);
				} else {
					fs.unlinkSync(fileUrl + '/' + file);
					console.log("删除文件" + fileUrl + '/' + file + "成功");
				}
			});
		} catch (e) {
			console.log(e);
		}
    }
}

/**
 * 
 * @param {Object} env webpack参数中设置的环境变量
 */
module.exports = function(env) {
    let {
        isDev = 0
    } = env

    isDev = isDev === 1 ? true : false; //是否是开发环境

    return {
        entry: {
            app: path.resolve(SRC_PATH, 'index.js')
        },
        output: {
            path: BUILD_PATH,
            publicPath: '/',
            filename: 'js/bundle-[hash].js' //单一入口的
        },
         /* 开发环境下开启sourceMap技术 */
        devtool: isDev ? 'eval-source-map' : '', ////开发模式配置生成Source Maps，选择合适的选项//调试

        /* webpack-dev-server的配置 */
        devServer: WEBPACK_CONFIG.setDevServer(WEBPACK_GlOBAL_CONFIG),

        module:{
        	rules:WEBPACK_CONFIG.setRules()
        },
        plugins: WEBPACK_CONFIG.setPlugins(WEBPACK_GlOBAL_CONFIG)
    }
    // body...
}
