const filters = require('./lib/filters');


/**
 * CSS config.
 */
const cleanCssDefaults = {};

const cssConfig = {
  exclude: ['*.min.css']
};

hexo.config.asset_pipeline.clean_css = Object.assign(cleanCssDefaults, cssConfig, hexo.config.asset_pipeline.clean_css);

hexo.extend.filter.register('after_render:css', filters.css);


/**
 * Js config.
 */
const uglifyDefaults = {
  mangle: true
};

const jsConfig = {
  exclude: ['*.min.js']
};

hexo.config.asset_pipeline.uglify = Object.assign(uglifyDefaults, jsConfig, hexo.config.asset_pipeline.uglify);

hexo.extend.filter.register('after_render:js', filters.js);


/**
 * HTML config.
 */
const htmlMinifierDefaults = {
  ignoreCustomComments: [/^\s*more/],
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeEmptyAttributes: true,
  minifyJS: true,
  minifyCSS: true
};

const htmlConfig = {
  exclude: []
}

hexo.config.asset_pipeline.html_minifier = Object.assign(htmlMinifierDefaults, htmlConfig, hexo.config.asset_pipeline.html_minifier);

hexo.extend.filter.register('after_render:html', filters.html);


/**
 * Image config.
 */
const imageminDefaults = {
  interlaced: false,
  multipass: false,
  optimizationLevel: 3,
  pngquant: false,
  progressive: false
}

const imageConfig = {};
hexo.config.asset_pipeline.imagemin = Object.assign(imageminDefaults, imageConfig, hexo.config.asset_pipeline.imagemin);

hexo.extend.filter.register('after_generate', filters.image);


/**
 * Fonts config.
 */
// hexo.extend.filter.register('after_generate', filters.fonts);