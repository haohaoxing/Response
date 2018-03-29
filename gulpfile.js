
//引入包
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify =  require('gulp-uglify');
var concat =  require('gulp-concat');
var connect =  require('gulp-connect');
var sass = require('gulp-ruby-sass');
var babel = require('gulp-babel');
var htmlmin = require('gulp-htmlmin');
var imagemin = require("gulp-imagemin");//压缩图片

//task命令：新建任务
// gulp.task('minifyCss',function(){
// 	//src命令：指定操作的文件
// 	return gulp.src('./src/css/index.css').pipe(cleanCss()).pipe(gulp.dest('./dist/css'));
// });

//压缩css
gulp.task('sass',function(){
	return sass('./src/scss/*.scss',{
		style:'compressed'
	}).pipe(concat('all.css').pipe(gulp.dest('./dist/css')));
});

//压缩js
gulp.task('minifyJs',function(){
	//src命令：指定操作的文件
	return gulp.src('./src/js/*.js').pipe(babel({
            presets: ['es2015']
        })).pipe(uglify()).pipe(gulp.dest('./dist/js'));
});

//压缩html
gulp.task('minifyHtml',function(){
	//src命令：指定操作的文件
	return gulp.src('./src/html/*.html').pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest('./dist/html'));
});

//拷贝图片
gulp.task('copy-image',function(){
	gulp.src('./src/img/*.{jpg,png,gif,webp}').pipe(imagemin()).pipe(gulp.dest('./dist/img'));
});

//新建reload任务
gulp.task('reload',['sass','minifyJs','minifyHtml','copy-image'],function(){
	gulp.src('./index.html').pipe(connect.reload());
});


//创建一个默认的任务
gulp.task('default',['sass','minifyJs','minifyHtml','copy-image'],function(){
	//开启服务器
	connect.server({
		livereload: true
	});
	//监听命令
	gulp.watch(['./src/scss/*.scss','./src/js/*.js','./src/html/*.html','./src/img/*.{jpg,png,gif,webp}'],['reload']);
});