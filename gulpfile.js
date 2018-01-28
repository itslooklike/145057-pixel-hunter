'use strict';

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const mqpacker = require('css-mqpacker');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const rollup = require('gulp-better-rollup');
const sourcemaps = require('gulp-sourcemaps');
const mocha = require('gulp-mocha');

gulp.task('style', () =>
  gulp
    .src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer({
          browsers: [
            'last 1 version',
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Opera versions',
            'last 2 Edge versions',
          ],
        }),
        mqpacker({ sort: true }),
      ])
    )
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
);

gulp.task('scripts', () =>
  gulp
    .src('js/main.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rollup({}, 'iife'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('build/js'))
);

gulp.task('test', () =>
  gulp.src(['js/**/*.test.js'], { read: false }).pipe(
    mocha({
      compilers: ['js:babel-register'], // Включим поддержку "import/export" в Mocha тестах
      reporter: 'spec', // Вид в котором я хочу отображать результаты тестирования
    })
  )
);

gulp.task('clean', () => del('build'));

gulp.task('copy-html', () =>
  gulp
    .src('*.{html,ico}')
    .pipe(gulp.dest('build'))
    .pipe(server.stream())
);

gulp.task(
  'copy',
  gulp.series('copy-html', 'scripts', 'style', () =>
    gulp.src(['fonts/**/*.{woff,woff2}', 'img/*.*'], { base: '.' }).pipe(gulp.dest('build'))
  )
);

gulp.task('assemble', gulp.series('clean', 'copy', 'style'));

gulp.task(
  'imagemin',
  gulp.series('copy', () =>
    gulp
      .src('build/img/**/*.{jpg,png,gif}')
      .pipe(
        imagemin([
          imagemin.optipng({ optimizationLevel: 3 }),
          imagemin.jpegtran({ progressive: true }),
        ])
      )
      .pipe(gulp.dest('build/img'))
  )
);

gulp.task(
  'js-watch',
  gulp.series('scripts', done => {
    server.reload();
    done();
  })
);

gulp.task(
  'serve',
  gulp.series('assemble', () => {
    server.init({
      server: './build',
      notify: false,
      open: false,
      port: 3502,
      ui: false,
    });

    gulp.watch('sass/**/*.{scss,sass}', gulp.series('style'));

    gulp.watch('*.html').on('change', e => {
      if (e.type !== 'deleted') {
        gulp.start('copy-html');
      }
    });

    gulp.watch('js/**/*.js', gulp.series('js-watch'));
  })
);

gulp.task('build', gulp.series('assemble', 'imagemin'));
