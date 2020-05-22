const { watch, series, parallel, task, dest, src } = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');

// const browserSync = require('browser-sync').create();
// const reload = browserSync.reload;
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const buffer = require('vinyl-buffer');
const merge = require('merge-stream');
// const paths = {
//   pages: ['src/*.html']
// };

// const uglify = require('gulp-uglify');

const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');


let rootDir = './拖曳排程月曆/';
let outDir = './拖曳排程月曆/';

// 不作處理
// task('moveJs', function () {
//   return src([rootDir + "javascripts/*.js", rootDir + "javascripts/*/*.js"])
//     .pipe(dest(outDir + 'javascripts'))
// });

// task('moveCss', function () {
//   return src([rootDir + "stylesheets/*.css", rootDir + "stylesheets/*/*.css"])
//     .pipe(dest(outDir + 'stylesheets'))
// });


task('sass', function () {
  return src(rootDir + '/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    // .pipe(autoprefixer({
    //   browsers: ['last 2 versions'],
    //   cascade: false
    // }))
    .pipe(autoprefixer())
    // .pipe(cleanCSS({ compatibility: 'ie8' })) // 上線記得這段要取消註釋用來混淆
    .pipe(dest(outDir + 'css'));
});

// task('tScript', function () {
//   return src([ rootDir + "typescript/*.ts",  rootDir + "typescript/*/*.ts"])
//     .pipe(sourcemaps.init())
//     .pipe(tsProject())
//     .pipe(sourcemaps.write())
//     .pipe(dest( outDir + 'javascripts'));
// });

task('tScriptToWeb', function () {
  let files = ['main'];
  // return browserify({
  //   basedir: '.',
  //   debug: true,
  //   entries: [rootDir + 'typescript/temibroad/temibroad.ts'],
  //   cache: {},
  //   packageCache: {}
  // })
  //   .plugin(tsify)
  //   .transform('babelify', {
  //     presets: ['es2015'],
  //     extensions: ['.ts']
  //   })
  //   .bundle()
  //   .on('error', function (err) {
  //     // print the error (can replace with util)
  //     console.log(err.message);
  //     // end this stream
  //     this.emit('end');
  //   })
  //   // .pipe(coffee())
  //   .pipe(source('temibroad.js'))
  //   .pipe(buffer())
  //   // .pipe(uglify({
  //   //   compress: {
  //   //     drop_console: true,
  //   //   },
  //   // }))
  //   // 上線記得這段要取消註釋用來混淆
  //   .pipe(sourcemaps.init({ loadMaps: true }))
  //   .pipe(sourcemaps.write('./'))
  //   .pipe(dest(outDir + 'javascripts/temibroad'));
  return merge(files.map(function (file) {
    return browserify({
      basedir: '.',
      debug: true,
      entries: [rootDir + 'typescript/' + file + '.ts'],
      cache: {},
      packageCache: {},
      standalone: "dk_ScheduleCalendar"
    })
      .plugin(tsify)
      .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
      })
      .bundle()
      .on('error', function (err) {
        // print the error (can replace with gulp-util)
        console.log(err.message);
        // end this stream
        this.emit('end');
      })
      // .pipe(coffee())
      .pipe(source(file + '.js'))
      .pipe(buffer())
      // .pipe(uglify({
      //   compress: {
      //     drop_console: true,
      //   },
      // }))
      // 上線記得這段要取消註釋用來混淆
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(dest(outDir + 'javascripts'));
  }));
});

task('watch', function () {
  // watch([rootDir + "javascripts/*.js", rootDir + "javascripts/*/*"], series('moveJs'));
  // watch([rootDir + "stylesheets/*.css", rootDir + "stylesheets/*/*"], series('moveCss'));
  watch([rootDir + "sass/*.scss", rootDir + "sass/*/*"], series('sass'));
  // watch([ rootDir + "sass/*.scss",  rootDir + "sass/*/*"], series('sass')).on('change', reload);   //可以這樣熱更新 
  // watch([ rootDir + "typescript/*.ts",  rootDir + "typescript/*/*.ts"], series('tScript'));
  watch([rootDir + "typescript/**/*"], series('tScriptToWeb'));
})

exports.default = series(parallel('sass') , 'tScriptToWeb' , 'watch');